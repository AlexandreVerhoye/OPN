import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  constructor(public toastController: ToastController) {}

  public getNom() : string{ //Retourne le prenom et nom de la personne connectée
    var nom = "Alexandre Verhoye"; //(a titre d'exemple en attendant le script)
    return nom;
  }

  async fonctionNonDisponible() {
    const toast = await this.toastController.create({
      message: 'Pas disponible pour le moment.',
      duration: 10000,
      position: 'top',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }
}
