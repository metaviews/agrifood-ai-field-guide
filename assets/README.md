# Assets

Visual-identity assets for the project. Currently one canonical asset.

## cover.png

Canonical cover / title image. Composition:

- Title "Agrifood AI Field Guide" rendered in title-case serif typography in the upper-left
- Three differentiated mountain goats on a rocky foreground outcrop at right-of-center: standing watchful with horns (forward), mid-frame, head-down browsing
- Broad agricultural valley below: patchwork fields with hedgerows, a country road, scattered farmhouse clusters
- Distant low hills with an atmospheric horizon-band reading as horizon-marker
- Sepia ink-line on cream

Format: PNG, ~706 KB, landscape aspect.

## Design intent

The cover does three things at once without ever saying so:

- **Diverse grazing method.** Goats eat a wide range of vegetation — grass, flowers, vines, trees. Three goats with three differentiated postures evokes range and openness rather than focus or specialisation.
- **Overview without verdict.** The goats observe the valley; they do not declare, survey, or judge. The valley below is the agrifood substrate the project documents.
- **Quiet observation, not heroic declaration.** Composition is contemplative. Asymmetric layout (title upper-left, herd right-of-center) gives the image breathing room.

## Constraints

- The goats are **visual identity only**. They are not referenced in cycle annotations, commit messages, analysis units, framework units, or substantive talk content.
- The goats are **graphical offset to academic prose**, not a mascot character. They do not narrate, do not speak, do not recur with a personality.
- The goats do **not appear in unit files, scan files, or quote files**. Content documents stand on their substance; the cover is project voice, not content voice.

## Placement

The cover is appropriate for:

- README header (top of `README.md`)
- Talk archetype title slides
- Cluster-pattern-taxonomy document header
- Deck-generation tooling output (when built, per VISION.md Layer 4)

The cover is **not** appropriate for:

- Unit files (`units/`)
- Scan files (`scans/`)
- Quote files (`quotes/`)
- Cycle annotations
- Commit messages

## Other imagery already in the corpus

Cattle imagery is used in the Brazilian beef cluster (Marfrig, Minerva, JBS) as cluster-pattern-specific content. The cover does not displace cattle imagery — the two are kept in distinct lanes:

- **Cattle** at the content level (cluster-pattern): Brazilian beef cluster's vendor and cluster-critique units.
- **Goats** at the project-voice level (visual identity): this cover, plus any future visual-identity assets.

## Status

Canonical. Generated via FLUX 2 Klein 9B; PNG raster is a starting point for review. A vectorised SVG version with designer-redrawn typography would be a future improvement if the asset is used at high resolution or in print contexts.

## Source

The cover was selected from a brainstorm that generated 21 variants across five rounds (single-goat, herd, AI-horizon framing, title integration, palette tests). The selected composition was chosen for clean asymmetric layout, clearly differentiated herd micro-poses, and restrained academic-poster register. Other variants remain on the FAL CDN if revisit is needed; they are not committed to the repository.