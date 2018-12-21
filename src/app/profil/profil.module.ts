import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfilPage } from './profil.page';
import { ConnexionPage } from '../connexion/connexion.page';
import { ConnexionPageModule } from '../connexion/connexion.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ConnexionPageModule,
    RouterModule.forChild([{ path: '', component: ProfilPage }]),
  ],
  declarations: [ProfilPage],

  entryComponents:[ConnexionPage]
})
export class ProfilPageModule {}
