import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-reglage-profil',
  templateUrl: './reglage-profil.page.html',
  styleUrls: ['./reglage-profil.page.scss'],
})
export class ReglageProfilPage implements OnInit {

  constructor(private modalCtrl : ModalController) { }

  ngOnInit() {
  }

  /*Function dismiss() qui permet la fermeture du modal*/
  dismiss(){
    this.modalCtrl.dismiss();
  }

}
