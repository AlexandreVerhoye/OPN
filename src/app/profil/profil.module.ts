import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfilPage } from './profil.page';
import { ConnexionPage } from '../connexion/connexion.page';
import { ConnexionPageModule } from '../connexion/connexion.module';
import { ReglageProfilPage } from '../reglage-profil/reglage-profil.page'
import { ReglageProfilPageModule } from '../reglage-profil/reglage-profil.module'
import { ReglageConfidPageModule } from '../reglage-confid/reglage-confid.module';
import { ReglageConfidPage } from '../reglage-confid/reglage-confid.page';
import { BienvenuePageModule } from '../bienvenue/bienvenue.module';
import { BienvenuePage } from '../bienvenue/bienvenue.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ConnexionPageModule,
    ReglageProfilPageModule,
    ReglageConfidPageModule,
    BienvenuePageModule,
    RouterModule.forChild([{ path: '', component: ProfilPage }]),
  ],
  declarations: [ProfilPage],

  entryComponents:[ConnexionPage, ReglageProfilPage, ReglageConfidPage, BienvenuePage]
})
export class ProfilPageModule {}
