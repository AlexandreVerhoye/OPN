import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReglageConfidPage } from './reglage-confid.page';

const routes: Routes = [
  {
    path: '',
    component: ReglageConfidPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReglageConfidPage]
})
export class ReglageConfidPageModule {}
