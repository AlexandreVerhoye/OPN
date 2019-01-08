import { Component, OnInit, wtfCreateScope, Input } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { loadElementInternal, stringify } from '@angular/core/src/render3/util';
import { Http } from '@angular/http';
import { mapscripts } from '../globalscripts/mapscripts';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { globalscripts } from '../globalscripts/globalscripts';

@Component({
  selector: 'app-details-lieux',
  templateUrl: './details-lieux.page.html',
  styleUrls: ['./details-lieux.page.scss'],
})
export class DetailsLieuxPage implements OnInit {
  id : number;
  lieu : any = {};
  commentaires : any;
  isLiked : boolean=false;
  isDisliked : boolean = false;

    constructor(private gs : globalscripts, navParams: NavParams, private modalCtrl :ModalController, public navCtrl: NavController, public http: Http, private ms : mapscripts) { 
      this.id = navParams.get('id');
      this.http = http;
      this.loadLieu();
      console.log(this.lieu);
      this.loadCommentaires();
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
      this.lieu.tranquillite = res[lieu].tranquillite;
      this.lieu.votePos = res[lieu].votePos;
      this.lieu.voteNeg = res[lieu].voteNeg;
    }
  }, error => {
    console.log(error);
  });
}

public loadCommentaires(){
  var link = 'http://localhost/testOPN/scripts-detailsLieu/retrieve-commentaires.php';
  var myData = JSON.stringify({idLieu: this.id});
    this.http.post(link, myData)
    .subscribe(data => {
      var res = JSON.parse(data["_body"]);
    this.commentaires = res;
    console.log(this.commentaires);
  }, error => {
    console.log(error);
  });
}


//Getter de données a afficher
 getSanitaire() : string{
  if(this.lieu.sanitaire==1){
    return "Oui"
    }
    else{
      return "Non";
    }
 }

 getNomLieu() : string{
  if(this.lieu.nomLieu==""){
    return "Details du lieu"
    }
    else{
      return this.lieu.nomLieu;
    }
 }

 getInstallation() : string{
  if(this.lieu.installation==1){
    return "Oui"
    }
    else{
      return "Non"
    }
 }

 getCreateur(){
   //to be done
 }

 setLike(){

  if(this.isDisliked==false && this.isLiked==false){
    //+1 like
    this.isLiked=true;
    this.lieu.votePos+=1;
  }

  else if(this.isDisliked==true && this.isLiked==false){
    //-1 dislike +1 like
    this.lieu.voteNeg-=1;
    this.lieu.votePos+=1;
    this.isLiked=true;
    this.isDisliked=false;
  }

  else if(this.isDisliked==false && this.isLiked==true){
    //Do nothing
    this.gs.toastErreur("Vous avez deja liké", 1000);
  }

}

 setDislike(){
  if(this.isDisliked==false && this.isLiked==false){
    //+1 like
    this.isDisliked=true;
    this.lieu.voteNeg+=1;
  }

  else if(this.isLiked==true && this.isDisliked==false){
    //-1 like +1 dislike
    this.lieu.votePos-=1;
    this.lieu.voteNeg+=1;
    this.isDisliked=true;
    this.isLiked=false;
  }

  else if(this.isLiked==false && this.isDisliked==true){
    //Do nothing
    this.gs.toastErreur("Vous avez deja disliké", 1000);
  }
 }

 addCommentaire(){
   //To do
 }

 




}
  