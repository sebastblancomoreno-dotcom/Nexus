import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoadingService } from './core/services/loading.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    @if (loadingService.isLoading()) {
    <div class="loading-overlay">
      <div class="waveform">
        <div class="wave-bar"></div>
        <div class="wave-bar"></div>
        <div class="wave-bar"></div>
        <div class="wave-bar"></div>
        <div class="wave-bar"></div>
        <div class="wave-bar"></div>
      </div>
      <span class="loading-text">Loading</span>
    </div>
    }
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = 'frontend';
  loadingService = inject(LoadingService);
}
