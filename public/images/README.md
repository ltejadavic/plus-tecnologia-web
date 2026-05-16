# Image asset guide

Store production images in this folder and reference them from the data files instead of hardcoding paths inside components.

## Folders

- `logos/`: brand marks, full logos, partner or manufacturer logos.
- `pages/`: page-level images such as hero, about, and contact visuals.
- `products/`: product category images used by `src/data/products.ts`.
- `services/`: service card images used by `src/data/site.ts`.

## Usage

1. Add the optimized file to the correct folder, for example `public/images/products/carcasas-filtracion.jpg`.
2. Enable the matching `image` field in `src/data/products.ts` or `src/data/site.ts`.
3. Use descriptive `alt` text that explains the actual image content.

Prefer `.jpg` or `.webp` for photos, `.png` only when transparency is needed, and `.svg` for logos or simple vector marks.
