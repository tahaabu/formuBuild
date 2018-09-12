import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VariableService {
  variable={
    list:[
      "Customer",
      "Age of Vehicle",
      "Vehicle Registration Type",
      "company age",
      "loading capacity liquid(in gallons)",
      "est",
      "lorium",
      "psedo",
      "kamekaze",
      "roronoa",
      "est",
      "lorium",
      "psedo",
      "kamekaze",
      "roronoa",
      "est",
      "lorium",
      "psedo",
      "kamekaze",
      "roronoa"
    ]
  }
  constructor() { }

  get getList(){
    let array=[];
    for(let i of this.variable.list){
      array.push(i)
    }
    return array;
  }
}
