# Proposal: Replace MP3 with Synth

## Why
Using static MP3 files for simple UI sounds increases bundle size, requires network requests (or caching strategies), and offers limited flexibility. Switching to **real-time sound synthesis** where the browser generates audio waves directly using the Web Audio API (`OscillatorNode`) removes the need for assets entirely, reduces latency to near-zero, and allows for dynamic sound adjustment (frequency, waveform type) without new files.

**El PC/navegador generará el sonido en tiempo real** - sin archivos, sin descargas, solo síntesis pura de ondas de audio.

## What Changes
We will modify the `SoundManager` service to generate sounds programmatically using oscillators (sine waves, square waves, etc.) instead of loading audio files. We will remove all MP3 assets from the project.

## Capabilities

### Modified Capabilities
- `SoundManager`: Will now use `AudioContext` and `OscillatorNode` to generate sounds in real-time instead of `HTMLAudioElement` loading files.
- `Assets`: The `public/assets/sounds/` directory and all MP3 files will be removed.

## Impact
- `frontend/src/app/core/services/sound-manager.service.ts`: Complete rewrite to use Web Audio API synthesis.
- `frontend/public/assets/sounds/`: Directory and files to be deleted.
- `ClickSoundDirective`: No changes expected (API remains `play(type)`).
