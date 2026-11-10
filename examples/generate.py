#!/usr/bin/env python3
"""Generate with Mori (森) via https://api.hanzo.ai/v1/3d/generations."""
import json
import os
import sys
import urllib.request

API_KEY = os.environ["HANZO_API_KEY"]
PROMPT = sys.argv[1] if len(sys.argv) > 1 else "Weathered bronze astrolabe with engraved celestial rings, PBR textures"

body = {"model": "mori", "prompt": PROMPT}
if "mori" == "koe":
    body["voice"] = "alloy"

req = urllib.request.Request(
    "https://api.hanzo.ai/v1/3d/generations",
    data=json.dumps(body).encode(),
    headers={
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json",
    },
)
with urllib.request.urlopen(req, timeout=120) as resp:
    raw = resp.read()

out_path = "/tmp/mori.glb"
with open(out_path, "wb") as f:
    f.write(raw)
print(f"Wrote {len(raw)} bytes to {out_path}")
