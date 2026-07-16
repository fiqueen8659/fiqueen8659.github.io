# Edit the website

The website is English-only. There are no duplicate language pages to maintain.

## Shared settings

Edit `assets/js/site-config.js` to change your name, email, profile links, taglines, site address, or colours.

Set `profilePhoto` to your photograph. You can use an online image URL or add a file such as `assets/images/profile.jpg` and use that path.

## Main pages

- `index.html` - homepage
- `about.html` - biography
- `research.html` - research listing
- `projects.html` - project listing
- `portfolio.html` - portfolio
- `cv.html` - browser CV
- `contact.html` - contact page

## Team and supervisors

Edit `assets/js/team-data.js`. Copy a complete person object and set `role` to `"supervisor"` or `"member"`. Add a photo URL/path, position, organisation, interests, biography, website, and email.

## News posts and media cards

Edit `assets/js/content-data.js`.

- Add news inside `NEWS_POSTS`.
- Add presentations, videos, interviews, posters, or coverage inside `MEDIA_ITEMS`.

Copy one complete object and give it a unique `slug`. Its card and full detail page are generated automatically. Add paragraphs by adding quoted lines to the `body` array.

## Add a research card and detail page

Edit `assets/js/research-data.js`.

Copy one complete topic object inside `RESEARCH_TOPICS`, paste it after another object, and change:

- `slug` - unique lowercase URL name, such as `ppp-rtk`
- `title` - card and page title
- `label` - small category label
- `summary` - card summary and page introduction
- `tags` - keyword pills
- `overview` and `challenge` - detail-page text
- `methods` - four animated method boxes
- `related` - links to other research or projects

The card and its full detail page are created automatically. You do not create another HTML file.

3DMA GNSS and Factor Graph Optimization are included as editable examples.

## Edit the Research Interests list

Edit `researchInterests` in `assets/js/site-config.js`. This list appears on the About page.

## Edit project subpages

Project details remain in `assets/js/detail-data.js`.

## PDF CV

1. Edit the `CV = {...}` section in `scripts/generate_cv.py`.
2. Run `python3 scripts/generate_cv.py` from the site folder.
3. The new PDF is written to `assets/files/brandon-chen-cv.pdf`.
