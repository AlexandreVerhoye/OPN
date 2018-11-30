import { Component } from '@angular/core';
import leaflet from 'leaflet';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-map',
  templateUrl: 'map.page.html',
  styleUrls: ['map.page.scss']
})
export class MapPage {
	map: any;
	
	constructor(private geolocation: Geolocation, public loadingCtrl: LoadingController) {}

	ionViewDidEnter() {
    this.chargementCarte();
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
	  let markerGroup = leaflet.featureGroup();
      let marker: any = leaflet.marker([e.latitude, e.longitude]).on('click', () => {
        alert('Vous etes ici');
      })
	  
      markerGroup.addLayer(marker);
      this.map.addLayer(markerGroup);
      }).on('locationerror', (err) => {
        alert(err.message);
    })
  }
  
  refreshLocation(){
	  this.map.locate({
      setView: true,
      maxZoom: 15, //Zoom de 15 (assez proche)
	  enableHighAccuracy : true
    }).on('locationfound', (e) => {
      console.log('found you');
      })
	  
  }

  async chargementCarte() {
    const loading = await this.loadingCtrl.create({
      message: 'Chargement de la carte',
      duration: 1000
    });
    return await loading.present();
  }

}
