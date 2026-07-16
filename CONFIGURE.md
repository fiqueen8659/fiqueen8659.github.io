# Configuration

The website is English-only.

## Shared identity and appearance

Edit `assets/js/site-config.js` to change the name, initials, site URL, email, LinkedIn, ORCID, tagline, and four brand colours.

The same file controls the About-page profile photo and Research Interests list.

## Main content

The seven main pages are ordinary HTML files in the site root. See `EDIT-HERE.md` for the exact file map.

## Research content

Edit `assets/js/research-data.js`. Adding one topic object automatically creates both its card and detail page. Research interests are listed in `assets/js/site-config.js`.

## Project content

Edit the project entries in `assets/js/detail-data.js`.

## Team, News, and Media

- `assets/js/team-data.js` controls supervisors and members.
- `assets/js/content-data.js` controls News and Media cards and posts.

## CV

Edit the marked `CV` block in `scripts/generate_cv.py`, then run the script to rebuild `assets/files/brandon-chen-cv.pdf`.
