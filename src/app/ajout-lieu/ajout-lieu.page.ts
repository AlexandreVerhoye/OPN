import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { mapscripts } from '../globalscripts/mapscripts';

@Component({
  selector: 'app-ajout-lieu',
  templateUrl: './ajout-lieu.page.html',
  styleUrls: ['./ajout-lieu.page.scss'],
})
export class AjoutLieuPage implements OnInit {

  constructor(private modalCtrl : ModalController, private ms : mapscripts) { }

  ngOnInit() {
  }

  /*Function dismiss() qui permet la fermeture du modal*/
  dismiss(){
    this.modalCtrl.dismiss();
  }

  getX() : number{
    return this.ms.getMaPosX();
  }

  getY() : number{
    return this.ms.getMaPosY();
  }

  creerLieu(){
    //Ajouter script de creation de lieu avec mapscripts
  }

}
