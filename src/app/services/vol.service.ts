import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Vol } from '../model/vol.model';
import { Avion } from '../model/avion.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiURL } from '../config';
import { AvionWrapper } from '../model/avionWrapped.mode';
import { Image } from '../model/image.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class VolService {
  apiURL: string = 'http://localhost:8083/vols/api';
  apiURLAv: string = 'http://localhost:8083/vols/av';


  vols!: Vol[];
  //vol! : Vol;
  //avions : Avion[];
  constructor(private http: HttpClient,
    private authService : AuthService) {
    //this.avions = [{idAv : 1,nomAv:"Atlas",capaciteAv :600,compagnieAv :"Tunisair"}]
    /*this.vols =[
      {
      idV: 1 ,
      destinationV: "paris",
      aeroportDepartV: "airoparis", 
      aeroportArriveeV: "airotunis",
      statutV: "encours",
      avion :{idAv : 1,nomAv:"Atlas",capaciteAv :600,compagnieAv :"Tunisair"}
      
    }
   ]
   */

  }
  listeVol(): Observable<Vol[]> {
    return this.http.get<Vol[]>(this.apiURL+"/all");
  }



  ajouterVol(v: Vol): Observable<Vol> {
    let jwt = this.authService.getToken();
     jwt = "Bearer "+jwt;
     let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
     return this.http.post<Vol>(apiURL+"/addv", v, {headers:httpHeaders});
  }

   supprimerVol(id: number) {
    const url = `${apiURL}/delv/${id}`;
    let jwt = this.authService.getToken(); jwt = "Bearer "+jwt; let httpHeaders = new HttpHeaders({"Authorization":jwt})
     return this.http.delete(url, {headers:httpHeaders});
  }
  

  supprimerImage(id : number) { const url = `${this.apiURL}/image/delete/${id}`; return this.http.delete(url, httpOptions); }




  consulterVol(id: number): Observable<Vol> {
    const url = `${apiURL}/getbyid/${id}`;
     let jwt = this.authService.getToken(); jwt = "Bearer "+jwt; let httpHeaders = new HttpHeaders({"Authorization":jwt})
     return this.http.get<Vol>(url,{headers:httpHeaders});
  }

  trierVols() {
    this.vols = this.vols.sort((n1, n2) => {
      if (n1.idV! > n2.idV!) { return 1; } if (n1.idV! < n2.idV!) {
        return -1;
      } return 0;
    });
  }

  updateVol(v: Vol): Observable<Vol> {
    let jwt = this.authService.getToken(); jwt = "Bearer "+jwt; let httpHeaders = new HttpHeaders({"Authorization":jwt})
     return this.http.put<Vol>(apiURL+"/updatev", v, {headers:httpHeaders});
  }



  listeAvions(): Observable<AvionWrapper> {
    let jwt = this.authService.getToken();
     jwt = "Bearer "+jwt; let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
    return this.http.get<AvionWrapper>(this.apiURLAv,{headers:httpHeaders});
  }




  rechercherParAvion(idAv: number): Observable<Vol[]> {
    const url = `${apiURL}/vsav/${idAv}`;
     return this.http.get<Vol[]>(url);

  }

  rechercherParDestination(destination: string): Observable<Vol[]> {
    const url = `${apiURL}/vsByDestination/${destination}`; 
    return this.http.get<Vol[]>(url);
     }

   ajouterAvion( av: Avion):Observable<Avion>{
    return this.http.post<Avion>(this.apiURLAv, av, httpOptions);
    
    }

    uploadImage(file: File, filename: string): Observable<Image>{ 
      const imageFormData = new FormData(); imageFormData.append('image', file, filename); const url = `${apiURL + '/image/upload'}`;
       return this.http.post<Image>(url, imageFormData); 
    }
     loadImage(id: number): Observable<Image> {
       const url = `${this.apiURL + '/image/get/info'}/${id}`; 
       return this.http.get<Image>(url); 
      }


      uploadImageV(file: File, filename: string, idV:number): Observable<any>{ 
        const imageFormData = new FormData();
         imageFormData.append('image', file, filename);
          const url = `${this.apiURL + '/image/uplaodImageV'}/${idV}`;
           return this.http.post(url, imageFormData); }
}



