import { Component } from '@angular/core';
import { globalscripts } from '../globalscripts/globalscripts';
import { profilscripts } from '../globalscripts/profilscripts';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  
  constructor(private gs : globalscripts, private ps : profilscripts) {
    //this.gs.load();
  }
  
  

  ionViewWillEnter() : void
  {
     //this.gs.load();
    this.gs.toastBasic('Bienvenue sur OpenPicNic', 10000);
  }

  


}
