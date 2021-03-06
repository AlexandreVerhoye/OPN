import { ConnexionPage } from './../connexion/connexion.page';
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

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    MapPageModule,
    ProfilPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
