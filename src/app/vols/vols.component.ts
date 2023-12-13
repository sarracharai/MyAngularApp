import { Component, OnInit } from '@angular/core';
import { Vol} from '../model/vol.model';
import { VolService } from '../services/vol.service';
import { Avion } from '../model/avion.model';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Image } from '../model/image.model';

@Component({
  selector: 'app-vols',
  templateUrl: './vols.component.html',
  styleUrls: ['./vols.component.css']
})
export class VolsComponent  implements OnInit{

  vols!: Vol[];

  constructor(private volService: VolService,
    public authService: AuthService){
    //this.vols = volService.listeVols();
    
  }

 

  
  ngOnInit(): void {
    this.chargerVols();
  }

  chargerVols(){ 
    this.volService.listeVol().subscribe(vs => { this.vols = vs; this.vols.forEach((v) => { v.imageStr = 'data:' + v.images[0].type + ';base64,' + v.images[0].image; }); });
  }
  supprimerVol(v: Vol) {
         let conf = confirm("Etes-vous sûr ?"); 
         if (conf)
          this.volService.supprimerVol(v.idV).subscribe(() => { 
          console.log("VOL supprimé");
          this.chargerVols(); 
        });
}


}
