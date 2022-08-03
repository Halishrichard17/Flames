import { Component } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FLAMES';
  bname:String='';
  gname:String='';
  cancel=0;
  total: number=0;

  tbname: string="";
  tgname: string="";
  temp: number=0;
  result: string='';
  str: string="";
 
 

  cal(){
    this.total=0
    this.cancel=0
    this.tbname=this.bname.split(" ").join("").toLowerCase()
    this.tgname=this.gname.split(" ").join("").toLowerCase()
    console.log("after",this.bname,this.gname)

  
    this.total=this.tbname.length+this.tgname.length
    for ( var i = 0; i < this.tbname.length; i++) {
      for (var j = 0; j < this.tgname.length; j++) {
          if (this.tbname[i] == this.tgname[j]) {
            this.tgname=this.tgname.replace( this.tgname[j],"!")

            this.cancel=this.cancel+2 
            break;
          }

      }
  }
  
  console.log("thisword count :",this.total)
  this.total=this.total-this.cancel
  console.log("thisword count after sub :",this.total)
this.flame(this.total)

  }
 
  flame(total: number) {
    this.str="FLAMES";
    this.temp=this.total

   if(this.total!=1){
    while(this.str.length>1){
      if(this.total>this.str.length && (this.temp>1)){
        this.temp=this.total%this.str.length

        console.log("temp",this.temp)
      }
      else if(this.temp<=1 &&(this.str.length!=0) ){
        this.temp=this.str.length

      }
        
    this.result=""
    this.str = this.str.substring(this.temp, this.str.length)+ this.str.substring(0,this.temp- 1) ;
    console.log(this.flameset(this.str));
    this.flameset(this.str)

   
    }
    
  
   }else{
     this.str='S'
   }
   
  ;// document.getElementById("result").style.display = "block";

   
    
  }

  flameset(str: string) {
    switch(str) {
       case "F":
         this.result="Friend"
         break;
       case "L":
         this.result="Lover"
         break;
         case "A":
        this.result="Affection"
         break;
         case "M":
         this.result="Lover"
         break;
         case "S":
         this.result="Lover"
         break;
         case "E":
         this.result="Lover"
         break;
       default:
         // code block
     }
  }



}






