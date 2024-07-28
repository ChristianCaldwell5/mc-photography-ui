import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSidenavModule, MatDrawerContainer } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './services/theme/theme.service';
import { DeviceService } from './services/device/device.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSidenavModule, MatDrawerContainer, MatButtonModule, 
    MatSlideToggleModule, MatToolbarModule, MatIconModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MC Photography STL';
  theme = 'light';
  appClass: string;

  isMobile$: Observable<boolean> = this.deviceService.isMobile();

  constructor(
    private themeService: ThemeService,
    private deviceService: DeviceService
  ) {
    this.appClass = `mc-${this.themeService.detectTheme()}-theme`;
  }
}
