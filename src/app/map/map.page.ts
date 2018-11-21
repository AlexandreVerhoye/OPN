import { Component } from '@angular/core';
import leaflet from 'leaflet';
import { Platform } from 'ionic-angular';


@Component({
  selector: 'app-map',
  templateUrl: 'map.page.html',
  styleUrls: ['map.page.scss']
})
export class MapPage {
	map: any;
	
	constructor() {}
  
  async  startLocation(){
    await this.platform.ready();
  }

	ionViewDidEnter() {
    //this.loadmap();
    setTimeout(this.loadmap.bind(this), 1000)
  }

  loadmap() {

    this.map = leaflet.map("map").fitWorld();

    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18
    }).addTo(this.map);
    this.map.locate({
      setView: true,
      maxZoom: 10
    }).on('locationfound', (e) => {
      console.log('found you');
      })
 
  }

}
