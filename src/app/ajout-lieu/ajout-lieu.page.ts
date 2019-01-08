import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { mapscripts } from '../globalscripts/mapscripts';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-ajout-lieu',
  templateUrl: './ajout-lieu.page.html',
  styleUrls: ['./ajout-lieu.page.scss'],
})
export class AjoutLieuPage implements OnInit {

  constructor(private modalCtrl : ModalController, private ms : mapscripts, private camera: Camera) { }

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

  getX() : number{
    return this.ms.getMaPosX();
  }

  getY() : number{
    return this.ms.getMaPosY();
  }

  adresseToString() : string {
    return this.rueLieu + ", "+ this.villeLieu;
  }

  creerLieu(){
    console.log(this.tranquillite);
    console.log(this.installationIsChecked);
    console.log(this.sanitaireIsChecked);
    console.log(this.adresseToString());
    //Ajouter script de creation de lieu avec mapscripts
  }

  customActionSheetOptions: any = {
    header: 'Tranquillité',
    subHeader: 'Selectionnez le niveau de tranquillité du lieu'
  };

  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }


  takePicture(){

  
  
  this.camera.getPicture(options).then((imageData) => {
   // imageData is either a base64 encoded string or a file URI
   // If it's base64 (DATA_URL):
   let base64Image = 'data:image/jpeg;base64,' + imageData;
  }, (err) => {
   // Handle error
  });
  }
}
