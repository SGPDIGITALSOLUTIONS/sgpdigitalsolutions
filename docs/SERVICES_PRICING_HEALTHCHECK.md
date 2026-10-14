# Services, pricing and healthcheck update

Updated 14 October 2026.

- Services leads with business automation, Microsoft 365 and expense approval workflows, with separate website and bespoke web-tool services.
- Pricing distinguishes the £50 review, scoped automation builds and separately agreed support. Existing web-tool payment amounts are retained and first-year totals are shown.
- The healthcheck explains the one-process scope, deliverables, booking enquiry and separately quoted implementation. Session length and turnaround are agreed when booking, as confirmed by the owner.
- The homepage healthcheck link is now a prominent button. Metadata reflects the revised services and pricing pages.
- The existing healthcheck API and Power Automate submission are unchanged. The empty video placeholder is hidden when no video URL is configured.

## Verification

- Next.js production build passed, including its type validation.
- Existing SEO script passed: 20 pages, 33 internal targets.
- Browser checks passed for services, pricing, healthcheck and homepage at 390px: no horizontal overflow; no browser errors.
- Services CTA reaches the healthcheck; the healthcheck CTA reaches the enquiry form; required-field validation works; pricing questions expand.
- No real lead or notification was submitted during testing. Live delivery through Power Automate was not exercised.
- Existing test limitations: Jest cannot parse the import in unchanged jest.setup.js with its current configuration; standalone TypeScript reports the existing toBeInTheDocument matcher typing error in Header.test.tsx.
