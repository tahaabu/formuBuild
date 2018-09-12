import { Component, OnInit } from '@angular/core';
import { OperatorService } from '../operator.service';
import { ElementService } from '../element.service';

@Component({
  selector: 'operators-view',
  templateUrl: './operators-view.component.html',
  styleUrls: ['./operators-view.component.scss']
})
export class OperatorsViewComponent implements OnInit {
  basicOperatorArray;
  logicalOperatorArray;
 
  constructor( 
    private operatorService:OperatorService,
    private addElement:ElementService
    ) {
    this.basicOperatorArray = operatorService.getBasic;
    this.logicalOperatorArray = operatorService.getLogical;
   }

  ngOnInit() {
  }

  addOperator(operator){

    this.addElement.setElement(operator);
  }
}
