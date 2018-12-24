import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-reglage-confid',
  templateUrl: './reglage-confid.page.html',
  styleUrls: ['./reglage-confid.page.scss'],
})
export class ReglageConfidPage implements OnInit {

  constructor(private modalCtrl : ModalController) { }

  ngOnInit() {
  }

  /*Function dismiss() qui permet la fermeture du modal*/
  dismiss(){
    this.modalCtrl.dismiss();
  }

}
