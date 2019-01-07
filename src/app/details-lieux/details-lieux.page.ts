import { Component, OnInit, wtfCreateScope } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { loadElementInternal, stringify } from '@angular/core/src/render3/util';
import { Http } from '@angular/http';
import { mapscripts } from '../globalscripts/mapscripts';

@Component({
  selector: 'app-details-lieux',
  templateUrl: './details-lieux.page.html',
  styleUrls: ['./details-lieux.page.scss'],
})
export class DetailsLieuxPage implements OnInit {
  id : number;
  lieu : any = {};
  wc : string;
  
    constructor(navParams: NavParams, private modalCtrl :ModalController, public navCtrl: NavController, public http: Http, private ms : mapscripts) { 
      this.id = navParams.get('id');
      this.http = http;
      this.loadLieu();
      console.log(this.lieu);
    }

  ngOnInit() {
  }

  dismiss(){
    this.modalCtrl.dismiss();
  }

  public loadLieu(){
    var link = 'http://localhost/testOPN/retrieve-lieu.php';
    var myData = JSON.stringify({idLieu: this.id});
 
 this.http.post(link, myData)
 .subscribe(data => {
 var res = JSON.parse(data["_body"]);
 console.log(res);
 for (var lieu in res){
   this.lieu.idLieu = res[lieu].idLieu;
   this.lieu.adresse = res[lieu].adresse;
   this.lieu.dateCreation = res[lieu].dateCreation;
   this.lieu.idCreateur = res[lieu].idCreateur;
   this.lieu.installation = res[lieu].installation;
   this.lieu.latitude = res[lieu].latitude;
   this.lieu.longitude = res[lieu].longitude;
   this.lieu.nomLieu = res[lieu].nomLieu;
   this.lieu.sanitaire = res[lieu].sanitaire;
    if(this.lieu.sanitaire==1){
      this.wc="Oui"
      }
      else{
        this.wc="Non";
      }
   this.lieu.tranquillite = res[lieu].tranquillite;
   this.lieu.votePos = res[lieu].votePos;
   this.lieu.voteNeg = res[lieu].voteNeg;
 }
 }, error => {
 console.log(error);
 });
 }
  