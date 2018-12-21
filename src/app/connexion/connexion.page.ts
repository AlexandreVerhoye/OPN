import { Component } from '@angular/core';
import { profilscripts } from '../globalscripts/profilscripts'
import { AlertController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { globalscripts } from '../globalscripts/globalscripts';

@Component({
  selector: 'app-profil',
  templateUrl: 'connexion.page.html',
  styleUrls: ['connexion.page.scss']
})

export class ConnexionPage {


  constructor(navParams: NavParams, public gs : globalscripts, public modalCtrl : ModalController, private ps : profilscripts, private alertController : AlertController, private actionSheetController : ActionSheetController ) {
    console.log("succès");
  }

  connexionMail : string;
  connexionPass : string;
  inscriptionPrenom : string;
  inscriptionNom : string;
  inscriptionMail : string;
  inscriptionPass : string;
  inscriptionPass2 : string;


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


  /*Function testConnexion qui permet de tester le retour de l'id et du password (en clair) */
  testConnexion(){
    if(this.connexionMail!=null || this.connexionPass!=null){
    console.log("Script testConnexion : click");
    console.log("Script testConnexion : en cours");
    console.log(this.connexionMail);
    console.log(this.connexionPass);
    console.log("Script testConnexion : succès");
    }
    else{
      console.log("Email ou mot de passe manquant.");
    }
  }


  /*Function testInscription qui permet de tester le retour de l'id et du password (en clair) */
  testInscription(){
    if(this.inscriptionMail!=null || this.inscriptionPass!=null || this.inscriptionPrenom!=null || this.inscriptionNom!=null || this.inscriptionPass2!=null){
    console.log("Script testConnexion : click");
    console.log("Script testConnexion : en cours");
    console.log(this.inscriptionPrenom);
    console.log(this.inscriptionNom);
    console.log(this.inscriptionMail);
      if(this.inscriptionPass==this.inscriptionPass2){
        console.log("Les deux mots de passes correspondent :")
        console.log(this.inscriptionPass);
      }
    else{
      console.log("Les deux mots de passes ne correspondent pas :")
      console.log("Mot de passe 1 : " + this.inscriptionPass);
      console.log("Mot de passe 2 : " + this.inscriptionPass2);
    }
    console.log("Script testConnexion : succès");
    }
    else{
      console.log("Prenom, nom, mail ou mot de passe manquant.")
    }

  }


  /*Function dismiss() qui permet la fermeture du modal*/
  dismiss(){
    this.gs.setNbr(200);
    this.modalCtrl.dismiss();
  }
}




