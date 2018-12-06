import { browser, by, element } from 'protractor';
import { ViewChild } from '@angular/core';
import { Nav } from '@ionic/angular';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.deepCss('app-root ion-content')).getText();
  }
   
}
