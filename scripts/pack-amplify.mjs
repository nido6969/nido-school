import { cpSync, mkdirSync, rmSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const outputDir = join(root, ".output");
const publicDir = join(outputDir, "public");
const bundleDir = join(root, ".amplify-hosting");

if (!existsSync(join(outputDir, "server", "index.mjs"))) {
  throw new Error("Missing .output/server/index.mjs. Run npm run build first.");
}

rmSync(bundleDir, { recursive: true, force: true });
mkdirSync(join(bundleDir, "compute", "default"), { recursive: true });
mkdirSync(join(bundleDir, "static"), { recursive: true });

cpSync(outputDir, join(bundleDir, "compute", "default"), { recursive: true });
if (existsSync(publicDir)) {
  cpSync(publicDir, join(bundleDir, "static"), { recursive: true });
}

const manifest = {
  version: 1,
  framework: { name: "nitro", version: "3" },
  routes: [
    {
      path: "/assets/*",
      target: {
        kind: "Static",
        cacheControl: "public, max-age=31536000, immutable",
      },
    },
    {
      path: "/*",
      target: { kind: "Compute", src: "default" },
    },
  ],
  computeResources: [
    {
      name: "default",
      runtime: "nodejs22.x",
      entrypoint: "server/index.mjs",
    },
  ],
};

writeFileSync(join(bundleDir, "deploy-manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);
console.log("Wrote Amplify Hosting bundle to .amplify-hosting");
