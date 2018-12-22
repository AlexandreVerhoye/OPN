import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MapPage } from './map.page';
import { AjoutLieuPage } from '../ajout-lieu/ajout-lieu.page';
import { AjoutLieuPageModule } from '../ajout-lieu/ajout-lieu.module';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AjoutLieuPageModule,
    RouterModule.forChild([{ path: '', component: MapPage }])
  ],
  declarations: [MapPage],

  entryComponents:[AjoutLieuPage],
})
export class MapPageModule {}
