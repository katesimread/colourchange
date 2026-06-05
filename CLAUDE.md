# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A p5.js sketch that toggles the canvas background between yellow (day) and black (night) on each mouse click. No build step, no package manager, no dependencies to install.

## Running the Project

Open `index.html` directly in a browser, or serve it with any static file server:

```bash
npx serve .
# or
python3 -m http.server
```

## Architecture

All creative logic lives in `sketch.js` using the p5.js global-mode API:

- `setup()` — runs once on load; creates the canvas
- `draw()` — runs every frame; renders based on state
- `mousePressed()` — p5 event handler; toggles `nightTime` boolean

`index.html` loads p5.js and p5.sound from CDN (also mirrored locally as `p5.js` and `p5.sound.min.js`) and the sketch. `style.css` removes default body margin so the canvas fills the viewport edge-to-edge.

The local copies of `p5.js` and `p5.sound.min.js` are not currently referenced by `index.html` (it uses CDN links), but they can be swapped in for offline use.

## Note on sketch.js Comments

The day/night labels in the comments are currently inverted — the `if(nightTime)` branch draws yellow (day colour) and the `else` draws black (night colour). This is a logic inversion bug in the comments, not in the variable name.
