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


  /*Function getDay() qui permet de recevoir le jour et de le transformer en string*/
  public getDay() : string{
    var d = new Date();
    var weekday = new Array(7);

    weekday[0] = "dimanche";
    weekday[1] = "lundi";
    weekday[2] = "mardi";
    weekday[3] = "mercredi";
    weekday[4] = "jeudi";
    weekday[5] = "vendredi";
    weekday[6] = "samedi";

    var n = weekday[d.getDay()]
    return n;

  }




  


}
