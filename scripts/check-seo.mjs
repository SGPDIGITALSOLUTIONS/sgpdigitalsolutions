import assert from 'node:assert/strict';
import { get } from 'node:http';

// Run against a production build or the live site: node scripts/check-seo.mjs [base URL]
const base = process.argv[2] || 'http://localhost:3000';
const canonicalBase = 'https://www.sgpdigitalsolutions.co.uk';
const decode = value => value.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;|&#39;|&apos;/g, "'");
const attrs = tag => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, key, value]) => [key, decode(value)]));
const elements = (html, tag) => [...html.matchAll(new RegExp(`<${tag}\\b[^>]*>`, 'g'))].map(([element]) => attrs(element));
const fetchPage = async (path, options) => fetch(new URL(path, base), { signal: AbortSignal.timeout(30000), ...options });

const sitemap = await fetchPage('/sitemap.xml');
assert.equal(sitemap.status, 200, 'Sitemap must be available');
const urls = [...(await sitemap.text()).matchAll(/<loc>(.*?)<\/loc>/g)].map(([, url]) => decode(url));
assert(urls.length >= 20, 'Sitemap must include existing pages and the three automation pages');
assert.equal(new Set(urls).size, urls.length, 'Sitemap URLs must be unique');
assert(urls.every(url => url.startsWith(`${canonicalBase}/`)), 'Sitemap must use the canonical host');
assert(!urls.some(url => /\/(dummy|webinspire)(?:$|\?)/.test(url)), 'Retired pages must not be in the sitemap');
const robots = await fetchPage('/robots.txt');
assert.equal(robots.status, 200);
const robotsText = await robots.text();
assert(robotsText.includes(`Sitemap: ${canonicalBase}/sitemap.xml`), 'Robots must advertise the sitemap');
assert(!/^Disallow:\s*\/\s*$/m.test(robotsText), 'Public pages must not be blocked');

