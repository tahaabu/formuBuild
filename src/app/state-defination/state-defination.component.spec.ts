import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateDefinationComponent } from './state-defination.component';

describe('StateDefinationComponent', () => {
  let component: StateDefinationComponent;
  let fixture: ComponentFixture<StateDefinationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateDefinationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateDefinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
