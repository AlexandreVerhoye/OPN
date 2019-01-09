import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'bienvenue', pathMatch: 'full' },
  { path: 'app', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'ReglageProfil', loadChildren: './reglage-profil/reglage-profil.module#ReglageProfilPageModule' },
  { path: 'DetailsLieux', loadChildren: './details-lieux/details-lieux.module#DetailsLieuxPageModule' },
  { path: 'bienvenue', loadChildren: './bienvenue/bienvenue.module#BienvenuePageModule' },
  { path: 'ajoutLieu', loadChildren: './ajout-lieu/ajout-lieu.module#AjoutLieuPageModule' },
  { path: 'reglage-confid', loadChildren: './reglage-confid/reglage-confid.module#ReglageConfidPageModule' },
  { path: 'connexion', loadChildren: './connexion/connexion.module#ConnexionPageModule' }


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
