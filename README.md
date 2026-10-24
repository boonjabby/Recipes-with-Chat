# Recipes with Chat

An installable, offline-friendly recipe collection adapted from the Home Kitchen PWA.

## Install

Open the GitHub Pages site in Chrome on Android, then choose **Install app** or **Add to Home screen** from the menu. Load once online before using offline. Cooking progress is saved on each device.

## GitHub Pages

In repository Settings → Pages, select **Deploy from a branch**, branch **main**, folder **/(root)**, then Save.

## Add recipes

Add the recipe HTML, update `recipes.json`, and add the new page to `FILES` in `sw.js`. Bump the cache version when publishing updates.
