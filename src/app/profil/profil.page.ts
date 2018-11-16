import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-profil',
  templateUrl: 'profil.page.html',
  styleUrls: ['profil.page.scss']
})

export class ProfilPage {

  constructor(public alertCtrl: AlertController) {}

  async decoAlert() {
    
        const alert = await this.alertCtrl.create({
          header: 'Se déconnecter ?',
          message: 'Vous pouvez vous reconnecter a tout moment dans cet onglet',
          buttons: [
            {
              text: 'Annuler',
              role: 'cancel',
              cssClass: 'secondary',
              handler: (blah) => {
                console.log('Confirm Cancel: blah'); //Evenement lors de l'annulation
              }
            }, 
            
            {
              text: 'Déconnexion',
              handler: () => {
                console.log('Confirm Okay'); //Evenement lors de la deconnexion
              }
            }
          ]
        });
  
      await alert.present();
    }
  

  
  doConfirm() {
  }
  doPrompt() {
  }
 doRadio() {
  }
 doCheckbox() {
  }
}


