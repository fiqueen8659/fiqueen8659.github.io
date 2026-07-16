# Edit the website

The website is English-only. There are no duplicate language pages to maintain.

## Shared settings

Edit `assets/js/site-config.js` to change your name, email, profile links, taglines, site address, or colours.

## Main pages

- `index.html` - homepage
- `about.html` - biography
- `research.html` - research listing
- `projects.html` - project listing
- `portfolio.html` - portfolio
- `cv.html` - browser CV
- `contact.html` - contact page

## Research and project subpages

Edit the English (`en`) fields in `assets/js/detail-data.js`. Each entry contains its title, summary, tags, overview, challenge, methods, metadata, and related pages.

## PDF CV

1. Edit the `CV = {...}` section in `scripts/generate_cv.py`.
2. Run `python3 scripts/generate_cv.py` from the site folder.
3. The new PDF is written to `assets/files/brandon-chen-cv.pdf`.
