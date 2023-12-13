import { Component, OnInit } from '@angular/core';
import { Vol } from '../model/vol.model';
import { VolService } from '../services/vol.service';

@Component({
  selector: 'app-recherche-par-destination',
  templateUrl: './recherche-par-destination.component.html',
  styles: [
  ]
})
export class RechercheParDestinationComponent implements OnInit{

  destinationV! : string;
  vols!: Vol[];
  allVols!: Vol[];
  searchTerm!: string;
  constructor(private volService : VolService){}
  
 
recherchervols() {

  this.volService.rechercherParDestination(this.destinationV). 
  subscribe(vs => { console.log(vs);
    this.vols = vs;
  });

}


onKeyUp(filterText : string){
   this.vols = this.allVols.
   filter(item => item.destinationV.toLowerCase().includes(filterText)); 
  }


ngOnInit(): void {
  this.volService.listeVol().subscribe(vs => { 
    console.log(vs); 
    this.vols = vs; 
  }); }

}


