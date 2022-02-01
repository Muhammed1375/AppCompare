import { Component, ElementRef, ViewChild } from '@angular/core';
import {Chart } from 'chart.js';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild('barCanvas') public barCanvas: ElementRef;
  barChart:any;
  Liste_fournisseur='';

  constructor() {}
  slidesOperations = {
    slidesPerview: 1.5
  }
  select_dropdown_value(){
    alert(this.Liste_fournisseur)
    //or

  }

  ionViewWillEnter(){
    this.barChartMethod();
  }
  barChartMethod() {
    throw new Chart(this.barCanvas.nativeElement,{
      type:'bar',
      data:{
        labels:["Apple","Samsung","Huawei","Honnor","Xiaomi","OnePlus","Realme"],
  
        datasets:[{
          barPercentage:0.5,
          barThickness:'flex',
          label:"Prix en Euro",
          stack:"Base",

          backgroundcolor:'linear-gradient(180.4deg,rgba(9,30,61,1) 45.3%, rgba(95,123,190,1) 279% )',


          borderColor:'rgb(16,86,73)',
          borderWidth:2,
          data:[150000,100000,79500,65000,40000,30000,20000,15000],
        }]
      },
      options:{
        scales:{
          yAxes:[{
            ticks:{
              beginAtZero:true
            }
          }]
        }
      }
    })
  }

  toggleTheme(event){
    if(event.detail.checked){
      document.body.setAttribute('color-theme','dark');
    }else{
      document.body.setAttribute('color-theme','light');
    }
  }
  
}
