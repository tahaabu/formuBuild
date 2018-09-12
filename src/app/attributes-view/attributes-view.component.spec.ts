import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributesViewComponent } from './attributes-view.component';

describe('AttributesViewComponent', () => {
  let component: AttributesViewComponent;
  let fixture: ComponentFixture<AttributesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
