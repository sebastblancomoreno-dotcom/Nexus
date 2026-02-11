# MODIFIED Requirements

### Requirement: Real-time Sound Synthesis

The system MUST generate UI sounds in real-time using the Web Audio API instead of loading audio files.

#### Scenario: Play synthesized click sound
- **WHEN** `SoundManager.play('click')` is called
- **THEN** an oscillator node generates a brief tone (e.g., 800Hz sine wave, 50ms duration)
- **AND** the sound plays immediately without file loading

#### Scenario: Play different sound types
- **WHEN** `SoundManager.play('success')` is called
- **THEN** a different frequency/waveform is generated (e.g., 1200Hz, different envelope)
- **AND** the sound is distinguishable from 'click'

#### Scenario: No audio files required
- **WHEN** the application loads
- **THEN** no MP3 files are downloaded or cached
- **AND** all sounds are generated on-demand by the browser

**Migration**: Remove all MP3 files from `public/assets/sounds/`. Update `SoundManager` to use `AudioContext` and `OscillatorNode`.
