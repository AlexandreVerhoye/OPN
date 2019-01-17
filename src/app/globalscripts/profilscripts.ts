import { Injectable } from '@angular/core';
import { globalscripts } from '../globalscripts/globalscripts'
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { stringify } from '@angular/core/src/render3/util';
import { getLocaleDayNames } from '@angular/common';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { TestComponentRenderer } from '@angular/core/testing';
import { Http } from '@angular/http';

@Injectable()
export class profilscripts {

  public profil: any = {};
  private co : boolean = false;

constructor(private navCtrl : NavController, private storage : Storage, private gs : globalscripts, private http : Http) {
  this.storage.get('nom').then((result) => {
  this.profil.nom = result;
});
this.storage.get('prenom').then((result) => {
  this.profil.prenom = result;
});
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
    return (("Bon ")+this.getDay()+(" !"));
  }

  
  /*Function deconnexion() correspond au script lorsque l'utilisateur souhaite se deconnecter */
  public deconnexion(){
    console.log('Script deconnexion : en cours');

    this.storage.set('co', false);
    this.storage.set('email', null);
    this.storage.set('pass', null);
    this.storage.set('nom', null);
    this.storage.set('prenom', null);

    this.testCo()
    this.navCtrl.navigateRoot('bienvenue');
    this.gs.toastBasic('Deconnecté', 1000);
    console.log('Script deconnexion : succès');
  }


  public connexion(emailInscription : string, passInscription : string){
    console.log('Script connexion : en cours');

    var link = this.gs.connexion+'/retrieve-user.php';
    var myData = JSON.stringify({email: emailInscription, password: passInscription});
    
    this.http.post(link, myData)
    .subscribe(data => {
    var res = JSON.parse(data["_body"]);
  
    for (var profil in res){
      this.profil.nom = res[profil].nom;
      this.profil.prenom = res[profil].prenom;
      this.profil.password = res[profil].password;
      this.storage.set('co', true);
      this.storage.set('email', emailInscription);
      this.storage.set('pass', passInscription);
      this.storage.set('nom', this.profil.nom);
      this.storage.set('prenom', this.profil.prenom);
      this.gs.toastBasic('Connecté !', 1000);
      this.navCtrl.navigateRoot('/app/tabs/(home:home)');
    }
  },error => {
    console.log(error);
  });

  
  this.testCo(); //Dev

  /*
  if(res==null){
      this.gs.toastErreur("Erreur d'identifiant ou mot de passe", 2000);
    }
    else{
    this.gs.toastBasic('Connecté !', 1000);
    this.navCtrl.navigateRoot('/app/tabs/(home:home)');
  }
  */
  }


  public testCo(){

    this.storage.get('co').then((val) => {
      console.log('Connecté ?', val);
    });

    this.storage.get('email').then((val) => {
      console.log('Email', val);
    });

    this.storage.get('pass').then((val) => {
      console.log('Pass', val);
    });
  }


  public inscription(emailInscription : string, passInscription : string, prenomInscription : string, nomInscription : string){
    console.log('Script inscription : en cours');
    
    var email : string = emailInscription;
    var pass : string = passInscription;
    var prenom : string = prenomInscription;
    var nom : string = nomInscription;

    //Script inscription a la BD ici

    this.gs.toastBasic('Vous etes maintenant inscrit, veuillez vous connecter', 3000);
  }

  public changementNomPrenom(nom : string, prenom : string){

    //Script changement nom prenom
    //Si reussite : 
    this.gs.toastInfo("Profil modifié avec succès", 2000);

  }

  public changementEmail(email : string){
    //Script changement d'adresse mail
    //Si succès :
    this.gs.toastInfo("E-mail modifié avec succès", 2000);
  }
}


  


  
