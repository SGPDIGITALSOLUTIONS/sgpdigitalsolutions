# Admin & Workflow Healthcheck — Microsoft Forms setup

The landing page at `/admin-workflow-healthcheck` collects details on your site, then redirects visitors to your Microsoft Form with fields pre-filled.

## 1. Create the Microsoft Form

Add questions that match (or combine) these site fields:

| Site field | Suggested MS Form question |
|------------|---------------------------|
| Name | Name |
| Business name | Business name |
| Email | Email |
| Phone | Phone |
| Process / admin task | What process would you like us to look at? |
| What currently happens | Long text |
| Pain points | Long text |
| Tools in use | Long text |
| Preferred contact | Choice: Email / Phone / Either |
| Consent | Yes/No or statement |

## 2. Get the pre-fill URL

1. Open your form in Microsoft Forms.
2. **Share** → **Get a link to pre-fill**.
3. Copy the full URL (it includes query parameters for each field).

## 3. Configure the site

In `.env.local` (not committed):

```env
NEXT_PUBLIC_MS_FORM_HEALTHCHECK_URL=https://forms.office.com/e/xxxxxxxx?...
```

Restart the dev server after changing env vars.

## 4. Map query parameters

Open the pre-fill link and note each field’s query name (often `r` + id, e.g. `r1a2b3c4=`.

Field mapping is configured in `src/lib/healthcheck/ms-form.ts` (`MS_FORM_FIELD_PARAMS`).

| Site field | MS question param |
|------------|-------------------|
| Name | `r74661dab4ec347f88ec8387de318b610` |
| Business name | `r829bcd2742be4eaab5ce172fc77e2ddd` |
| Email | `r84f53c06fd1841e694022e30aafed26a` |
| Phone | `rca1d3679555d454ca8c4a66ba3843bca` |
| Process / admin task | `rb14c226863bf42d1885a8fe986fd63c6` (+ `QuestionInfo_…`) |
| What currently happens | `r58301804b427468194c293e6ba4d49bf` |
| Pain points | `r46a829d59fea4edd8587093507f2b418` |
| Tools in use | `r57b098761c7a48d5837299c1de8b578d` |
| Preferred contact | `r763471f4692546c1b6b74a96c7a6f99c` (+ `QuestionInfo_…`) |

Only fields with a mapped key and a non-empty value are appended to the redirect URL.

## 5. Test

1. Run `npm run dev`.
2. Open `/admin-workflow-healthcheck`.
3. Fill the form and click **Express Interest**.
4. Confirm Microsoft Forms opens with the correct fields filled.

## Optional: video embed

```env
NEXT_PUBLIC_HEALTHCHECK_VIDEO_URL=https://www.youtube.com/embed/VIDEO_ID
```

## Troubleshooting

- **“Booking form is not configured”** — `NEXT_PUBLIC_MS_FORM_HEALTHCHECK_URL` is missing or empty.
- **Form opens but fields empty** — parameter names in `MS_FORM_FIELD_PARAMS` do not match the pre-fill URL.
- **Redirect fails** — check the base URL is a valid absolute URL with no extra spaces.
