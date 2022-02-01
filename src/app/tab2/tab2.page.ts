import { Component } from '@angular/core';
import {PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  jasonData: any=[];
  jsonData: {name,prix}[];
  selectTabs = 'all';

  constructor(public popoverController : PopoverController, ) { 
    this.initializaJSONData();
   }
   FilterJSONData(ev:any)
   {
     this.initializaJSONData();
     const val = ev.target.value;
     if(val && val.trim() !='')
     {
       this.jsonData = this.jsonData.filter((item)=>{
         return (item.name.toLowerCase().indexOf(val.toLowerCase())>-1);
       })
     }
   }
   selectVal(val){

    alert("Telephone de Type Hight Level Iphone 13 Dernier Generation doter de 3 Camera et une Capacite dernier generation ");
   }
   
initializaJSONData()
{
  this.jsonData =[
    { 
      "name": 'iphone 13',
      "prix":'',
    }
    
  ];
  this.jsonData =[
    { 
      "name": 'iphone x',
      "prix":'',
    }
    
  ];
  this.jsonData =[
    { 
      "name": 'iphone 8plus',
      "prix":'',
    }
    
  ];
}

   //partie reserve au slide header
     slidesOptions ={
       slidesPerview: 1.5 
     }
//fin partie transition

  }

