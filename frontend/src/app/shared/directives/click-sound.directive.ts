import { Directive, HostListener, Input } from '@angular/core';
import { SoundManagerService } from '../../core/services/sound-manager.service';

@Directive({
    selector: '[appClickSound]',
    standalone: true
})
export class ClickSoundDirective {
    @Input('appClickSound') soundName: string = 'click';

    constructor(private soundManager: SoundManagerService) { }

    @HostListener('click')
    onClick(): void {
        this.soundManager.play(this.soundName || 'click');
    }
}
