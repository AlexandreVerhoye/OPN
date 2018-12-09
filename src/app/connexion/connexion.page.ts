import { Component } from '@angular/core';
import { profilscripts } from '../globalscripts/profilscripts'
import { AlertController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-profil',
  templateUrl: 'connexion.page.html',
  styleUrls: ['connexion.page.scss']
})

export class ConnexionPage {

  constructor(private ps : profilscripts, private alertController : AlertController, private actionSheetController : ActionSheetController ) {}

  
  /*Bouton deconnexion qui permet de confirmer ou non la deconnexion */
  async boutonDeconnexion() { //Actions lors de l'appuie sur le bouton "deconnexion
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
            console.log('Script deconnexion : click');
            this.ps.deconnexion();
          }
        }
      ]
      });

    await alert.present();
    }


  /*Bouton option qui permet d'afficher les options */
  async boutonOption() { //Actions lors de l'appuie sur le bouton "parametres"
    const actionSheet = await this.actionSheetController.create({
      header: 'Paramètres OpenPicNic',
      buttons: [{
        text: 'Paramètres du compte',
        icon: 'contact',
        handler: () => {
          console.log('Option "Parametre OpenPicNic" : click');
        }
      },  {
        text: 'Paramètres de confidentialité',
        icon: 'walk',
        handler: () => {
          console.log('Option "Parametre confidentialité" : click');
        }
      }, {
        text: 'Donnez-nous une note',
        icon: 'heart',
        handler: () => {
          console.log('Option notation : click');
        }
      },{
        text: 'Partager OpenPicNic',
        icon: 'share',
        handler: () => {
          console.log('Option partage : click');
        }
      }, {
        text: 'Contacter OpenPicNic',
        icon: 'send',
        handler: () => {
          console.log('Option "Contacter OPN" : click');
        }
      }, {
        text: 'Fermer',
        icon: 'close-circle-outline',
        role: 'cancel',
        handler: () => {
          console.log('Fenetre de paramètres fermée');
        },
      }]
    });
    await actionSheet.present();
  }
}




