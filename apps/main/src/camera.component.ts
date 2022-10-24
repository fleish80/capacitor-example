import {Component} from '@angular/core';
import {Camera, CameraResultType, CameraSource} from '@capacitor/camera';
import {NgIf} from '@angular/common';

@Component({
  selector: 'capacitor-example-camera',
  standalone: true,
  imports: [
    NgIf
  ],
  template: `

    <div class="card-container">
      <button class="card card-small" (click)="captureImage()">
        <span>Capture image</span>
      </button>
    </div>
    <img [src]="image" *ngIf="image" [style.width]="'300px'"/>
  `,
  styles: []
})
export class CameraComponent {
  image = '';

  async captureImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      source: CameraSource.Prompt,
      resultType: CameraResultType.Base64
    });

    if (image) {
      this.image = `data:image/jpeg;base64,${image.base64String}`;
    }
  }
}
