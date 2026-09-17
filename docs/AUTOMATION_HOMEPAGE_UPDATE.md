# Automation-led homepage update

## Scope

This update replaces the homepage presentation, embeds the supplied film,
and changes the existing homepage metadata to prioritise business automation.
It does not alter service pages, contact handling, environment variables,
dependencies, the shared Header component, or deployment configuration.

The source was inspected on `master` at commit
`6ed3170ef86f6fe6e63162597c34afd9da45bec4`. Review any changes made after that
commit before replacing the two existing files below.

## Files

| Path | Status | Purpose |
| --- | --- | --- |
| `src/components/home/HomePage.tsx` | Replaces existing file | Server-rendered, automation-first homepage |
| `src/lib/home/content.ts` | Replaces existing file | New automation content and updated metadata; prior exports retained |
| `src/components/home/HomePage.module.css` | New | Scoped responsive homepage styling |
| `src/components/home/HomeNavigation.tsx` | New | Homepage navigation with mobile disclosure and keyboard support |
| `src/components/home/AutomationVideo.tsx` | New | On-demand film, native controls and playback error handling |
| `src/components/home/AutomationIcon.tsx` | New | Small decorative inline SVG icons; no icon dependency |
| `public/videos/sgp-automation.mp4` | New | Web-optimised version of the supplied film |
| `public/videos/sgp-automation-poster.jpg` | New | Frame from the supplied film at 35.8 seconds |

`src/app/page.tsx` already imports the homepage and `homeMeta`; no route changes
are needed. The existing layout continues to supply the site's fonts.
The logo remains `/images/logo trimmed.png`.

## Content hierarchy

1. “Less admin. More business.” and an automation enquiry call to action.
2. The supplied film in the opening section.
3. Reporting, expenses, finance admin, onboarding, reminders and integrations.
4. An explicitly illustrative expenses workflow, not a fake live dashboard.
5. A three-step delivery process and the existing Tony Wing testimonial excerpt.
6. The existing £50 healthcheck as a secondary starting point.
7. Other digital services and a final automation enquiry call to action.

The testimonial wording and attribution are taken from the existing homepage.
No new client statistics, savings figures, testimonials or guarantees were added.
Integration availability is described as dependent on supported connections.

## Video implementation

The MP4 uses H.264 video and AAC audio, 1920 × 1080 at 30 frames per second,
with a duration of 72.5 seconds. It has a fast-start MP4 layout. Compression
reduces file size; it is not a lossless copy. The sequence is not shortened,
retimed or edited, and audio remains present.

`preload="none"` avoids requesting preloading of the full media file. Playback
begins through an explicit user action. Native playback controls, `playsInline`,
a large play button, poster, direct-file fallback and source/video error
handlers are included. The native controls are present in the initial HTML,
so playback does not depend solely on the custom JavaScript play button.

The adjacent expandable text is a film overview, **not** a verbatim transcript
or a timed caption track. No speech transcription was performed. Review the
film's audio and add an accurate caption track if one is needed for spoken
content or the site's accessibility requirements.

The video is served from the site's own `public/videos` directory. A specialist
video host can be considered separately if traffic or delivery requirements
justify it; no third-party player or account is introduced by this update.

## Navigation and styling

The homepage has a dedicated navigation component. Other pages keep their
existing header. The mobile disclosure closes on selection or Escape and resets
when the viewport changes to the desktop breakpoint. Footer navigation and
privacy/terms links remain available.

CSS is scoped through a CSS module. It retains black, white, SGP green
(`#00ff88`), the existing brand font families and a restrained yellow accent for
the healthcheck. It does not change `globals.css` or the Tailwind configuration.

## Validation performed

- Five TS/TSX modules transpiled without syntax diagnostics.
- Isolated component preview rendered with React 18.2 and Chromium.
- No page-width overflow at 320, 375, 390, 549, 768, 1024, 1080, 1280, 1440 or
  1920 pixels using the available fallback fonts.
- One main H1 and all six automation categories rendered.
- All same-page anchor targets exist.
- Mobile menu opening, closing on selection, Escape and focus restoration passed.
- No autoplay; preload disabled; video was not decoded before playback.
- Full-length, full-resolution playback and unmuted user-initiated audio passed.
- Play overlay removal, pause and invalid-media fallback passed.
- No JavaScript page errors occurred in the component preview.

The preview used local adapters for Next Link/Image and in-memory video data
because network/file navigation was unavailable in the test browser. The actual
patch uses normal Next components and public asset URLs. The test did not verify
the real logo binary, remote font loading, HTTP range responses, deployed routing,
Safari/iOS playback, or the complete application build.

A full `npm run build`, project-wide type/lint/test run and deployment preview
remain to be run in the existing repository. In particular, review the real
logo/fonts and check the video on a phone before production deployment.

## Rollback

Restore the previous `HomePage.tsx` and `content.ts` from Git. The added components,
CSS and video files can then be removed if unused. No data migration is involved.
