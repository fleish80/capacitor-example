import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'capacitor example',
  webDir: 'dist/apps/main',
  bundledWebRuntime: false,
  server: {
    url: 'http://192.168.1.28:4200',
    cleartext: true
  }
};

export default config;
