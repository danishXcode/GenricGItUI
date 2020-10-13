import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFundDialogueComponent } from './add-fund-dialogue.component';

describe('AddFundDialogueComponent', () => {
  let component: AddFundDialogueComponent;
  let fixture: ComponentFixture<AddFundDialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFundDialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFundDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
