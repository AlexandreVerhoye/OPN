import { Component } from '@angular/core';
import { profilscripts } from '../globalscripts/profilscripts'
import { AlertController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ConnexionPage } from '../connexion/connexion.page';
import { ReglageProfilPage} from '../reglage-profil/reglage-profil.page';
import { ReglageConfidPage } from '../reglage-confid/reglage-confid.page';
import { BienvenuePage } from '../bienvenue/bienvenue.page';
import { globalscripts } from '../globalscripts/globalscripts';

@Component({
  selector: 'app-profil',
  templateUrl: 'profil.page.html',
  styleUrls: ['profil.page.scss']
})

export class ProfilPage {



  constructor(public modalCtrl: ModalController,private gs : globalscripts, public ps : profilscripts, private alertController : AlertController, private actionSheetController : ActionSheetController ) {}

  
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
          this.reglageProfil();
          console.log('Option "Parametre OpenPicNic" : click');
        }
      },  {
        text: 'Paramètres de confidentialité',
        icon: 'walk',
        handler: () => {
          this.reglageConfig();
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


  

  async connexionPageDev() {
    const modal = await this.modalCtrl.create({
      component: ConnexionPage,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }

  async bienvenuePageDev() {
    const modal = await this.modalCtrl.create({
      component: BienvenuePage
    });
    return await modal.present();
  }


  async reglageProfil() {
    const modal = await this.modalCtrl.create({
      component: ReglageProfilPage
    });
    return await modal.present();
  }

  

  async reglageConfig() {
    const modal = await this.modalCtrl.create({
      component: ReglageConfidPage
    });
    return await modal.present();
  }

  async toastInt() {
    this.gs.toastBasic(this.gs.getNbr(), 210);
  }
  

}




