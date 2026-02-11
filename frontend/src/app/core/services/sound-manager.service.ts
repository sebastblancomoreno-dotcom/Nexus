import { Injectable } from '@angular/core';

interface SoundConfig {
    frequency: number;
    type: OscillatorType;
    duration: number;
}

@Injectable({
    providedIn: 'root'
})
export class SoundManagerService {
    private audioContext: AudioContext | null = null;
    private readonly soundMap: Map<string, SoundConfig> = new Map([
        ['click', { frequency: 800, type: 'sine', duration: 50 }],
        ['success', { frequency: 1200, type: 'triangle', duration: 100 }]
    ]);

    constructor() {
        // Initialize AudioContext lazily on first use to avoid autoplay restrictions
    }

    private getAudioContext(): AudioContext {
        if (!this.audioContext) {
            this.audioContext = new AudioContext();
        }
        return this.audioContext;
    }

    play(soundName: string = 'click'): void {
        const config = this.soundMap.get(soundName);

        if (!config) {
            console.warn(`Sound '${soundName}' not found. Available: ${Array.from(this.soundMap.keys()).join(', ')}`);
            return;
        }

        try {
            const ctx = this.getAudioContext();
            const now = ctx.currentTime;

            // Create oscillator
            const oscillator = ctx.createOscillator();
            oscillator.type = config.type;
            oscillator.frequency.value = config.frequency;

            // Create gain node for envelope shaping
            const gainNode = ctx.createGain();
            gainNode.gain.setValueAtTime(0, now);
            gainNode.gain.linearRampToValueAtTime(0.3, now + 0.01); // Quick attack
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + config.duration / 1000); // Decay

            // Connect nodes
            oscillator.connect(gainNode);
            gainNode.connect(ctx.destination);

            // Play
            oscillator.start(now);
            oscillator.stop(now + config.duration / 1000);
        } catch (err) {
            console.warn('Sound play failed', err);
        }
    }
}
