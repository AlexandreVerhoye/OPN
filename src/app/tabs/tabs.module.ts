import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { ProfilPageModule } from '../profil/profil.module';
import { MapPageModule } from '../map/map.module';
import { HomePageModule } from '../home/home.module';
import { InscriptionPageModule } from '../inscription/inscription.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    MapPageModule,
    ProfilPageModule,
    InscriptionPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
