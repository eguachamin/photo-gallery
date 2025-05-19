import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { SplashScreen } from '@capacitor/splash-screen';

defineCustomElements(window);

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000); // Oculta el splash después de 2 segundos
  })
  .catch(err => console.log(err));