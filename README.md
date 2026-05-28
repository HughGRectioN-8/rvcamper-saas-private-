# RV Command — Master Dashboard

A single-file ops dashboard for a high-volume RV dealership. 13 pages (campaigns, pricing, leads, service, reviews, permissions, and more), wired live to Supabase.

## What’s in here

- **index.html** — the whole app. One file. That’s it.

## Put it live from your phone (GitHub Pages)

1. Open the **GitHub** app and make a new repository (name it anything, set it **Public**).
1. Tap **Add file → Create new file**, name it `index.html`.
1. Paste in the full contents of the console file, then **Commit**.
1. On a browser tab, go to your repo → **Settings → Pages**.
1. Under **Build and deployment**, set Source to **Deploy from a branch**, pick `main` and `/ (root)`, then **Save**.
1. Wait ~1 minute. Your live link appears at the top of that Pages screen — something like `https://YOURNAME.github.io/REPONAME/`.
1. Open that link on your phone. Done.

To make changes later: edit `index.html` in the GitHub app, commit, and the site updates itself in about a minute.

## Good to know

- **Supabase is already connected.** The app reads and writes live data the moment it loads — no extra setup.
- **Don’t judge it from a file preview.** It needs a real browser (your Pages link) to reach the database. Opening the raw file won’t connect.
- **Roles:** go to the **Controls Access** page to switch between Exec, Lot Manager, and Sales. The whole app changes — permissions, editable colors, and what’s read-only all follow the role.
- **Colors:** Exec can recolor everything; a Lot Manager can only recolor their own pages; Sales can’t change colors. Changes save to the database.

## Not live yet (on purpose)

The AI writing features (post scheduling, ad copy, nurture messages) and the phone/ad/payment pieces (Vapi, Twilio, Meta/TikTok) are shown but not wired. They need a secret API key, which can’t sit safely in a public file — that comes with a small backend step later.

## Tech

- Plain HTML + JavaScript (no build step)
- Supabase (database + row-level security)
- Hosted on GitHub Pages