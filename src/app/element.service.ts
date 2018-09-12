import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElementService {
  operator;
  operator$ = new Subject<string>();
  formula$ = new Subject<string[]>();

  constructor() { }

  setElement(operator){
    this.operator$.next(operator);   
  }
  setFormula(formula:string[]){
    this.formula$.next(formula);
  }
  // get getOperator(){
  //   if(this.operator){
  //     return this.operator
  //   }
  //   return null;
  // }

}
