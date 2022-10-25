import {Component} from '@angular/core';
import {RouterLinkWithHref, RouterOutlet} from '@angular/router';
import {CommonModule, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'capacitor-example-root',
  template: `

    <a routerLink="/">
      <img class="logo" ngSrc="https://capacitorjs.com/assets/img/solutions/angular.png" width="432" height="240"/>
    </a>
    <nav class="nav">
      <a routerLink="/camera">Camera</a>
      <a routerLink="/geolocation">Geolocation</a>
      <a routerLink="/barcode-scanner">Barcode Scanner Community</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
      }

      .logo {
        width: 50px;
        height: 50px;
      }

      .nav {
        display: flex;
        gap: 10px;
      }
    `
  ],

  imports: [
    CommonModule,
    RouterOutlet,
    RouterLinkWithHref,
    NgOptimizedImage
  ],

  standalone: true
})
export class AppComponent {
}
