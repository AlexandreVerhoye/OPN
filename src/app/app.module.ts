import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { globalscripts } from './globalscripts/globalscripts';
import { profilscripts } from './globalscripts/profilscripts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { mapscripts } from './globalscripts/mapscripts';
import { HttpModule} from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [HttpClientModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpModule, IonicStorageModule.forRoot({name: '__mydb',driverOrder: ['indexeddb', 'sqlite', 'websql']})],
  providers: [
    StatusBar,
    SplashScreen,
    ToastController,
    globalscripts,
    profilscripts,
    mapscripts,
    Geolocation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
