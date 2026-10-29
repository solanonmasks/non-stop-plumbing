# Non Stop Plumbing & Heating — website

A one-page website for Non Stop Plumbing & Heating Ltd (Langley, BC), built with [Astro](https://astro.build).
Astro turns the files in `src/` into a plain, fast HTML page in `dist/`.

## Run it on your computer

You need [Node.js](https://nodejs.org) (version 18.20 or newer) installed.

```bash
npm install
```

```bash
npm run dev
```

Then open http://localhost:4321 in your browser. The page reloads as you save changes.
Press `Ctrl + C` in the terminal to stop it.

To build the final site (the same thing Vercel does): `npm run build`.

## Where to change things

| What you want to change | File |
| --- | --- |
| Phone number, text, services, reviews, form buttons | `src/data/site.js` |
| Colours and fonts | top of `src/styles/global.css` |
| Page layout / sections | `src/pages/index.astro` |
| Logo | `public/images/logo.png` (keep the same file name) |
| Domain name (for Google + social sharing) | `site:` in `astro.config.mjs` |

### Phone number
The number isn't known yet, so the page says **"Phone number TBC"** and the **Call** buttons scroll to the contact form instead of dialling.
When you have the number, open `src/data/site.js` and fill in:

```js
phone: '+16045551234',        // digits only, with +1
phoneDisplay: '604-555-1234', // how it shows on the page
```

The Call buttons then become real "tap to call" links automatically.

### Reviews
The reviews section shows "HomeStars review coming soon" boxes. Paste real review text into the `reviews` list in `src/data/site.js`:

```js
{ text: 'They fixed our leak the same day...', name: 'Jane D.', place: 'Langley' },
```

Add more lines to show more reviews.

## Put it online (Vercel)

1. Go to [vercel.com](https://vercel.com), sign in with GitHub, click **Add New → Project**.
2. Pick the `non-stop-plumbing` repository.
3. Vercel detects **Astro** — leave all settings as they are and click **Deploy**.

Every time a change is pushed to `main`, Vercel updates the site.

## Make the contact form send emails

Right now the form only shows a thank-you message; it doesn't send anything.

1. Create a free form at [formspree.io](https://formspree.io).
2. Copy its URL (looks like `https://formspree.io/f/abcdwxyz`).
3. Paste it into `formEndpoint: ''` in `src/data/site.js`, then push.

## Open items before launch

- [ ] **Phone number** — get it from the client (see above).
- [ ] **6 HomeStars reviews** — get the text and add it to `reviews` (the design shows 2 slots; add as many as you like).
- [ ] Company number **751328832** is shown in the contact section — confirm it's correct.
- [ ] **Form** — set up Formspree (see above).
- [ ] **Domain** — replace `https://example.com` in `astro.config.mjs` with the real domain.
- [ ] Images: the only image is the logo, which is stored in this repo (`public/images/logo.png`). If you add photos later, put them in `public/images/` rather than linking to another website.

## Undo a change

Every change is saved as a "commit" in git, so you can always go back.

```bash
git log --oneline
```

shows the list of changes. To undo one (this adds a new commit that reverses it, nothing is lost):

```bash
git revert <commit-id>
```

To throw away edits you haven't committed yet: `git restore .`
