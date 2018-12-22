import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AjoutLieuPage } from './ajout-lieu.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutLieuPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AjoutLieuPage]
})
export class AjoutLieuPageModule {}
