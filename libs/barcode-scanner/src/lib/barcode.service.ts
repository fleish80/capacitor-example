import {Inject, Injectable, Renderer2, RendererFactory2} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {BarcodeScanner} from '@capacitor-community/barcode-scanner';

@Injectable({
  providedIn: 'root'
})
export class BarcodeService {

  private renderer: Renderer2;

  constructor(@Inject(DOCUMENT) private document: Document, rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);

    BarcodeScanner.checkPermission({force: true});

  }

  async startScan() {
    const body = this.document.body;
    body.classList.add('barcode-scanner');
    const buttonElm = this.renderer.createElement('button');
    this.renderer.appendChild(buttonElm, this.renderer.createText('Close Barcode Scanner'));

    this.renderer.listen(buttonElm, 'click', () => {
      BarcodeScanner.stopScan();
    });


    this.renderer.appendChild(body, buttonElm);

    const result = await BarcodeScanner.startScan();
    if (result.hasContent) {
      return  result.content;
    } else {
      return '';
    }







  }
}
