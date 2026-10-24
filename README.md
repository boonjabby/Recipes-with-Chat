# Recipes with Chat

An installable recipe app with 51 shared recipes, ingredient search, offline cooking pages, checklists, timers and screen wake lock.

Main app: https://recipes-with-chat-jimmy.boonjabby.chatgpt.site/

## Personal recipe imports

Choose **Import recipe**, copy the ChatGPT prompt, and request your recipe in the shown JSON format. Import the resulting `.json` or `.txt` file, or paste the JSON directly. Preview before adding. Imports are stored in IndexedDB in the current browser/device and are not uploaded. **My recipes** filters the local collection. Back up your recipes to JSON before clearing browser data or moving devices. Existing titles are skipped; give variations distinct titles.

## Recipe provenance

Shared recipes were recovered from prior cooking chats and the Ninja recipe PDF. Notes identify reconstructed methods or missing original measurements. Original Fallow quantities remain explicitly labelled as reconstructed estimates.

## Hosting

GitHub Pages: deploy from `main`, `/(root)`. Keep this repository's manifest ID and scope at `/Recipes-with-Chat/` to avoid app identity collisions. The separate main app has its own origin and ID.

## Add shared recipes

Update `recipes.json` using ingredient groups and method steps. Shared recipe pages use `recipe.html?id=...`; new recipes do not need individual HTML files. Bump the cache version in `sw.js` when changing offline assets.
