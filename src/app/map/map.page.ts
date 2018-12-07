import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import leaflet from 'leaflet';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { globalscripts } from '../globalscripts/globalscripts';



@Component({
  selector: 'app-map',
  templateUrl: 'map.page.html',
  styleUrls: ['map.page.scss']
})
export class MapPage {

  map: any;
  constructor(private geolocation: Geolocation, private loading : LoadingController, private gs : globalscripts) {}

  /*Function ionviewDidEnter qui permet de definir les actions lors du chargement de la page */
  ionViewDidEnter() {
    this.gs.chargement('Chargement de la carte', 1000);
    setTimeout(this.loadMap.bind(this), 1000)
  }

  
  /*Function loadmap qui permet de charger la carte */
  async loadMap() {
    console.log('Script loadMap : click');
    console.log('Script loadMap : en cours');
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
      this.gs.toastBasic('Nous vous avons localisé', 1000);
	  let markerGroup = leaflet.featureGroup();
      let marker: any = leaflet.marker([e.latitude, e.longitude]).on('click', () => {
        alert('Vous etes ici');
      })
	  
      markerGroup.addLayer(marker);
      this.map.addLayer(markerGroup);
      }).on('locationerror', () => {
        this.gs.toastErreur('Veuille activer votre GPS', 1000);
    })
    console.log('Script loadMap : succès');
  }
  

  /*Function refreshLocation qui permet de re-localiser l'utilisateur et raffraichir la carte */
  refreshLocation(){
    console.log('Script refreshLocation : click');
    console.log('Script refreshLocation : en cours');
	  this.map.locate({
      setView: true,
      maxZoom: 15, //Zoom de 15 (assez proche)
	  enableHighAccuracy : true
    }).on('locationfound', (e) => {
      this.gs.toastBasic('Nous vous avons localisé', 1000);
      }).on('locationerror', () => {
        this.gs.toastErreur('Veuille activer votre GPS', 1000);
      })
      console.log('Script refreshLocation : succès');
  }


  /*Function rechercher qui permet de rechercher un lieu */
  rechercher(){
    console.log('Script rechercher : click');
    //code pour rechercher un lieu
  }

  ajouterLieu(){
    console.log('Script ajouterLieu : click');
    //code pour ajouter un lieu
  }
  
}
