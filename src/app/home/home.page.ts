import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  public items : Array<any> = [];
  private nom;
  constructor(public toastController: ToastController, public http : HttpClient) {
    this.load();
  }
  
  public getNom() : string{ //Retourne le prenom et nom de la personne connectée
    var nom = this.items.toString();
    //var nom = "Alexandre Verhoye2"; //(a titre d'exemple en attendant le script)
    return nom;
  }

  ionViewWillEnter() : void
  {
     this.load();
  }

  async fonctionNonDisponible() {
    const toast = await this.toastController.create({
      message: 'Pas disponible pour le moment.',
      duration: 10000,
      position: 'top',
      showCloseButton: true,
      closeButtonText: 'Okk'
    });
    toast.present();
  }

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


}
