import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VolService } from '../services/vol.service';
import { Vol } from '../model/vol.model';
import { Avion } from '../model/avion.model';
import { Image } from '../model/image.model';

@Component({
  selector: 'app-update-vol',
  templateUrl: './update-vol.component.html',
  styles: [
  ]
})
export class UpdateVolComponent implements OnInit {

  avions!: Avion[];
  updatedAvId!: number;
  currentVol = new Vol();
  myImage! : string;

  uploadedImage!: File;
  isImageUpdated: Boolean=false;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private volService: VolService) { }
    
    ngOnInit(): void {
       this.volService.listeAvions().
      subscribe(avs => {this.avions = avs._embedded.avions;
      });
       this.volService.consulterVol(this.activatedRoute.snapshot.params['id']).subscribe( av =>{ this.currentVol = av;
          this.updatedAvId = av.avion.idAv;
          } )
         }

 /* updateVol() {
    this.currentVol.avion=this.avions.
        find(av =>av.idAv == this.updatedAvId)!;
    this.volService.updateVol(this.currentVol).subscribe(v => {
      this.router.navigate(['vols']);
  })
  } */

/*
  updateVol() {
  this.currentVol.avion = this.avions.find(av =>av.idAv == this.updatedAvId)!;
   //tester si l'image du produit a été modifiée
    if (this.isImageUpdated) {
       this.volService .uploadImage(this.uploadedImage, this.uploadedImage.name)
        .subscribe((img: Image) => { this.currentVol.image = img; this.volService .updateVol(this.currentVol) 
          .subscribe((av) => {
           this.router.navigate(['vols']);
           });
           });
           } 
           else{
             this.volService .updateVol(this.currentVol)
              .subscribe((av) => {
                 this.router.navigate(['vols']);
                 }); }
           }
*/

updateVol() {
   this.currentVol.avion = this.avions.find(av => av.idAv == this.updatedAvId)!;
    this.volService.updateVol(this.currentVol)
     .subscribe((av) => { this.router.navigate(['vols']);
     });
     }


     supprimerImage(img: Image){
       let conf = confirm("Etes-vous sûr ?");
        if (conf) this.volService.supprimerImage(img.idImage).subscribe(() => {
           //supprimer image du tableaucurrentVol.images
            const index = this.currentVol.images.indexOf(img, 0);
             if (index > -1) {
               this.currentVol.images.splice(index, 1);
               }
               });
               }


 /* ngOnInit() : void {

    this.volService.listeAvions().subscribe
    (avs =>{this.avions =avs._embedded.avions;
            console.log(avs);
    });


    this.volService.consulterVol(this.activatedRoute.snapshot.params['id']). 
    subscribe( vol =>{ this.currentVol = vol;
    this.updatedAvId = this.currentVol.avion.idAv;

    this.volService
    .loadImage(this.currentVol.image.idImage)
     .subscribe((img: Image) => { this.myImage = 'data:' + img.type + ';base64,' + img.image;
    
    });
    } ) ;
  }
  */

  


  onImageUpload(event: any) { 
    if(event.target.files && event.target.files.length) { 
      this.uploadedImage = event.target.files[0];
       this.isImageUpdated =true;
        const reader = new FileReader();
         reader.readAsDataURL(this.uploadedImage);
          reader.onload = () => { this.myImage = reader.result as string; };
         } }

         onAddImageVol() {
           this.volService.uploadImageV(this.uploadedImage,this.uploadedImage.name,this.currentVol.idV).subscribe( (img : Image) => {
             this.currentVol.images.push(img); 
            });
           }
}


