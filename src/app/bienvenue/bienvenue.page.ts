import { Component} from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { profilscripts } from '../globalscripts/profilscripts';


@Component({

  templateUrl: './bienvenue.page.html',
  styleUrls: ['./bienvenue.page.scss'],
})
export class BienvenuePage{
  constructor(private modalCtrl : ModalController, private navCtrl : NavController, private ps : profilscripts) { 
    this.goToHome();
  }

  public async dismiss() {
    const modal = await this.modalCtrl.getTop();
    modal.dismiss();
  }

  goToConnexion(){
    this.navCtrl.navigateRoot('connexionUtilisateur');
  }

  goToHome(){
    if (this.ps.testCo() == true){
      this.navCtrl.navigateRoot('/app/tabs/(home:home)');
    }
  }
};