const pages = [];
const localTargets = new Set(['/downloads/SGP-Automation-Brochure.pdf', '/opengraph-image']);
for (const url of urls) {
  const path = new URL(url).pathname;
  const response = await fetchPage(path);
  assert.equal(response.status, 200, `${path} status`);
  const html = await response.text();
  const title = decode(html.match(/<title>(.*?)<\/title>/s)?.[1] || '');
  const meta = Object.fromEntries(elements(html, 'meta').map(a => [a.name || a.property, a.content]));
  assert(title.length > 10 && meta.description?.length > 50, `${path} descriptive metadata`);
  assert.deepEqual(elements(html, 'link').filter(a => a.rel === 'canonical').map(a => a.href), [url], `${path} canonical`);
  assert.equal(meta['og:url'], url, `${path} social URL`);
  assert(meta['og:image']?.startsWith(`${canonicalBase}/opengraph-image`), `${path} sharing image`);
  assert.equal(meta['twitter:card'], 'summary_large_image', `${path} Twitter card`);
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `${path} one main heading`);
  assert(!/noindex/i.test(`${meta.robots || ''} ${response.headers.get('x-robots-tag') || ''}`), `${path} indexable`);
  for (const a of elements(html, 'a')) {
    if (a.href?.startsWith('/') && !a.href.startsWith('//') && !a.href.startsWith('/api/')) localTargets.add(a.href.split('#')[0]);
  }
  for (const a of elements(html, 'img')) {
    assert('alt' in a, `${path} image alt attribute`);
    if (a.src?.startsWith('/_next/image?')) localTargets.add(new URL(a.src, base).searchParams.get('url'));
    else if (a.src?.startsWith('/') && !a.src.startsWith('//')) localTargets.add(a.src);
  }
  if (path === '/') {
    const schema = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map(([, json]) => JSON.parse(json));
    assert(schema.some(item => item['@type'] === 'Organization' && item.founder?.name === 'Stephen Pratt'), 'Business schema');
    const poster = elements(html, 'video')[0]?.poster;
    assert(poster && response.headers.get('link')?.includes(poster), 'Homepage must preload the video poster');
    assert.equal(elements(html, 'video')[0].preload, 'none', 'Video must not be eagerly downloaded');
    const posterResponse = await fetchPage(poster, { headers: { Accept: 'image/webp,image/*;q=0.8' } });
    assert.equal(posterResponse.status, 200, 'Optimised poster available');
    assert((await posterResponse.arrayBuffer()).byteLength < 49972, 'Optimised poster smaller than original');
  }
  if (path === '/portfolio') {
    const links = elements(html, 'a').map(a => a.href).filter(href => /^\/portfolio\/[^?#]+$/.test(href || ''));
    assert.equal(new Set(links).size, 7, 'All seven client stories must be linked in the server HTML');
    assert(!html.includes('Loading client stories'), 'Client stories must not require client rendering');
  }
  pages.push({ path, title, description: meta.description });
}
assert.equal(new Set(pages.map(page => page.title)).size, pages.length, 'Every page needs a unique title');
assert.equal(new Set(pages.map(page => page.description)).size, pages.length, 'Every page needs a unique description');

for (const [category, count] of [['Website Design', 5], ['Automation', 3], ['Data recovery', 1], ['unknown', 7]]) {
  const response = await fetchPage(`/portfolio?category=${encodeURIComponent(category)}`);
  const html = await response.text();
  assert.equal((html.match(/<article\b/g) || []).length, count, `Server-rendered filter: ${category}`);
  assert(elements(html, 'link').some(a => a.rel === 'canonical' && a.href === `${canonicalBase}/portfolio`), 'Filters share the portfolio canonical');
}
for (const [path, destination] of [['/dummy', '/'], ['/webinspire', '/websites']]) {
  const response = await fetchPage(`${path}?source=seo-check`, { redirect: 'manual' });
  assert.equal(response.status, 308, `${path} permanently redirects`);
  const location = new URL(response.headers.get('location'), base);
  assert.equal(location.pathname, destination);
  assert.equal(location.searchParams.get('source'), 'seo-check', 'Redirect retains query parameters');
}
const missing = await fetchPage('/seo-audit-missing-page-check');
assert.equal(missing.status, 404, 'Unknown pages must return a real 404');

const checkedPaths = new Set(pages.map(page => page.path));
for (const target of [...localTargets].filter(target => target && !checkedPaths.has(target))) {
  const response = await fetchPage(target);
  assert.equal(response.status, 200, `Internal link/image target: ${target}`);
  if (target === '/opengraph-image') {
    assert(response.headers.get('content-type')?.includes('image/png'));
    const buffer = Buffer.from(await response.arrayBuffer());
    assert.equal(buffer.readUInt32BE(16), 1200, 'OG image width');
    assert.equal(buffer.readUInt32BE(20), 630, 'OG image height');
  } else await response.body?.cancel();
}

if (new URL(base).hostname === 'localhost') {
  // Node fetch normalises Host; raw HTTP is needed to exercise the host rule locally.
  const apex = await new Promise((resolve, reject) => {
    const request = get(new URL('/about?source=seo-check', base), { headers: { Host: 'sgpdigitalsolutions.co.uk' } }, response => {
      response.resume();
      resolve({ status: response.statusCode, location: response.headers.location });
    });
    request.setTimeout(30000, () => request.destroy(new Error('Host redirect check timed out')));
    request.on('error', reject);
  });
  assert.equal(apex.status, 308, 'Apex host permanently redirects');
  assert.equal(apex.location, `${canonicalBase}/about?source=seo-check`);
} else if (base === canonicalBase) {
  const apex = await fetch('https://sgpdigitalsolutions.co.uk/about?source=seo-check', { redirect: 'manual', signal: AbortSignal.timeout(30000) });
  assert.equal(apex.status, 308, 'Live apex host permanently redirects');
  assert.equal(apex.headers.get('location'), `${canonicalBase}/about?source=seo-check`);
}

console.log(JSON.stringify({ result: 'PASS', base, pages: pages.length, checkedInternalTargets: localTargets.size,
  checks: ['Unique metadata', 'Canonical URLs', 'Sitemap and robots', 'Sharing image', 'Business schema',
    'Initial client-story HTML', 'Legacy filters', 'Permanent redirects', 'Real 404', 'Internal links and images', 'Video poster preload'] }, null, 2));
