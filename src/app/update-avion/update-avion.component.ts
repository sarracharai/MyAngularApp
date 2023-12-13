import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Avion } from '../model/avion.model';

@Component({
  selector: 'app-update-avion',
  templateUrl: './update-avion.component.html',
  styles: [
  ]
})
export class UpdateAvionComponent implements OnInit {

  @Input() 
  avion! : Avion;
  @Output() 
  avionUpdated = new EventEmitter<Avion>();

  @Input() 
  ajout!:boolean;

  constructor(){}


  saveAvion() {
    this.avionUpdated.emit(this.avion);
  }

  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateAvion ",this.avion);
   
  }

}
