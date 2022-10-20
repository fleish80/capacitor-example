import {enableProdMode} from '@angular/core';
import {environment} from './environments/environment';
import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {PreloadAllModules, provideRouter, Route, withDebugTracing, withPreloading} from '@angular/router';

export const ROUTES: Route[] = [
  {path: '', pathMatch: 'full', redirectTo: '', title: 'capacitor example'},
  {
    path: 'camera',
    loadComponent: () => import('./camera.component').then((c) => c.CameraComponent),
    title: 'capacitor camera example'
  },
  {
    path: 'geolocation',
    loadComponent: () => import('./geolocation.component').then((c) => c.GeolocationComponent),
    title: 'capacitor geolocation example'
  }
]

if (environment.production) {
  enableProdMode();
}


bootstrapApplication(AppComponent,
  {
    providers: provideRouter(ROUTES,
      withPreloading(PreloadAllModules),
      withDebugTracing()
    )
  });
