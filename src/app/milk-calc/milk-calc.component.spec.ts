import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkCalcComponent } from './milk-calc.component';

describe('MilkCalcComponent', () => {
  let component: MilkCalcComponent;
  let fixture: ComponentFixture<MilkCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilkCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilkCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
