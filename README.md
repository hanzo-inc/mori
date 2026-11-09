<p align="center"><b>mori (森)</b><br><i>Hanzo's 3D asset, mesh & world generation model</i></p>

# Mori

Mori (`mori`, `mori-1`) is Hanzo's 3D asset, mesh, and spatial scene generation model, served from Hanzo's inference fabric at `api.hanzo.ai` under the canonical id **`mori`** (open foundation: **`zen-3d`** / [`zenlm/zen-3d`](https://github.com/zenlm/zen-3d)). It generates production-ready manifold meshes, full PBR material stacks, and spatially consistent 3D environments.

```bash
curl https://api.hanzo.ai/v1/3d/generations \
  -H "Authorization: Bearer $HANZO_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"model":"mori","prompt":"weathered bronze astrolabe with engraved celestial rings, PBR textures"}'
```

## Capabilities

| | |
|---|---|
| Modes | text → 3D, image → 3D (`/v1/3d/generations`) |
| Model IDs | `mori`, `mori-1` (open foundation: `zen-3d`) |
| Exports | GLB / glTF, USDZ, FBX, OBJ, 3D Gaussian splats |

- **Production quad & tri topologies** — clean, water-tight manifold meshes with optimized edge flow ready for rigging and real-time engine shaders.
- **Complete PBR material synthesis** — albedo, normal, roughness, metallic, ambient occlusion, and emissive maps.
- **Spatially coherent environments** — 3D interior and exterior scene geometry aligned to metric scale and coordinate grids.
- **Universal engine export** — USDZ, glTF/GLB, FBX/OBJ, and 3D Gaussian splats.

## Creative AI Lineup

Each creative modality in Hanzo has its own dedicated model and repository:

| Model | Modality | Endpoint | Repository | Open Foundation |
|---|---|---|---|---|
| **Iro** (`iro`) | Image generation & editing | `POST /v1/images/generations` | [`hanzo-inc/iro`](https://github.com/hanzo-inc/iro) | `zen3-image` (`zenlm/zen-artist`) |
| **Koma** (`koma`) | Video generation & motion | `POST /v1/videos/generations` | [`hanzo-inc/koma`](https://github.com/hanzo-inc/koma) | `zen-director` (`zenlm/zen-director`) |
| **Koe** (`koe`) | Voice & dialogue synthesis | `POST /v1/audio/voice` | [`hanzo-inc/koe`](https://github.com/hanzo-inc/koe) | `zen3-tts` (`zenlm/zen-dub`) |
| **Oto** (`oto`) | Foley & sound effects | `POST /v1/audio/foley` | [`hanzo-inc/oto`](https://github.com/hanzo-inc/oto) | `zen-foley` (`zenlm/zen-foley`) |
| **Uta** (`uta`) | Music & score generation | `POST /v1/audio/music` | [`hanzo-inc/uta`](https://github.com/hanzo-inc/uta) | `zen-musician` (`zenlm/zen-musician`) |
| **Mori** (`mori`) | 3D assets, meshes & scenes | `POST /v1/videos/generations` | [`hanzo-inc/mori`](https://github.com/hanzo-inc/mori) | `zen-3d` (`zenlm/zen-3d`) |

## Surfaces

Mori is served by [`hanzo-inc/zen`](https://github.com/hanzo-inc/zen) and declared in `hanzo/universe` (`charts/app/files/zen/catalog.yaml`), with first-party Studio integration in [`hanzo-inc/studio`](https://github.com/hanzo-inc/studio) (`model.generate`).

- Product page: <https://hanzo.ai/mori>
- API and docs: <https://api.hanzo.ai/v1>, <https://docs.hanzo.ai>
- Studio & Dashboard: <https://hanzo.ai/studio>, <https://platform.hanzo.ai>
- Agent notes for this repo: [LLM.md](./LLM.md)

## License

The contents of this repository are licensed under Apache-2.0. The proprietary `mori-1` weights are served through the Hanzo API under the [Hanzo Terms](https://hanzo.ai/terms); the open foundation `zen-3d` is available under MIT at [`huggingface.co/zenlm/zen-3d`](https://huggingface.co/zenlm/zen-3d).
