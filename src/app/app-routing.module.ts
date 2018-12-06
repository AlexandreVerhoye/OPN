import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },  { path: 'Inscription', loadChildren: './inscription/inscription.module#InscriptionPageModule' },
  { path: 'ReglageProfil', loadChildren: './reglage-profil/reglage-profil.module#ReglageProfilPageModule' },
  { path: 'DetailsLieux', loadChildren: './details-lieux/details-lieux.module#DetailsLieuxPageModule' }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
