import { Component} from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({

  templateUrl: './bienvenue.page.html',
  styleUrls: ['./bienvenue.page.scss'],
})
export class BienvenuePage{
  constructor(private modalCtrl : ModalController) { }

  dismiss(){
    this.modalCtrl.dismiss(null, undefined, null);
  }
};
