import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DeviceService } from '../../services/device/device.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, MatProgressBarModule, MatInputModule, CommonModule, ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  heroImages: string[] = ['assets/images/hero-carousel/hero1.jpeg', 
  'assets/images/hero-carousel/hero2.jpeg', 
  'assets/images/hero-carousel/hero3.jpeg'];
  carouselIndex: number = 0;
  carouselInterval: any;
  carouselProgress: number = 0;
  carouselProgressInterval: any;
  isMobile$: Observable<boolean> = this.deviceService.isMobile(700);

  constructor(private deviceService: DeviceService) { }

  ngOnInit() {
    this.startHeroCarousel();
  }

  startHeroCarousel(): void {
    console.log('Starting carousel');
    if (typeof window !== 'undefined') {
      this.carouselInterval = setInterval(() => {
        this.carouselIndex = (this.carouselIndex+1 < this.heroImages.length) ? this.carouselIndex+1 : 0;
        this.carouselProgress = 0;
      }, 10000);

      // Start progress interval
      this.carouselProgressInterval = setInterval(() => {
        this.carouselProgress++;
      }, 100);
    }
  }

  stopHeroCarousel(): void {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
      this.carouselInterval = null;
    }
    
  }

}
