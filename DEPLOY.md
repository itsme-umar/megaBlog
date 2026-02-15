# Deploying InkWell to GitHub Pages

## Why the site was blank after switching to InkWell

The app is built with **`base: '/inkwell'`** (see `vite.config.js`).  
On GitHub Pages, the site is served at:

**`https://<your-username>.github.io/<repository-name>/`**

So the **repository name** and **`base`** must match. If the repo is still named `megaBlog`, the site is at `/megaBlog/` but the app loads assets and routes from `/inkwell/`, so the page is blank or broken.

---

## Fix: match the repo name to the base path

### Option 1: Rename the repo to `inkwell` (recommended)

1. On GitHub, open your repository.
2. Go to **Settings** → **General**.
3. Under **Repository name**, change `megaBlog` to **`inkwell`** and save.
4. Your site URL will be: **`https://<your-username>.github.io/inkwell/`**
5. Push any commit (or re-run the “Deploy” workflow) so GitHub Pages redeploys.

After that, the deployed app should load correctly at that URL.

---

### Option 2: Keep the repo name (e.g. `megaBlog`)

If you want to keep the repo named `megaBlog` and have the site at **`https://<user>.github.io/megaBlog/`**, then the app’s base must be `megaBlog` again:

- In **`vite.config.js`** set: **`base: '/megaBlog'`**
- All routes and links in the app must use **`/megaBlog/`** again (e.g. `/megaBlog/home`, `/megaBlog/login`, …).

So you either:

- **Rename repo → `inkwell`** and keep **`base: '/inkwell'`**, or  
- **Keep repo name** and set **`base: '/megaBlog'`** and use `/megaBlog/` everywhere.

---

## Appwrite (no change needed)

Appwrite is not tied to the URL path. As long as in the Appwrite Console you added the **correct site URL** under **Auth → Platforms** (e.g. `https://<user>.github.io/inkwell` or your custom domain), login and API calls will work. No change is required in the Appwrite config when you fix the base path as above.
