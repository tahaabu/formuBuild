import { NgModule } from '@angular/core';
import { MatButtonModule,MatIconModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FormulaBuilderComponent } from './formula-builder/formula-builder.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { OperatorsViewComponent } from './operators-view/operators-view.component';
import { AttributesViewComponent } from './attributes-view/attributes-view.component';
import { FactSourceViewComponent } from './fact-source-view/fact-source-view.component';
import { SelectSourceComponent } from './select-source/select-source.component';
import { StateDefinationComponent } from './state-defination/state-defination.component';
import { FormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    AppComponent,
    FormulaBuilderComponent,
    HomeScreenComponent,
    OperatorsViewComponent,
    AttributesViewComponent,
    FactSourceViewComponent,
    SelectSourceComponent,
    StateDefinationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[
    FormulaBuilderComponent
  ],

})
export class AppModule { }
