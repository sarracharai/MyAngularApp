import { Component, OnInit } from '@angular/core';
import { VolService } from '../services/vol.service';
import { Avion } from '../model/avion.model';

@Component({
  selector: 'app-liste-avions',
  templateUrl: './liste-avions.component.html',
  styles: [
  ]
})
export class ListeAvionsComponent implements OnInit{

  ajout:boolean=true;
  avions!: Avion [];
  updatedAv:Avion = {
    "idAv": 0,
    "nomAv": "",
    "capaciteAv": 0,
    "compagnieAv": ''
  };
  constructor(private volService : VolService){}

  chargerAvions(){ 
    this.volService.listeAvions().
    subscribe(avs => {this.avions = avs._embedded.avions;
      console.log(avs); 
    }); 
  }

  avionUpdated(av: Avion) {
    console.log("Av updated event",av);
    this.volService.ajouterAvion(av).
    subscribe(()=> this.chargerAvions());
  }

  updateAv(av:Avion) {
     this.updatedAv=av;
     this.ajout=false;
     }

  

  ngOnInit(): void {
    this.chargerAvions();
  }
}
