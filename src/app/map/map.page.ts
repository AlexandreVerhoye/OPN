import { Component } from '@angular/core';
import leaflet from 'leaflet';
import { Geolocation } from '@ionic-native/geolocation/ngx';


@Component({
  selector: 'app-map',
  templateUrl: 'map.page.html',
  styleUrls: ['map.page.scss']
})
export class MapPage {
	map: any;
	
	constructor(private geolocation: Geolocation) {}

	ionViewDidEnter() {
    setTimeout(this.loadmap.bind(this), 1000)
  }
  

  async loadmap() {
	  
    this.map = leaflet.map("map").fitWorld();

    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18
    }).addTo(this.map);
    
	this.map.locate({
      setView: true,
      maxZoom: 15, //Zoom de 15 (assez proche)
	  enableHighAccuracy : true
    }).on('locationfound', (e) => {
      console.log('found you');
      })
 
  }

}
