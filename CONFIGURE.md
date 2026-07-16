# Configure the website

Most site-wide changes require editing only:

`assets/js/site-config.js`

For the simplest workflow, read `EDIT-HERE.md`. With `autoTranslateChinese: true`, maintain English only; the live Chinese view is generated automatically.

## Change identity and links

Edit the values for `name`, `initials`, `email`, `linkedin`, `orcid`, and `siteUrl`.

## Change the header tagline

Edit `tagline.en` and `tagline.zh`.

## Change colours

Edit the four values inside `colours`. The defaults reproduce the IPNL source design system:

- Accent: `#2D3B97`
- Red: `#D3313A`
- Background: `#FAF7F1`
- Dark header: `#161B40`

## Change page content

- English: `index.html`, `about.html`, `research.html`, `projects.html`, `portfolio.html`, `cv.html`, `contact.html`
- Traditional Chinese: the matching files inside `zh-tw/`

Every English page has a direct language link to its Traditional Chinese counterpart, including Portfolio and CV.

## Add or edit research/project subpages

Edit `assets/js/detail-data.js`. Each entry controls its bilingual title, summary, tags, overview, challenge, methods, metadata, and related pages. The HTML wrappers stay small and share one layout.
