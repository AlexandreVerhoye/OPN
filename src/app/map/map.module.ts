import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MapPage } from './map.page';
import { AjoutLieuPage } from '../ajout-lieu/ajout-lieu.page';
import { AjoutLieuPageModule } from '../ajout-lieu/ajout-lieu.module';
import { DetailsLieuxPage } from '../details-lieux/details-lieux.page';
import { DetailsLieuxPageModule } from '../details-lieux/details-lieux.module';




@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AjoutLieuPageModule,
    DetailsLieuxPageModule,
    RouterModule.forChild([{ path: '', component: MapPage }])
  ],
  declarations: [MapPage],

  entryComponents:[AjoutLieuPage, DetailsLieuxPage],
})
export class MapPageModule {}
