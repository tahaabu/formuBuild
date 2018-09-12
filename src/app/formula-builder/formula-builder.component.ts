import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-formula-builder',
  templateUrl: './formula-builder.component.html',
  styleUrls: ['./formula-builder.component.scss']
})
export class FormulaBuilderComponent implements OnInit {

  operator_toggler:boolean = true;

  constructor( public dialogRef: MatDialogRef<FormulaBuilderComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
