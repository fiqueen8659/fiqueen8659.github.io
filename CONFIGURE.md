# Configuration

The website is English-only.

## Shared identity and appearance

Edit `assets/js/site-config.js` to change the name, initials, site URL, email, LinkedIn, ORCID, tagline, and four brand colours.

## Main content

The seven main pages are ordinary HTML files in the site root. See `EDIT-HERE.md` for the exact file map.

## Research content

Edit `assets/js/research-data.js`. Adding one topic object automatically creates both its card and detail page. Research interests are listed in `assets/js/site-config.js`.

## Project content

Edit the project entries in `assets/js/detail-data.js`.

## CV

Edit the marked `CV` block in `scripts/generate_cv.py`, then run the script to rebuild `assets/files/brandon-chen-cv.pdf`.
