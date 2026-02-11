# Design

## Context
Currently, `SoundManager` loads MP3 files using `HTMLAudioElement`. We want to eliminate these assets and generate sounds in real-time using the Web Audio API.

## Goals / Non-Goals
**Goals:**
- Generate all UI sounds using `AudioContext` and `OscillatorNode`
- Remove all MP3 files from the project
- Maintain the same public API (`play(soundName)`)
- Zero latency sound generation

**Non-Goals:**
- Complex sound synthesis (envelopes, filters) - keep it simple for now
- User-configurable sound parameters
- Polyphonic sounds or music generation

## Decisions

### Decision 1: Use OscillatorNode for synthesis
We'll use `OscillatorNode` to generate simple waveforms (sine, square, triangle).
- **Rationale**: Simple, built-in, zero-latency. Perfect for UI feedback sounds.
- **Alternative considered**: `AudioBuffer` with custom waveforms - too complex for simple clicks.

### Decision 2: Sound mapping
Map sound names to frequency/waveform combinations:
- `'click'`: 800Hz sine wave, 50ms duration
- `'success'`: 1200Hz triangle wave, 100ms duration
- **Rationale**: Different frequencies and waveforms create distinct, recognizable sounds.

### Decision 3: Envelope shaping
Use `GainNode` with exponential ramp to create a quick attack/decay envelope.
- **Rationale**: Prevents clicks/pops and makes sounds more pleasant.

### Decision 4: Singleton AudioContext
Create one `AudioContext` instance and reuse it.
- **Rationale**: Browser limits on AudioContext instances. Reusing is more efficient.

## Risks / Trade-offs
- **Browser compatibility**: Web Audio API is well-supported, but older browsers may not support it.
- **Sound quality**: Synthesized sounds are simpler than recorded samples, but sufficient for UI feedback.
