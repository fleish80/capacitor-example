import {enableProdMode, importProvidersFrom} from '@angular/core';
import {environment} from './environments/environment';
import {PreloadAllModules, provideRouter, Route, withDebugTracing, withPreloading} from '@angular/router';
import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';

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
  },
  {
    path: 'barcode-scanner',
    loadComponent: () => import('./barcode-scanner.component').then((c) => c.BarcodeScannerComponent),
    title: 'capacitor barcode scanner example'
  },
]

if (environment.production) {
  enableProdMode();
}


bootstrapApplication(AppComponent,
  {
    providers: [provideRouter(ROUTES,
      withPreloading(PreloadAllModules),
      withDebugTracing()
    ),
      importProvidersFrom(ServiceWorkerModule.register('ngsw-worker.js', {
        enabled: environment.production,
        // Register the ServiceWorker as soon as the application is stable
        // or after 30 seconds (whichever comes first).
        registrationStrategy: 'registerWhenStable:30000'
      }))
    ]
  },
);

