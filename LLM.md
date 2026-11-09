# Mori — agent notes

Mori (`mori`, `mori-1`) is Hanzo's 3D asset, mesh, and world generation SKU. This repo is its **model card, API contract, and deployment spec**; inference serving runs in [`hanzo-inc/zen`](https://github.com/hanzo-inc/zen). Read this before changing anything that serves `mori`.

## Where Mori lives across the stack

| Layer | Repo / file | What it owns |
|---|---|---|
| The SKU, its price, its rungs | `hanzo/universe` → `charts/app/files/zen/catalog.yaml` | the `mori` entry (`zen-3d: *mori`, alias `mori-1: mori`, `microsoft/trellis: mori`) |
| The serving plane | [`hanzo-inc/zen`](https://github.com/hanzo-inc/zen) → `media.go` | `mediaProxy` |
| Cloud gateway & Studio | `hanzo-inc/cloud` → `apps/ai/media_rpc.go`, `apps/studio/exec.go` | Studio step defaults `model.generate` to `mori` |
| 1-click K8s Stack | [`hanzo-inc/platform`](https://github.com/hanzo-inc/platform) → `src/lib/deploy/stacks.ts` | `mori` stack template (`ghcr.io/hanzoai/mori:latest`) |
| Product page | [`hanzo-inc/app`](https://github.com/hanzo-inc/app) → `lib/creative-models.ts` | `/mori` (`mori-1`, open foundation `zen-3d` / `zenlm/zen-3d`) |

## Verifying a deploy

```bash
# 1. Verify mori is in the live model catalog
curl -s https://api.hanzo.ai/v1/models | jq '.data[] | select(.id=="mori")'

# 2. Generate 3D asset with mori
curl -s https://api.hanzo.ai/v1/videos/generations \
  -H "Authorization: Bearer $HANZO_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"model":"mori","prompt":"weathered bronze astrolabe with engraved celestial rings"}'
```
