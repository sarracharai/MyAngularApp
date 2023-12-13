import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VolsComponent } from './vols/vols.component';
import { AddVolComponent } from './add-vol/add-vol.component';
import { FormsModule } from '@angular/forms';
import { UpdateVolComponent } from './update-vol/update-vol.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { RechercheParAvionComponent } from './recherche-par-avion/recherche-par-avion.component';
import { RechercheParDestinationComponent } from './recherche-par-destination/recherche-par-destination.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { ListeAvionsComponent } from './liste-avions/liste-avions.component';
import { UpdateAvionComponent } from './update-avion/update-avion.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { TokenInterceptor } from './services/token.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    VolsComponent,
    AddVolComponent,
    UpdateVolComponent,
    RechercheParAvionComponent,
    RechercheParDestinationComponent,
    SearchFilterPipe,
    ListeAvionsComponent,
    UpdateAvionComponent,
    LoginComponent,
    ForbiddenComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{ provide : HTTP_INTERCEPTORS,
    useClass : TokenInterceptor,
    multi : true}
     ],
  bootstrap: [AppComponent]
})
export class AppModule { }
