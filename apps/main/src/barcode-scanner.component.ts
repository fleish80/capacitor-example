import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BarcodeScanner} from '@capacitor-community/barcode-scanner';
import {BarcodeService} from 'libs/barcode-scanner/src/lib/barcode.service';

@Component({
  selector: 'capacitor-example-barcode-scanner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button (click)="startScan()">Start Scan</button>
    {{result}}
  `,
  styles: []
})
export class BarcodeScannerComponent implements OnInit, OnDestroy {

  result: string | undefined = '';

  constructor(private barcodeService: BarcodeService) {
  }

  async ngOnInit() {
    // Check camera permission
    // This is just a simple example, check out the better checks below
    await BarcodeScanner.checkPermission({force: true});
  }

  async ngOnDestroy() {
    await BarcodeScanner.stopScan();
  }

  async startScan() {
    this.result = await this.barcodeService.startScan();
  }

}
