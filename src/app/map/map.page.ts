import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import leaflet from 'leaflet';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { globalscripts } from '../globalscripts/globalscripts';
import { mapscripts } from '../globalscripts/mapscripts';
import { ModalController } from '@ionic/angular';
import { AjoutLieuPage } from '../ajout-lieu/ajout-lieu.page';
import { DetailsLieuxPage } from '../details-lieux/details-lieux.page';
import { markParentViewsForCheckProjectedViews } from '@angular/core/src/view/util';



@Component({
  selector: 'app-map',
  templateUrl: 'map.page.html',
  styleUrls: ['map.page.scss']
})
export class MapPage {

  locatedState : boolean;
  map: any;
  constructor(private modalCtrl : ModalController, private geolocation: Geolocation, private loading : LoadingController, private gs : globalscripts, private ms : mapscripts) {}

  /*Function ionviewDidEnter qui permet de definir les actions lors du chargement de la page */
  ionViewDidEnter() {
    this.gs.chargement('Chargement de la carte', 1000);
    setTimeout(this.loadMap.bind(this), 1000);
  }

  
  /*Function loadmap qui permet de charger la carte */
  async loadMap() {
    console.log('Script loadMap : click');
    console.log('Script loadMap : en cours');

    this.map = leaflet.map("map").fitWorld();
    let markerGroup = leaflet.featureGroup(); //FeatureGroup pour les lieux de picnic

    let markertest : any = leaflet.marker([47.32, 5,7]); //Marker de test 1
    markertest.addTo(this.map).on('click', () => {this.ouvrirDetailsLieu(); });

    
    var maPosIcon = leaflet.icon({
      iconUrl: '/src/app/map/maPos.png',
      iconSize: [30, 30],
      popupAnchor: [-3, -76]
  });

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
      this.locatedState=true;

      this.ms.setMaPosXY(e.latitude, e.longitude);

      console.log("x : " +this.ms.getMaPosX()); //Ma position en X après localisation
      console.log("y : "+this.ms.getMaPosY()); //Ma position en Yw après localisation
	  
      let maPos: any = leaflet.marker([e.latitude, e.longitude], {icon: maPosIcon});//Marker sur ma position
      leaflet.circle([e.latitude, e.longitude], {radius: 40}).addTo(this.map); //Cercle autour de la position

      maPos.bindTooltip("Votre position").on('click', () => {maPos.openTooltip(); }); //Popup "Votre position
      maPos.addTo(this.map); //Ajoute le marker "maPos" a la carte

      

      }).on('locationerror', () => {
        this.gs.toastErreur('Veuillez activer votre GPS', 1000);
        this.locatedState=false;
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
      this.locatedState=true;
      }).on('locationerror', () => {
        this.locatedState=false;
        this.gs.toastErreur('Veuille activer votre GPS', 1000);
      })
      console.log('Script refreshLocation : succès');
  }


  /*Function rechercher qui permet de rechercher un lieu */
  rechercher(){
    console.log('Script rechercher : click');
    //code pour rechercher un lieu
  }


  /*Function qui permet l'ajout de lieu a l'appuie du bouton d'ajout*/
  async ajouterLieu(){
    console.log('Script ajouterLieu : click');

      if(this.locatedState==true){
      this.ms.setMaPosXY;

      const modalAjout = await this.modalCtrl.create({
        component: AjoutLieuPage
      });
      return await modalAjout.present();

  }

  else{
    this.gs.toastErreur("Impossible de vous localiser !", 2000);
  }



  }

  async ouvrirDetailsLieu(){


    const modalDetails = await this.modalCtrl.create({
      component: DetailsLieuxPage,
      componentProps: {
        'x': 23 ,
        'y': 34
      }
    });
    return await modalDetails.present();
    
  }
  
}
