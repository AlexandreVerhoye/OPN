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
  }


  /*Function RecommanderOPN qui permet de recommander OPN a des proche par l'appli de leur choix*/
  recommanderOPN(){
    this.gs.toastErreur("Application en developpement", 2000);
  }


  /*Function getMotDuJour qui recupère le mot du jour de profil script selon si l'utilisateur est connecté ou non*/
  getMotDuJour(){
    return(this.ps.motDuJour());
  }


  




  


}
