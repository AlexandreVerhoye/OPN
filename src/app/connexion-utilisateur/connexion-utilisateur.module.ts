import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConnexionUtilisateurPage } from './connexion-utilisateur.page';

const routes: Routes = [
  {
    path: '',
    component: ConnexionUtilisateurPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConnexionUtilisateurPage]
})
export class ConnexionUtilisateurPageModule {}
