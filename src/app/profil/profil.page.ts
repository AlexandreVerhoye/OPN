import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-profil',
  templateUrl: 'profil.page.html',
  styleUrls: ['profil.page.scss']
})

export class ProfilPage {

  constructor(public alertController: AlertController, public actionSheetController: ActionSheetController) {}

  async deconnexion() { //Actions lors de l'appuie sur le bouton "deconnexion"

    const alert = await this.alertController.create({
      header: 'Se deconnecter ?',
      message: 'Vous pourrez a tout moment vous connecter dans cet onglet.',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah'); //Action pour annulation
          }
        }, {
          text: 'Déconnexion',
          handler: () => {
            console.log('Confirm Okay'); //Action pour deconnexion
          }
        }
      ]
    });

    await alert.present();
  }

  async option() { //Actions lors de l'appuie sur le bouton "parametres"
    const actionSheet = await this.actionSheetController.create({
      header: 'Paramètres OpenPicNic',
      buttons: [{
        text: 'Paramètres du compte',
        icon: 'contact',
        handler: () => {
          console.log('perso. clicked'); //Action pour personalisation du compte
        }
      },  {
        text: 'Paramètres de confidentialité',
        icon: 'walk',
        handler: () => {
          console.log('confidentialité clicked'); //Action pour confidentialité
        }
      }, {
        text: 'Donnez-nous une note',
        icon: 'heart',
        handler: () => {
          console.log('notation clicked'); //Action pour notation
        }
      },{
        text: 'Partager OpenPicNic',
        icon: 'share',
        handler: () => {
          console.log('Share clicked'); //Action pour partager
        }
      }, {
        text: 'Contacter OpenPicNic',
        icon: 'send',
        handler: () => {
          console.log('Contacter opn clicked'); //Action pour contact OPN
        }
      }, {
        text: 'Fermer',
        icon: 'close-circle-outline',
        role: 'cancel',
        handler: () => {
          console.log('fermeture clicked'); //Fermeture du actionSheet
        },
      }]
    });
    await actionSheet.present();
  }

}




