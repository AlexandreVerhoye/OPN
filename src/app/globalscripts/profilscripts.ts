import { Injectable } from '@angular/core';
import { globalscripts } from '../globalscripts/globalscripts'

@Injectable()
export class profilscripts {

constructor(private gs : globalscripts) {}

  /*Function getNom() qui retourne le nom de l'utilisateur */
  public getNom() : string{
    var nom = "Verhoye"; //(a titre d'exemple en attendant le script)
    return nom;
  }


  /*Function getPrenom() qui retourne le prenom de l'utilisateur */
  public getPrenom() : string{
    var prenom = "Alexandre"; //(a titre d'exemple en attendant le script)
    return prenom;
  }

  /*
  public getNom() : string{ //Retourne le prenom et nom de la personne connectée
    var nom = this.items.toString();
    //var nom = "Alexandre Verhoye2"; //(a titre d'exemple en attendant le script)
    return nom;
  }
  */

  /*Function deconnexion() correspond au script lorsque l'utilisateur souhaite se deconnecter */
  public deconnexion(){
    console.log('Script deconnexion : en cours');
    //code pour deconnexion
    this.gs.toastBasic('Deconnecté', 1000);
    console.log('Script deconnexion : succès');
  }

  

  


  
}