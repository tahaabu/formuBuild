import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorsViewComponent } from './operators-view.component';

describe('OperatorsViewComponent', () => {
  let component: OperatorsViewComponent;
  let fixture: ComponentFixture<OperatorsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
