// TypeScript / Bun / Node 22+ example for Mori (森)
// Run: HANZO_API_KEY=... bun run examples/generate.ts

import { writeFileSync } from "node:fs";

const apiKey = process.env.HANZO_API_KEY;
if (!apiKey) throw new Error("Set HANZO_API_KEY");

const prompt = process.argv[2] ?? "Weathered bronze astrolabe with engraved celestial rings, PBR textures";

const res = await fetch("https://api.hanzo.ai/v1/3d/generations", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    model: "mori",
    prompt: prompt,
  }),
});

if (!res.ok) {
  throw new Error(`mori failed (${res.status}): ${await res.text()}`);
}

const buf = Buffer.from(await res.arrayBuffer());
const outPath = "/tmp/mori.glb";
writeFileSync(outPath, buf);
console.log(`Saved ${buf.byteLength} bytes to ${outPath}`);
