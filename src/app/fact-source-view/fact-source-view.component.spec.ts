import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactSourceViewComponent } from './fact-source-view.component';

describe('FactSourceViewComponent', () => {
  let component: FactSourceViewComponent;
  let fixture: ComponentFixture<FactSourceViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactSourceViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactSourceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
