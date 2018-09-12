import { Component, OnInit } from '@angular/core';
import { ElementService } from '../element.service';

@Component({
  selector: 'state-defination',
  templateUrl: './state-defination.component.html',
  styleUrls: ['./state-defination.component.scss']
})
export class StateDefinationComponent implements OnInit {
  formula = "";
  elementsArray = [];

  constructor(private elementService: ElementService) { }

  ngOnInit() {
    this.elementService.operator$.subscribe(data => {
      this.formula += data;
      this.formulaToElementsArray();
    })
    this.elementService.formula$.subscribe((data:string[])=>{
      if(data){
        this.formula = "";
        for(let i of data){
          this.formula += i +" ";
        }
      }
    })
  }
  clearAll() {
    if (this.formula)
      if (window.confirm("Are you Sure?")) {
        this.formula = "";
        this.formulaToElementsArray();
      }
  }
  deleteElement(index){
    this.elementsArray.splice(index,1);
    this.elementService.setFormula(this.elementsArray);

  }

  formulaToElementsArray() {
    this.elementsArray.splice(0);
    let splits = this.formula.split(/(&&){1}|(>=){1}|(<=){1}|(\|\|){1}|(==){1}|([(+/)\->*<=%])/);
    splits = splits.filter(function (element) {
      if (element !== undefined)
        return element;
      else if (element !== '')
        return element;
    });
    for (let s of splits) {
      this.elementsArray.push(s);
    }
  }


}
