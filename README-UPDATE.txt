SGP DIGITAL SOLUTIONS — AUTOMATION HOMEPAGE UPDATE

This ZIP is an update for your EXISTING repository, not a replacement website.
Repository: SGPDIGITALSOLUTIONS/sgpdigitalsolutions
Base branch inspected: master
Base commit inspected: 6ed3170ef86f6fe6e63162597c34afd9da45bec4

APPLY THE UPDATE

1. Extract this ZIP.
2. Merge its src, public and docs folders into the root of your existing
   repository. Replace the matching files, but KEEP all other existing files.
   Do not delete your existing src or public folders.
3. Run your normal build and review the homepage, then commit and deploy.

Using GitHub in your browser: use Add file > Upload files at the repository
root and upload the extracted folders/files, retaining their paths.
Do not upload the ZIP itself: GitHub does not unpack it into your source tree.

WHAT CHANGES

- The main homepage is now led by business automation.
- The video is prominently featured in the opening section.
- Six practical automation areas replace the generic first-screen service grid.
- The £50 healthcheck remains as a secondary starting point.
- Website design, bespoke tools and support remain accessible further down.
- Homepage title, description and keywords now focus on automation.
- The original logo path and brand font families are reused.
- Navigation and styling changes are limited to the homepage.

The original video has been re-encoded to an approximately 17 MB MP4, keeping
its 72.5-second duration, 1920 x 1080 picture and audio. It plays on demand
with native controls, inline playback and a thumbnail taken from the film.
The uploaded original is not altered or included in this ZIP.

No dependency changes, environment variables or backend changes are required.
The existing src/app/page.tsx still imports HomePage and homeMeta, so it does
not need changing.

CHECKS

The TS/TSX modules transpiled without syntax diagnostics.
An isolated React 18.2/Chromium component preview passed responsive checks
at 10 widths from 320 to 1920 pixels, video playback and pause, error fallback,
mobile navigation and Escape-key behaviour. It produced no runtime errors.

This was NOT a complete Next.js build, full TypeScript project check or
end-to-end deployment test. Next Link/Image were adapted for the component
preview. Remote brand fonts and the existing logo binary were not loaded in
that preview; the delivered code reuses the existing site assets. Run your
normal production build and review those assets in your repository before
publishing. No GitHub commit or live-site deployment has been made.

See docs/AUTOMATION_HOMEPAGE_UPDATE.md for file paths and implementation notes.
