import { Avion } from "./avion.model"
import { Image } from "./image.model";
export class Vol 
{ 
    idV! : number; 
    destinationV! : string; 
    aeroportDepartV! : string; 
    aeroportArriveeV! : string ; 
    statutV! : string ;
    avion! :Avion;
    image! :Image;
    imageStr!:string;
    images!: Image[];
}