import { Component } from '@angular/core';
import { globalscripts } from '../globalscripts/globalscripts';
import { profilscripts } from '../globalscripts/profilscripts';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  
  constructor(private gs : globalscripts, private ps : profilscripts) {
    //this.gs.load();
  }
  
  
  /*Function ionviewWillEnter qui correspond aux differentes actions lors de l'ouverture de la page*/
  ionViewWillEnter() : void
  {
     //this.gs.load();
    this.gs.toastBasic('Bienvenue sur OpenPicNic v0.2Dev', 10000);
  }


  /*Function RecommanderOPN qui permet de recommander OPN a des proche par l'appli de leur choix*/
  recommanderOPN(){
    console.log("Script recommanderOPN : click");
    console.log("Script recommanderOPN : en cours");
    //Ouvrir menu de partage
    console.log("Script recommanderOPN : succès")
  }


  /*Function getMotDuJour qui recupère le mot du jour de profil script selon si l'utilisateur est connecté ou non*/
  getMotDuJour(){
    return(this.ps.motDuJour());
  }


  




  


}
