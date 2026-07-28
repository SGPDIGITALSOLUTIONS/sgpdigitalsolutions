# SGP Digital Solutions — Brand Guidelines

> **Version:** 1.0  
> **Last updated:** July 2026  
> **Source:** Derived from [sgpdigitalsolutions.co.uk](https://sgpdigitalsolutions.co.uk) design system

---

## 1. Brand Overview

### Who we are

**SGP Digital Solutions** builds clean, affordable digital solutions for small businesses — websites, automation, bespoke web tools, and admin workflow reviews. We serve people doing the real work, not enterprise procurement teams.

### Positioning

| Attribute | Description |
|-----------|-------------|
| **Promise** | Smart websites, efficient systems, and less admin faff |
| **Audience** | Small businesses, charities, and sole traders drowning in repetitive admin |
| **Differentiator** | Transparent pricing, quick wins, no jargon, no agency price tag |
| **Tone** | Direct, practical, slightly irreverent — expert but approachable |

### Taglines in use

- *"Less admin. Less copy-paste. More time for the work that matters."*
- *"We automate the boring stuff. You do the real work."*
- *"No jargon. No nonsense. No printers."*
- *"Find the faff. Explain the faff. Reduce the faff."*

### Core values

1. **Transparency** — No hidden costs or surprise fees  
2. **Affordable** — Good work shouldn't cost a fortune  
3. **Efficient** — Quick turnarounds, clear communication  
4. **Honest** — If you don't need it, we won't build it  

---

## 2. Visual Identity

### Design philosophy: **Cyberpunk Neobrutalism**

The SGP visual language combines two influences:

1. **Terminal / cyberpunk** — Dark backgrounds, neon green glow, circuit-board motifs, monospace headings. Evokes developer tools and technical competence.
2. **Neobrutalism** — Thick borders, hard offset shadows, minimal border-radius, bold uppercase type. Feels confident, unpretentious, and tactile.

The result is a brand that looks technical without being cold, and bold without being corporate.

### Design principles

- **Dark-first.** Black backgrounds are the default canvas.
- **High contrast.** White and neon green text on black; never low-contrast grey-on-grey body copy.
- **Hard shadows, not soft blur.** Elements use offset box-shadows (`4px 4px 0px`), not diffuse drop shadows.
- **Colour as wayfinding.** Each nav section and service card gets a distinct accent colour.
- **Glow sparingly.** Green text-shadow and box-shadow glow is reserved for headings, CTAs, and hover states.

---

## 3. Logo

### Primary logo

**File:** `/images/logo trimmed.png`  
**Format:** PNG with transparent/black background  
**Composition:**
- Left: Green rounded-square icon with black circuit-board **E** mark
- Right: **SGP DIGITAL** (top line) / **SOLUTIONS** (bottom line) in bold white uppercase sans-serif

### Icon / favicon

**File:** `/images/sgpfavicon.png`  
**Usage:** Browser tab icon, app icon, social avatar  
**Composition:** Black circuit **E** on green rounded-square background (`#00ff88`)

### Logo clear space

Maintain padding equal to the height of the **E** icon on all sides. Do not crop tighter than the trimmed PNG already allows.

### Logo sizing (web header)

| Breakpoint | Max height | Max width |
|------------|-----------|-----------|
| Mobile | 48px (`h-12`) | 340px |
| Tablet | 56px (`h-14`) | 440px |
| Desktop | 64px (`h-16`) | 560px |

### Logo — do's and don'ts

| Do | Don't |
|----|-------|
| Use on black or very dark backgrounds | Place on busy or light backgrounds without a dark container |
| Scale proportionally (width auto) | Stretch, squash, or rotate the logo |
| Use the trimmed PNG for web headers | Add drop shadows or glows to the logo file itself |
| Use the green icon alone for favicons/social | Change the green to a different hue |

---

## 4. Colour Palette

### Primary colours

| Name | Hex | RGB | Role |
|------|-----|-----|------|
| **Terminal Black** | `#000000` | 0, 0, 0 | Primary background, button text on green |
| **Terminal Dark** | `#0a0a0a` | 10, 10, 10 | Card backgrounds, mobile menu panel |
| **Terminal Grey** | `#1a1a1a` | 26, 26, 26 | Hover states, muted surfaces |
| **Terminal Border** | `#2a2a2a` | 42, 42, 42 | Subtle dividers |
| **Terminal White** | `#ffffff` | 255, 255, 255 | Body text, default borders |

### Brand accent — green (primary)

| Name | Hex | Usage |
|------|-----|-------|
| **Terminal Green** | `#00ff88` | Primary brand colour — headings, CTAs, borders, glow |
| **Terminal Green Bright** | `#00ffaa` | Hover state for primary buttons |
| **Terminal Green Dark** | `#00cc66` | Reserved for depth/pressed states |

> **Note:** `sgp-green` is an alias for `#00ff88`.

### Secondary accents (wayfinding)

Each accent maps to a section of the site. Use one accent per component — don't mix multiple accent borders on a single element.

| Name | Hex | Used for |
|------|-----|----------|
| **Terminal Cyan** | `#00ffff` | About nav, secondary buttons, healthcheck cards |
| **Terminal Blue** | `#0088ff` | Secondary button hover |
| **Terminal Purple** | `#8844ff` | Services nav, service cards |
| **Terminal Pink** | `#ff44aa` | Clients/portfolio nav, testimonial cards |
| **Terminal Yellow** | `#ffff00` | Admin/Process MOT promo, featured offers |
| **Terminal Red** | `#ff4444` | Errors, warnings (reserved) |

### Semantic mapping

| Token | Maps to |
|-------|---------|
| `--background` | Terminal Black |
| `--foreground` | Terminal White |
| `--primary` | Terminal Green |
| `--secondary` | Terminal Cyan |
| `--muted` | Terminal Grey |
| `--border` | Terminal White |
| `--card` | Terminal Dark |

### Colour ratios (guidance)

- **~70%** black/dark surfaces  
- **~20%** white text and white-bordered elements  
- **~10%** accent colours (green dominant, others for wayfinding)  

### Accessibility note

Neon green on black passes contrast for large text and UI elements but may fail WCAG AA for small body copy. Use white (`#ffffff`) for paragraph text; reserve green for headings, labels, and interactive elements.

---

## 5. Typography

### Font families

| Role | Font | Fallback stack | Tailwind class |
|------|------|----------------|----------------|
| **Headings & UI** | [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) | Fira Code, Consolas, Monaco, monospace | `font-terminal-mono` |
| **Body copy** | [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) | Inter, system-ui, sans-serif | `font-terminal-sans` |

Both fonts are loaded via Google Fonts in the site layout (weights 300–700 for Space Grotesk; 400–700 for JetBrains Mono).

### Type scale

| Element | Mobile | Desktop | Weight | Style |
|---------|--------|---------|--------|-------|
| **Hero title** | 60px (`text-6xl`) | 128px (`text-9xl`) | 900 (black) | Uppercase, mono |
| **H1** | 36px (`text-4xl`) | 72px (`text-7xl`) | 900 | Uppercase, mono |
| **H2 / Section title** | 36px (`text-4xl`) | 60px (`text-6xl`) | 900 | Uppercase, mono, green |
| **H3** | 24px (`text-2xl`) | 36px (`text-4xl`) | 700 | Uppercase, mono |
| **H4** | 20px (`text-xl`) | 24px (`text-2xl`) | 700 | Uppercase, mono, green |
| **Body** | 16px (`text-base`) | 18px (`text-lg`) | 400 | Sentence case, sans |
| **Nav links** | 16px | 16px | 700 | Uppercase, mono, wide tracking |
| **Buttons** | 16px | 16px | 700 | Uppercase, mono, wide tracking |
| **Badges** | 12px (`text-xs`) | 12px | 700 | Uppercase, mono |

### Heading treatment

All headings (`h1`–`h4`) use:
- **Uppercase** letterforms  
- **Tight tracking** (`tracking-tight`) on large headings; **wide tracking** (`tracking-wide`) on h4 and buttons  
- **Hard text-shadow:** `2px 2px 0px #000000` (black offset)  
- **Green glow** on h1, h2, and section titles: `0 0 10–15px rgba(0, 255, 136, 0.5–0.8)`

### Body copy

- Line height: **1.6** (`leading-relaxed`)  
- Colour: white at full opacity, or **90% white** (`text-terminal-white/90`) for secondary paragraphs  
- Sentence case — never uppercase body text  

---

## 6. Layout & Spacing

### Container

```
max-width: 80rem (1280px) — Tailwind max-w-7xl
horizontal padding: 16px mobile → 24px tablet → 32px desktop
```

### Section spacing

- Standard section padding: `py-14` to `py-24` (56–96px vertical)  
- Section header bottom margin: `mb-16` (64px)  
- Grid gaps: `gap-6` (24px) for card grids, `gap-12` to `gap-16` for two-column layouts  

### Grid background

The body uses a subtle green grid overlay:

```css
background-image:
  linear-gradient(90deg, rgba(0, 255, 136, 0.03) 1px, transparent 1px),
  linear-gradient(rgba(0, 255, 136, 0.03) 1px, transparent 1px);
background-size: 100px 100px;
```

Hero sections use a denser 50×50px grid at 10% green opacity, plus animated SVG circuit traces.

---

## 7. Borders, Radius & Shadows

### Borders

| Token | Value | Usage |
|-------|-------|-------|
| Default border width | **3px** (`border-3`) | Buttons, cards, inputs, header |
| Heavy border | **4px** (`border-4`) | Terminal windows, mobile menu |
| Standard border colour | White (`#ffffff`) | Default neo-brutalist outline |
| Accent borders | Match accent colour | Card variants, nav hover |

### Border radius

| Token | Value | Usage |
|-------|-------|-------|
| `rounded-terminal` | **2px** | Buttons, inputs, nav links, badges |
| `rounded-neo` | **4px** | Cards, panels, mobile menu |
| `rounded-neo-lg` | **8px** | Larger containers (rare) |

Keep corners **nearly square** — this is a core neobrutalist trait. Avoid large pill-shaped buttons.

### Shadow system (offset, not blur)

| State | Shadow |
|-------|--------|
| **Default** | `4px 4px 0px 0px [colour]` |
| **Hover** | `6px 6px 0px 0px [colour]` + `translate(-2px, -2px)` |
| **Active/pressed** | `2px 2px 0px 0px [colour]` + `translate(1px, 1px)` |
| **Glow** | `0 0 10–20px rgba(0, 255, 136, 0.5–0.8)` |

Shadow colour matches the element's border colour (white, green, cyan, etc.).

### Transitions

```css
transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
```

Keep interactions snappy — 200ms, not slow fades.

---

## 8. UI Components

### Buttons

All buttons: uppercase mono, 3px border, offset shadow, 200ms transition.

| Variant | Background | Text | Border | Shadow |
|---------|-----------|------|--------|--------|
| **Primary** (`.btn-primary`) | Green `#00ff88` | Black | Black | Black offset |
| **Secondary** (`.btn-secondary`) | Cyan `#00ffff` | Black | Black | Black offset |
| **Accent** (`.btn-accent`) | Black | Green | Green | Green offset |
| **Outline** (`.btn-outline`) | Black | White | White | White offset |
| **Default** (`.btn`) | Black | White | White | White offset |

Padding: `px-6 py-3`. Contact CTA in header uses `px-6 py-2 text-sm`.

### Cards

Base card (`.card`):
- Background: Terminal Dark `#0a0a0a`  
- Border: 3px white  
- Shadow: 4px white offset  
- Padding: `p-6` to `p-8`  

Colour variants (`.card-green`, `.card-cyan`, `.card-purple`, `.card-pink`):
- Background: Terminal Black  
- Border + shadow match accent colour  

### Badges (`.badge`)

- Green background, black text  
- 2px black border, 2px black offset shadow  
- `text-xs`, uppercase, wide tracking  
- Example: *"Popular starting point"*, *"[SYSTEM ONLINE]"*

### Navigation

**Standard nav link** (`.nav-link`):
- White uppercase mono text  
- Hover: green text + subtle scale (`scale-105`) + green glow  

**Nav accent mapping:**

| Link | Hover border colour |
|------|-------------------|
| Home | Green |
| About | Cyan |
| Services | Purple |
| Clients | Pink |
| Admin/Process MOT | Yellow (always highlighted) |
| Contact | Primary button (green) |

**Admin/Process MOT promo link:**
- Yellow border + 15% yellow background  
- Yellow text with soft yellow glow  
- Hover: solid yellow background, black text  

### Form inputs (`.input`)

- Black background, 3px white border, 2px white offset shadow  
- Mono font, white text, 60% white placeholder  
- Focus: green border, green text glow, shadow grows to 3px offset  

### Section headers (`.section-header`)

- Centred title + subtitle  
- Green underline bar (24px wide, 4px tall) with glow, positioned below  

---

## 9. Imagery & Graphics

### Circuit board motif

- SVG paths in green, cyan, and magenta with pulse animation  
- Used as hero background decoration  
- Reinforces the circuit **E** icon in the logo  

### Terminal window (`.terminal-window`)

- Black background, 3px green border, green offset shadow  
- Decorative `● ● ●` window controls (top-left)  
- Used for code snippets, healthcheck graphics, callout panels  

### Photography

- Team/founder photos use the same neo-brutalist frame: thick coloured border + offset shadow  
- Prefer authentic, approachable portraits over stock photography  

### Emoji

Used sparingly as icon substitutes in feature cards (💰 ⚡ 🔄 🌐 🛠️ 🔧). Acceptable for web UI; avoid in formal documents or print.

---

## 10. Voice & Tone

### Personality

SGP sounds like a ** knowledgeable mate who builds stuff**, not a consultancy deck. We're confident, plain-spoken, and occasionally funny — but never at the client's expense.

### Writing rules

| Do | Don't |
|----|-------|
| Use plain English | Use jargon ("synergise", "leverage", "digital transformation") |
| Name the actual problem ("copy-paste", "spreadsheet", "inbox as task manager") | Speak in abstractions ("optimise workflows") |
| Use short sentences and paragraphs | Write long, formal blocks |
| Be direct about pricing (£50, From £200, From £49/month) | Hide pricing behind "get a quote" |
| Use British English and £ | Use American spelling or $ |
| Allow mild humour ("admin has started taking the piss") | Be sarcastic about clients or their tools |
| Say "we" for the company, "I" for Steve on personal pages | Over-use corporate "we're passionate about..." |

### Key phrases

- **Admin & Workflow Healthcheck** — the £50 paid review product  
- **Admin/Process MOT** — nav label for the healthcheck (MOT = annual check metaphor)  
- **Workflow goblins** — the small recurring annoyances in a process  
- **The faff** — repetitive, low-value admin work  
- **Bespoke Webtools** — custom web applications (not "Custom Tool Development")  

### CTA language

Preferred button labels:
- *"Express interest in the £50 healthcheck"*
- *"Start with the £50 healthcheck"*
- *"Book a free scoping call"*
- *"Contact Us"*
- *"See before/after examples"*

Avoid: *"Learn more"*, *"Submit"*, *"Click here"*

---

## 11. Motion & Animation

| Animation | Usage |
|-----------|-------|
| `terminal-glow` | Pulsing glow on badges and accent elements (2s alternate) |
| `animate-pulse` | Circuit SVG traces in hero |
| `neo-bounce` | Hover feedback on playful elements |
| `neo-wiggle` | Optional hover wiggle (`.wiggle`) |
| `fade-in` | Content entrance (0.5s ease-out) |

Keep animation **functional, not decorative**. If removing an animation doesn't hurt comprehension, it's optional.

---

## 12. Brand Applications

### Website header

- Sticky black bar with 3px green bottom border  
- Logo left, nav right (desktop) / hamburger (mobile)  
- Admin/Process MOT link always visible in yellow promo style  

### Featured offer treatment

The £50 healthcheck is the primary conversion offer:
- Yellow accent (not green) to differentiate from standard CTAs  
- *"Popular starting point"* badge on hero card  
- Yellow nav link in header  

### Email & documents

When adapting the brand off-web:
- Use Space Grotesk for body, JetBrains Mono for headings (or a system mono fallback)  
- Black background optional — white background with green headings works for print/PDF  
- Maintain the 3px border + offset shadow on callout boxes where possible  

### Social media

- Profile image: favicon (green square + circuit E)  
- Post templates: black background, green headline, white body, one accent colour per post  
- Tone: same as website — practical, direct, occasionally witty  

---

## 13. Quick Reference — CSS Variables

```css
:root {
  /* Backgrounds */
  --terminal-black: #000000;
  --terminal-dark: #0a0a0a;
  --terminal-grey: #1a1a1a;

  /* Text & borders */
  --terminal-white: #ffffff;
  --terminal-border: #2a2a2a;

  /* Brand */
  --terminal-green: #00ff88;
  --terminal-green-bright: #00ffaa;
  --terminal-green-dark: #00cc66;

  /* Accents */
  --terminal-cyan: #00ffff;
  --terminal-blue: #0088ff;
  --terminal-purple: #8844ff;
  --terminal-pink: #ff44aa;
  --terminal-yellow: #ffff00;
  --terminal-red: #ff4444;

  /* Design tokens */
  --neo-border-width: 3px;
  --neo-border-radius: 4px;
  --neo-shadow-offset: 4px;
  --neo-transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
```

---

## 14. File Reference

| Asset / file | Purpose |
|-------------|---------|
| `public/images/logo trimmed.png` | Primary web logo |
| `public/images/sgpfavicon.png` | Favicon & app icon |
| `src/app/icon.png` | Next.js auto favicon |
| `src/app/globals.css` | Full design system (colours, components) |
| `tailwind.config.ts` | Tailwind tokens, animations, utilities |
| `src/app/layout.tsx` | Font loading (Space Grotesk + JetBrains Mono) |

---

*This document reflects the live site design system as of July 2026. For implementation details, refer to the source files listed above.*
