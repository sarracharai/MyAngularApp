import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VolsComponent } from './vols/vols.component';
import { AddVolComponent } from './add-vol/add-vol.component';
import { UpdateVolComponent } from './update-vol/update-vol.component';
import { RechercheParAvionComponent } from './recherche-par-avion/recherche-par-avion.component';
import { RechercheParDestinationComponent } from './recherche-par-destination/recherche-par-destination.component';
import { ListeAvionsComponent } from './liste-avions/liste-avions.component';
import { LoginComponent } from './login/login.component';
import { VolGuard } from './vol.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';

const routes: Routes = [
  {path: "vols", component : VolsComponent},
  {path: "add-vol", component : AddVolComponent},
  {path: "updateVol/:id", component: UpdateVolComponent},
  {path: "rechercheParAvion", component : RechercheParAvionComponent},
  {path: "rechercheParDestination", component : RechercheParDestinationComponent},
  {path: "listeAvions", component : ListeAvionsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path: "add-vol", component : AddVolComponent, canActivate:[VolGuard]},
  {path: "", redirectTo: "vols", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
