import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, ActionSheetController } from '@ionic/angular';
import { globalscripts } from '../globalscripts/globalscripts';
import { profilscripts } from '../globalscripts/profilscripts';

@Component({
  selector: 'app-connexion-utilisateur',
  templateUrl: './connexion-utilisateur.page.html',
  styleUrls: ['./connexion-utilisateur.page.scss'],
})
export class ConnexionUtilisateurPage implements OnInit {
  constructor(public gs : globalscripts, public modalCtrl : ModalController, private ps : profilscripts, private alertController : AlertController, private actionSheetController : ActionSheetController ) {
    console.log("succès");
  }

  ngOnInit() {
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

  Connexion(){
    if(this.connexionMail!=null || this.connexionPass!=null){

      this.ps.connexion(this.connexionMail, this.connexionPass);

      }
      else{
        this.gs.toastErreur("Email ou mot de passe manquant", 3000);
      }
  }


  
  inscription(){
    if(this.inscriptionMail!=null || this.inscriptionPass!=null || this.inscriptionPrenom!=null || this.inscriptionNom!=null || this.inscriptionPass2!=null){

      if(this.inscriptionPass==this.inscriptionPass2){
        console.log("Les deux mots de passes correspondent :")
        this.ps.inscription(this.inscriptionMail, this.inscriptionPass, this.inscriptionPrenom, this.inscriptionNom);
        this.gs.toastBasic("Vous etes maintenant inscrit sur OPN, veuillez vous connecter.", 5000);
      }
    else{
      this.gs.toastErreur("Les mots de passes ne correspondent pas.",3000);
    }
    }
    this.gs.toastErreur("Il manquent des informations !", 3000)
  }

  /*Function dismiss() qui permet la fermeture du modal*/
  dismiss(){
    this.modalCtrl.dismiss();
  }
}




