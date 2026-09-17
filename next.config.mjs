/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async headers() {
    return [{
      source: '/',
      headers: [{
        key: 'Link',
        value: '</_next/image?url=%2Fvideos%2Fsgp-automation-poster.jpg&w=1080&q=75>; rel=preload; as=image; fetchpriority=high',
      }],
    }];
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'sgpdigitalsolutions.co.uk' }],
        destination: 'https://www.sgpdigitalsolutions.co.uk/:path*',
        permanent: true,
      },
      { source: '/dummy', destination: '/', permanent: true },
      { source: '/webinspire', destination: '/websites', permanent: true },
    ];
  },
};

export default nextConfig;
