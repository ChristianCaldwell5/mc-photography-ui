import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogModule } from '@angular/material/dialog';
import { ImagePreview } from '../../model/ImagePreviewData';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-picture-preview',
  standalone: true,
  imports: [MatDialogActions, MatDialogClose, MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './picture-preview.component.html',
  styleUrls: ['./picture-preview.component.scss']
})
export class PicturePreviewComponent implements OnInit {

  @Input() 
  get imageSrc() { return this.previewImageSrc }
  set imageSrc(source: string) {
    this.previewImageSrc = source;
  }

  //data!: ImagePreview
  previewImageSrc: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: ImagePreview) {}

  ngOnInit(): void {
  }

}
