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




