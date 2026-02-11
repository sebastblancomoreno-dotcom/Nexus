# Design

## Context
The application key interactions are currently silent. We want to add auditory feedback without tightly coupling components to specific sound assets or the audio implementation.

## Goals / Non-Goals
**Goals:**
- Centralized sound management.
- Easy way to attach sounds to elements (Directive).
- Non-blocking audio playback.
- Volume control (future-proofing, though fixed for now).

**Non-Goals:**
- User-configurable sound themes (for now).
- complex audio mixing or spatial audio.

## Decisions

### Decision 1: Use HTML5 Audio API
We will use the native `Audio` API wrapper in a service.
- **Rationale**: It's simple, supported everywhere, and sufficient for short UI sounds. No need for global `Howler.js` or Web Audio API complexity yet.

### Decision 2: Directive-based attachment
Use `[appClickSound]` input to attach sounds.
- **Rationale**: Keeps components clean. The directive handles the `click` event and delegates to the service.
- **API**: `<button appClickSound>Click Me</button>` (plays default) or `<button appClickSound="success">Save</button>` (plays specific).

### Decision 3: Asset Location
Store sounds in `frontend/public/assets/sounds/`.
- **Rationale**: Standard Angular asset handling makes them serve-able/cacheable.

### Decision 4: Lazy Loading
Preload common sounds (like 'click') on app start?
- **Decision**: Yes, `SoundManager` will preload 'click' on initialization to avoid first-play delay.
