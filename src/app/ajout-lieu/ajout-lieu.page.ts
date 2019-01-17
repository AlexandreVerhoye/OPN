import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { mapscripts } from '../globalscripts/mapscripts';
import { globalscripts } from '../globalscripts/globalscripts';
import { Http } from '@angular/http';
import { profilscripts } from '../globalscripts/profilscripts';

@Component({
  selector: 'app-ajout-lieu',
  templateUrl: './ajout-lieu.page.html',
  styleUrls: ['./ajout-lieu.page.scss'],
})
export class AjoutLieuPage implements OnInit {

  constructor(private modalCtrl : ModalController, private ms : mapscripts, private gs : globalscripts, private ps : profilscripts, public http: Http) { }

  nomLieu : string;
  descLieu : string;
  tranquillite : string = "Non renseignée";
  sanitaireIsChecked : boolean = false;
  installationIsChecked : boolean = false;
  rueLieu : string;
  villeLieu : string;

  ngOnInit() {
  }

  /*Function dismiss() qui permet la fermeture du modal*/
  dismiss(){
    this.modalCtrl.dismiss();
  }
  getIdCreateur() : number{
    return 1;
  }

  getX() : number{
    return this.ms.getMaPosX();
  }

  getY() : number{
    return this.ms.getMaPosY();
  }

  adresseToString() : string {
    if(this.rueLieu!=null && this.villeLieu!=null){
      return this.rueLieu + ", "+ this.villeLieu;
    }
    else{
      return "Non definie"
    }
  }

  creerLieu(){
    var link = this.gs.connexion + '/send-lieu.php';
    var installationnum; 
    var sanitairenum; 
    if (this.installationIsChecked){
      installationnum = 1;
    }else installationnum = 0;

    if (this.sanitaireIsChecked){
      sanitairenum = 1
    }else sanitairenum = 0
    var myData = JSON.stringify({idCreateur: this.getIdCreateur(), nomLieu: this.nomLieu, adresse: this.adresseToString(), latitude : this.getX(), longitude: this.getY(), installation : installationnum, sanitaire : sanitairenum, tranquillite : this.tranquillite, date : null});
 
    this.http.post(link, myData)
    .subscribe(data => {
      console.log(data);
  }, error => {
    console.log(error);
  });
    console.log(this.nomLieu);
    console.log(this.descLieu);
    console.log(this.tranquillite);
    console.log(this.installationIsChecked);
    console.log(this.sanitaireIsChecked);
    console.log(this.adresseToString());
    //Ajouter script de creation de lieu avec mapscripts /!\ utiliser "adresseToString()" pour l'adresse, ainsi que getX et getY pour la position du lieu
  }

  customActionSheetOptions: any = {
    header: 'Tranquillité',
    subHeader: 'Selectionnez le niveau de tranquillité du lieu'
  };
}
