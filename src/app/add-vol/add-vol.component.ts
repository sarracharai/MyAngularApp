import { Component, OnInit } from '@angular/core';
import { Vol } from '../model/vol.model';
import { VolService } from '../services/vol.service';
import { Avion } from '../model/avion.model';
import { Router } from '@angular/router';
import { Image } from '../model/image.model';
@Component({
  selector: 'app-add-vol',
  templateUrl: './add-vol.component.html',
  styleUrls: ['./add-vol.component.css']
})
export class AddVolComponent implements OnInit {
  avions! : Avion[];
  newVol = new Vol();
  newIdAv! : number;
  newAvion! :Avion;

  uploadedImage!: File;
   imagePath: any;
  
  constructor(private volService: VolService,
    private router :Router){}

    ngOnInit(): void {
       this.volService.listeAvions(). 
       subscribe(av => {console.log(av); 
                        this.avions = av._embedded.avions;
      });
  
    }

 /* addVol(){
    //console.log(this.newVol);
    this.newVol.avion = this.avions.find(av => av.idAv == this.newIdAv)!;
    this.volService.ajouterVol(this.newVol)
    .subscribe(v =>{
    console.log(v);
    this.router.navigate(['vols']);
    })
  } */
  addVol(){
  this.volService
   .uploadImage(this.uploadedImage, this.uploadedImage.name)
    .subscribe((img: Image) => {
     this.newVol.image=img;
      this.newVol.avion = this.avions.find(av => av.idAv == this.newIdAv)!;
      this.volService
       .ajouterVol(this.newVol)
        .subscribe(() => { 
        this.router.navigate(['vols']);
      });
     });
     }



    onImageUpload(event: any) {
       this.uploadedImage = event.target.files[0];
        var reader = new FileReader();
         reader.readAsDataURL(this.uploadedImage);
         reader.onload = (_event) => { this.imagePath = reader.result;
         } }
   

  

 


}
