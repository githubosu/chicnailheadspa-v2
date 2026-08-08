# Gallery images — seasonal & holiday themes

The homepage gallery (`EvolvedHome.jsx` → `EvoGallery`) auto-selects a theme from
**today's date** and shows **9 photos** from the matching folder below.

## How to add photos
1. Drop **up to 9 images** named `nail-1` … `nail-9` (`.jpg`, `.jpeg`, or `.png`)
   into the theme folder, e.g. `assets/gallery/summer/nail-1.jpg … nail-9.jpg`.
2. Run **`npm run optimize:images`** — it converts each into a resized
   `nail-N.webp` (the file the gallery actually loads) right beside the source.
3. Commit the new `.webp` files and push; the deploy serves them.

Notes:
- Square images look best (tiles are 1:1); ~1000×1000px is plenty.
- Any missing tile **falls back** to the generic optimized set automatically, so
  partial sets are fine.

## Themes & the date windows that trigger them
Holidays take priority within their window; otherwise the season is used.

| Folder         | Shows when (month/day)        |
|----------------|-------------------------------|
| `christmas`    | Dec 1–17, Dec 18–31, Jan 1    |
| `newyear`      | Dec 26 – Jan 2                |
| `valentines`   | Feb 7 – Feb 14                |
| `stpatricks`   | Mar 12 – Mar 17               |
| `easter`       | Mar 25 – Apr 21 (approx.)     |
| `fourth`       | Jun 28 – Jul 6                |
| `halloween`    | Oct 20 – Oct 31               |
| `thanksgiving` | Nov 20 – Nov 30               |
| `spring`       | Mar 1 – May 31 (non-holiday)  |
| `summer`       | Jun 1 – Aug 31 (non-holiday)  |
| `autumn`       | Sep 1 – Nov 30 (non-holiday)  |
| `winter`       | all other dates               |

> Tip: today (June) resolves to **summer**, so fill `summer/` first to see real
> photos on the live homepage right away.
