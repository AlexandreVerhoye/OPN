import { Injectable } from '@angular/core';
import { globalscripts } from '../globalscripts/globalscripts'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';

@Injectable()
export class profilscripts {

  public items: any;
  public nom;
  public prenom;

constructor(private gs : globalscripts, private http : HttpClient) {
  this.loadProfil();
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

  
  /*Function deconnexion() correspond au script lorsque l'utilisateur souhaite se deconnecter */
  public deconnexion(){
    console.log('Script deconnexion : en cours');
    //code pour deconnexion
    this.gs.toastBasic('Deconnecté', 1000);
    console.log('Script deconnexion : succès');
  }


  /*Function loadProfil() qui permet de recuperer le profil de l'utilisateur*/
  /*En cours de dev*/
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
  }

  

  


  
}