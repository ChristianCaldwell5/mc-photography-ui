import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog'
import { PicturePreviewComponent } from '../../shared/components/picture-preview/picture-preview.component';
import { CommonModule } from '@angular/common';
import { DeviceService } from '../../services/device/device.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatDialogModule, PicturePreviewComponent, CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {

  constructor(private dialog: MatDialog, private deviceService: DeviceService) {}

  belowThresh$: Observable<boolean> = this.deviceService.scrolledBeyondThresh(100);

  openPreview(source: string): void {
    let dialogRef = this.dialog.open(PicturePreviewComponent, {
      data: {
        imageSrc: source
      },
      maxHeight: '90vh',
    });
  }

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }

}
