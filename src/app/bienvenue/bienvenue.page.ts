import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-bienvenue',
  templateUrl: './bienvenue.page.html',
  styleUrls: ['./bienvenue.page.scss'],
})
export class BienvenuePage implements OnInit {

  constructor(private modalCtrl : ModalController) { }

  ngOnInit() {
  }


  dismiss(){
    this.modalCtrl.dismiss();
  }

}
