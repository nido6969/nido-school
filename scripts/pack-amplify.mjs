import { cpSync, mkdirSync, rmSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const outputDir = join(root, ".output");
const publicDir = join(outputDir, "public");
const bundleDir = join(root, ".amplify-hosting");
const computeDir = join(bundleDir, "compute", "default");

if (!existsSync(join(outputDir, "server", "index.mjs"))) {
  throw new Error("Missing .output/server/index.mjs. Run npm run build first.");
}

rmSync(bundleDir, { recursive: true, force: true });
mkdirSync(computeDir, { recursive: true });
mkdirSync(join(bundleDir, "static"), { recursive: true });

cpSync(outputDir, computeDir, { recursive: true });
if (existsSync(publicDir)) {
  cpSync(publicDir, join(bundleDir, "static"), { recursive: true });
}

writeFileSync(
  join(computeDir, "package.json"),
  `${JSON.stringify({ type: "module" }, null, 2)}\n`,
);

writeFileSync(
  join(computeDir, "server.js"),
  `process.env.PORT = process.env.PORT || "3000";
process.env.HOST = process.env.HOST || "0.0.0.0";
process.env.NITRO_PORT = process.env.NITRO_PORT || process.env.PORT;
process.env.NITRO_HOST = process.env.NITRO_HOST || process.env.HOST;
await import("./server/index.mjs");
`,
);

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
      path: "/robots.txt",
      target: { kind: "Static" },
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
      entrypoint: "server.js",
    },
  ],
};

writeFileSync(join(bundleDir, "deploy-manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);
console.log("Wrote Amplify Hosting bundle to .amplify-hosting");
