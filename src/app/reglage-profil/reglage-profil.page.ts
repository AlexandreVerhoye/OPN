import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NOMEM } from 'dns';
import { profilscripts } from '../globalscripts/profilscripts';

@Component({
  selector: 'app-reglage-profil',
  templateUrl: './reglage-profil.page.html',
  styleUrls: ['./reglage-profil.page.scss'],
})
export class ReglageProfilPage implements OnInit {

  constructor(private modalCtrl : ModalController, private ps : profilscripts) {   }

  private nomChamp : string = this.ps.profil.nom;
  private prenomChamp : string = this.ps.profil.prenom;
  private emailChamp : string = this.ps.profil.email;


  ngOnInit() {
  }

  /*Function dismiss() qui permet la fermeture du modal*/
  dismiss(){
    this.modalCtrl.dismiss();
  }

  changerNomPrenom(){
    var nom = this.nomChamp;
    var prenom = this.prenomChamp;

    this.ps.changementNomPrenom(nom, prenom);
  }



}
