import { Component, OnInit } from '@angular/core';
import { Avion } from '../model/avion.model';
import { VolService } from '../services/vol.service';
import { Vol } from '../model/vol.model';

@Component({
  selector: 'app-recherche-par-avion',
  templateUrl: './recherche-par-avion.component.html',
  styles: [
  ]
})
export class RechercheParAvionComponent implements OnInit {
  IdAv!: number;
  avions!: Avion[];
  vols!: Vol[];

  constructor(private volService: VolService) { }
  ngOnInit(): void {
    this.volService.listeAvions().subscribe(avs => {
      this.avions = avs._embedded.avions;
      console.log(avs);
    });
  }


  onChange() { 
    this.volService.rechercherParAvion(this.IdAv).
      subscribe(vs => { this.vols = vs });
  }
  

}

