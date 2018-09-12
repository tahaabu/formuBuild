import { Component, OnInit } from '@angular/core';
import { VariableService } from '../variable-service.service';
import { ElementService } from '../element.service';

@Component({
  selector: 'fact-source-view',
  templateUrl: './fact-source-view.component.html',
  styleUrls: ['./fact-source-view.component.scss']
})
export class FactSourceViewComponent implements OnInit {

  list;
  constructor(
    private variableService:VariableService,
    private addElement:ElementService
    ) { }

  ngOnInit() {
    this.list = this.variableService.getList;
  }

  addVariable(variable){
    variable+=" ";
    this.addElement.setElement(variable);
  }
}
