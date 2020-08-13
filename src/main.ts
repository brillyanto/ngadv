import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
// this is my third change
if (environment.production) {
  enableProdMode();
}
// this is my second fix

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
