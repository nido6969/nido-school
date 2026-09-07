# Pixel Perfect Montessori

Clone the uploaded Nido Montessori School website exactly as shown in the screenshots. Treat the uploaded images as the single source of truth for the UI, layout, spacing, typography, colors, proportions, icons, sections, navigation, and overall visual appearance.

Requirements:

- Recreate the website pixel-perfect in Next.js (App Router) with TypeScript.

- Use Tailwind CSS for styling.

- Build every section as reusable React components.

- Match the desktop, tablet, and mobile layouts exactly as seen in the screenshots.

- Replicate all paddings, margins, borders, shadows, gradients, hover states, and animations wherever visible.

- Use placeholders for images if necessary, but preserve the exact image sizes, aspect ratios, and positions from the screenshots.

- Preserve the exact navigation structure, dropdowns, buttons, cards, testimonials, galleries, footer, and every visible UI element.

- Match the typography hierarchy (font sizes, weights, line heights, letter spacing) as closely as possible.

- Ensure the website is fully responsive and visually identical across all breakpoints.

- Maintain semantic HTML5 structure for accessibility and SEO.

- Optimize images using Next.js Image component.

- Use Server Components wherever appropriate and Client Components only where interactivity is required.

- Follow clean folder architecture with reusable components and organized sections.

- Implement proper metadata using the Next.js Metadata API.

- Generate clean, maintainable, production-ready code with no unnecessary dependencies.

- Achieve high Core Web Vitals scores (LCP, CLS, INP).

- Use lazy loading where appropriate and optimize performance.

- Do not redesign, modernize, or improve the UI. Do not change colors, spacing, fonts, or layouts unless absolutely required for responsiveness.

- The final output should look indistinguishable from the uploaded website screenshots.

Important:

The objective is to faithfully recreate the website, not reinterpret or redesign it. Every visible detail in the uploaded screenshots should be replicated as accurately as possible while using modern Next.js best practices and maintaining excellent SEO and performance.https://www.nidomontessori.in/

## Deploy (AWS Amplify + GoDaddy WordPress)

This app is the **main school website** ([nidomontessori.in](https://www.nidomontessori.in/)). Editors add blogs at [wp-admin](https://www.nidomontessori.in/blog/wp-admin); `/blogs` reads those WordPress Posts automatically. Other pages are not in WordPress. Deploy notes: [docs/deploy-aws.md](docs/deploy-aws.md).

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone https://github.com/swift08/pixel-perfect-montessori.git
cd pixel-perfect-montessori
npm i
npm run dev
```
