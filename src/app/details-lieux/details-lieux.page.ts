import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-details-lieux',
  templateUrl: './details-lieux.page.html',
  styleUrls: ['./details-lieux.page.scss'],
})
export class DetailsLieuxPage implements OnInit {

  x:number;
  y:number;
    constructor(navParams: NavParams, private modalCtrl :ModalController, public navCtrl: NavController) { 
      this.x = navParams.get('x')
      this.x = navParams.get('y');

    }

  ngOnInit() {
  }

  dismiss(){
    this.modalCtrl.dismiss();
  }

}
