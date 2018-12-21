import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Injectable } from'@angular/core';
import { HttpClient } from '@angular/common/http';

// Exemple de commentaire :

    /*Type Nom Utilité
    Param :
    */

    /*Type Nom utilité
    Param : nomParam => Utilité Format, nomParam => utilité Format
    */

// A utilisé pour toute les fonctions


@Injectable()
export class globalscripts{
    
    constructor(private toast : ToastController, private loading : LoadingController, private http : HttpClient){}

    public items : Array<any> = [];
    private nom;
    public testInt : number;
  

    /*Toast basic
    Param : msg => Message au format string, duration => temps en millisecondes au format number
    */
    async toastBasic(msg : string, duration : number) { 
        const toast = await this.toast.create({
          message: msg,
          duration: duration,
          position: 'top',
          showCloseButton: true,
          closeButtonText: 'Ok',
        });
        toast.present();
      }


    /*Toast Info (sans bouton de fermeture)
    Param : msg => Message au format string, duration =>temps en millisecondes au format number
    */
    async toastInfo(msg : string, duration : number) {
      const toast = await this.toast.create({
        message: msg,
        duration: duration,
        position: 'top',
        showCloseButton: false,
      });
      toast.present();
    }


    /*Toast Erreur avec couleur orange caracteristique de l'erreur
    Param : msg => Message au format string, duration =>temps en millisecondes au format number
    */
    async toastErreur(msg : string, duration : number) {
      const toast = await this.toast.create({
        message: msg,
        duration: duration,
        position: 'top',
        color : 'warning'
      });
      toast.present();
    }
   

    /*Chargement basique (necessite un delay après l'appel de cette fonction)
    Param : msg => Message au format string, duration =>temps en millisecondes au format number
    */
    async chargement(message : string, duration : number) {
      const loading = await this.loading.create({
        message: message,
        duration: duration
      });
      return await loading.present();
    }


    /*Function load qui charge la BDD */
    load() : void

    {
        this.http
        .get('http://localhost/testOPN/retrieve-data.php')
        .subscribe((data : any) =>
        {
          console.dir(data);
          this.items = data;
          console.dir(this.items);
        },
        (error : any) =>
        {
          console.dir(error);
        });

    }

    public setNbr(nbr :number){
      this.testInt=nbr;
    }

    public getNbr(): string{
      return("nb test : " + this.testInt);
    }
}