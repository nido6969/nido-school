# Deploy: main site + WordPress blogs

This repo is the **main school website** matching [nidomontessori.in](https://www.nidomontessori.in/). **Only the Blogs section** is powered by WordPress. Home, About, Admissions, and the rest stay in this React app.

Editors add or edit blogs here (no git required):

- [https://www.nidomontessori.in/blog/wp-admin](https://www.nidomontessori.in/blog/wp-admin)

A published **Post** is read from `https://www.nidomontessori.in/blog/wp-json/wp/v2/posts` and shown on `/blogs` and `/blogs/:slug` within about 15 seconds. You do not redeploy AWS when you publish a blog.

The research site is [nido6969/nido_research](https://github.com/nido6969/nido_research.git).

## 1. WordPress (blogs only)

WordPress is installed in the `/blog/` subdirectory. Do not move the rest of the public site into WordPress.

1. Log in at `/blog/wp-admin` → **Posts → Add New** → Publish.
2. **Settings → Permalinks** = **Post name** so `/blog/wp-json/` works.
3. Confirm JSON at `https://www.nidomontessori.in/blog/wp-json/wp/v2/posts`.
4. If a security plugin blocks REST, allow public `GET` on `/wp-json/wp/v2/posts`.
5. Optional CORS (needed only if the browser, not the server, calls the API):

```php
add_action('init', function () {
  $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
  $allowed = [
    'https://www.nidomontessori.in',
    'https://nidomontessori.in',
    'http://localhost:3000',
  ];
  if (in_array($origin, $allowed, true)) {
    header("Access-Control-Allow-Origin: $origin");
    header('Access-Control-Allow-Methods: GET, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization');
  }
});
```

If the REST request fails (site down), `/blogs` temporarily shows the bundled articles. When WordPress responds, **only** WP posts are listed.

## 2. AWS Amplify (Option 1 — selected)

1. In AWS Amplify, **Create app → GitHub** and select `nido6969/nido-school` (or this repo).
2. Branch: `main`. Amplify reads `amplify.yml`.
3. Environment variables (optional; the app already defaults to the live CMS):
   - `WORDPRESS_URL` = `https://www.nidomontessori.in/blog` (include `/blog`, no trailing slash).
   - `WORDPRESS_CONTENT_TYPE` = `posts`
4. Framework: Node SSR. Start command if the console asks: `node .output/server/index.mjs` with port `3000`. Artifact root is `.output`.
5. Custom domain: `www.nidomontessori.in` / apex when you cut over. Keep `/blog/` on the current WordPress host so wp-admin keeps working.
6. DNS: point the **marketing pages** at Amplify when ready. Do not point `/blog/` away from WordPress.

### GitHub Actions (push → wait until AWS finishes)

Workflow [`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml):

1. **Lint and build** — always runs on `main` and on PRs; this job must go green.
2. **Deploy to AWS Amplify** — on push to `main` (and **Run workflow**). It starts an Amplify job and **polls until `SUCCEED`** (or fails the GitHub job).

One-time AWS: Amplify → Host web app → GitHub → `nido6969/nido-school` → branch `main`. Copy the app id.

GitHub repo **Settings → Secrets and variables → Actions**:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AMPLIFY_APP_ID`

Optional variable: `AWS_REGION` (default `ap-south-1`).

IAM user needs `amplify:StartJob` and `amplify:GetJob` on that app.

Until those secrets exist, the deploy job still **finishes successfully** and prints skip instructions. After secrets are set, `git push origin main` rebuilds and the GitHub job waits until Amplify is done.

`git push` to `main` updates the React site. Publishing a post in wp-admin updates `/blogs` without a push.

## 3. Local development

```sh
cp .env.example .env
npm i
npm run dev
```

`.env.example` already points at `https://www.nidomontessori.in/blog`.

## 4. Options 2–3 (EC2, not the current path)

`Dockerfile` and `.github/workflows/deploy-ec2.yml` are included if you later move the frontend to EC2. Enable that workflow with `ENABLE_EC2_DEPLOY=true` and secrets `EC2_HOST`, `EC2_USER`, `EC2_SSH_KEY`. WordPress stays at `/blog/wp-admin`.
