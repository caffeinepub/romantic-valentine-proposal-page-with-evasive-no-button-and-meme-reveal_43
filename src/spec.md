# Specification

## Summary
**Goal:** Create a single-screen romantic Valentine proposal page with a “Yes/No” choice where “No” evades interaction and “Yes” reveals a meme confirmation.

**Planned changes:**
- Build a single-screen UI that shows “Will you be my Valentine?” with exactly two buttons: “Yes” and “No”.
- Implement an evasive “No” button that relocates on pointer hover/enter and touch-start so it can’t be clicked, while always staying fully within the viewport.
- Implement a “Yes” result state that replaces the buttons with the exact text “Good choice” and displays a meme image.
- Apply a clean, minimal romantic pink-and-white theme with responsive layout optimized for iPad Chrome.
- Add the meme image as a static asset under `frontend/public/assets/generated` and render it directly from that path.

**User-visible outcome:** On iPad Chrome or desktop, the user sees a romantic Valentine prompt with “Yes” and “No”; “No” moves away when attempted, and tapping/clicking “Yes” shows a “Good choice” meme image.
