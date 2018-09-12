import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OperatorService {
  operators={
    "basicOperators" : [
      "(",
      "==",
      "=",
      ")",
      "%",
      "<",
      ">",
      ">=",
      "<=",
      "+",
      "-",
      "/",
      "*"
    ],
    "logicOperators":[
      "time",
      "date",
      "num",
      "avg",
      ".",
      "sum",
      "||",
      "&&"
    ]
  }

  constructor() { }

  get getBasic(){
    let array=[]
    for(let i of this.operators.basicOperators){
      array.push(i);
    }
    return array;
  }
  get getLogical(){
    let array=[]
    for(let i of this.operators.logicOperators){
      array.push(i);
    }
    return array;
  }


}
