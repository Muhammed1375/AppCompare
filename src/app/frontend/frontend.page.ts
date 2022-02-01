import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.page.html',
  styleUrls: ['./frontend.page.scss'],
})
export class FrontendPage implements OnInit {
  nom:any;
  type_de_produit:any;
  prix:any;
  model:any;
  marque:any;

  constructor(
    public _apiService : ApiService
  ) { }

  addarticles(){
    let data = {
      nom:this.nom,
      type_de_produit:this.type_de_produit,
      prix:this.prix,
      model:this.model,
      marque:this.marque,

    }
    this._apiService.addarticles(data).subscribe((res:any) =>{
      console.log("SUCCESS ==",res);
          this.nom='';
          this.type_de_produit='';
          this.prix='';
          this.model='';
          this.marque='';
          alert('Produit ajouter avec success')
    },(error:any)=>{
      console.log("ERROR ===",error);
    })
  }

  ngOnInit() {
  }

}
/*
 console.log(this.nom,this.type_de_produit,this.prix,this.model,this.marque)
 */
