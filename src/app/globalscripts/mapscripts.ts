import { Injectable } from'@angular/core';

@Injectable()
export class mapscripts {

  public maPosX : number; //Position X lors de la localisation
  public maPosY : number; //Position Y lors de la localisation


  /*Function setMaPosY qui permet de get X et Y lors de la geolocalisation et de les importer dans ce globalscript*/
  public setMaPosXY(x : number, y : number){
    this.maPosX=x;
    this.maPosY=y;
  }


  /*Permet de retourner la position en X inscrite par setMaPosXY*/
  public getMaPosX(){
    return this.maPosX;
  }


  /*Permet de retourner la position en Y inscrite par setMaPosXY*/
  public getMaPosY(){
    return this.maPosY;
  }




  }
      
