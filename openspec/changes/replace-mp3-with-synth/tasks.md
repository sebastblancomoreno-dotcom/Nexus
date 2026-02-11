# Tasks

## 1. Rewrite SoundManager Service

- [x] 1.1 Create `AudioContext` singleton instance
- [x] 1.2 Remove `HTMLAudioElement` and file loading logic
- [x] 1.3 Implement `play()` method using `OscillatorNode`
- [x] 1.4 Add sound mapping (click: 800Hz sine, success: 1200Hz triangle)
- [x] 1.5 Implement envelope shaping with `GainNode`

## 2. Remove Assets

- [x] 2.1 Delete `frontend/public/assets/sounds/` directory
- [x] 2.2 Remove MP3 files (click.mp3, success.mp3)

## 3. Verify

- [x] 3.1 Test click sounds in browser
- [x] 3.2 Verify no MP3 files are loaded
- [x] 3.3 Confirm sounds play with zero latency
