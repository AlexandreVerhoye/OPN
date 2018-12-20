import { Injectable } from '@angular/core';
import { globalscripts } from '../globalscripts/globalscripts'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { stringify } from '@angular/core/src/render3/util';
import { getLocaleDayNames } from '@angular/common';

@Injectable()
export class profilscripts {

  public items: any;
  public nom = "Verhoye"; //Var declaré ici pour test sans BDD
  public prenom = "Alexandre"; //Var declaré ici pour test sans BDD
  private connecté : boolean = false; //Var declaré ici pour test sans BDD

constructor(private gs : globalscripts, private http : HttpClient) {
  //this.loadProfil();  //Retirer pour tests sans BDD
}

  /*Function getNom() qui retourne le nom de l'utilisateur */
  public getNom() : string{
    //var nom = "Verhoye"; //(a titre d'exemple en attendant le script)
    return this.nom;
  }


  /*Function getPrenom() qui retourne le prenom de l'utilisateur */
  public getPrenom() : string{
    //var prenom = "Alexandre"; //(a titre d'exemple en attendant le script)
    return this.prenom;
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


  /*Function motDuJour() qui retourne le mot du jour si l'utilisateur est connecté ou non */
  public motDuJour() : string{

    var mot : string;

    if(this.connecté==true){
      mot=("Bon "+ this.getDay() +", "+(this.getPrenom())+" !"); //Utilisateur connecté
    }
    else{
      mot=(("Bon ")+this.getDay()+(" !")); //Utilisateur non-connecté donc pas d'affichage du prenom
    }

    return(mot);
  }

  
  /*Function deconnexion() correspond au script lorsque l'utilisateur souhaite se deconnecter */
  public deconnexion(){
    console.log('Script deconnexion : en cours');
    //code pour deconnexion
    this.gs.toastBasic('Deconnecté', 1000);
    console.log('Script deconnexion : succès');
  }


  /*Function loadProfil() qui permet de recuperer le profil de l'utilisateur*/
  /*En cours de dev*/
  /* //Commenté pour test sans BDD
  loadProfil(){
    let data:Observable<any>;
    data = this.http.get('http://localhost/testOPN/retrieve-data.php')
    data.subscribe(result =>{
      this.items = result;
      let json = JSON.stringify(this.items); 
      let re = /\[/gi;
      json = json.replace(re, '');
      re = /\]/gi;
      json = json.replace(re, '');
      let res = JSON.parse(json);
      this.nom = res.nom;
      this.prenom = res.prenom;
    })
    */
  }

  

  


  
