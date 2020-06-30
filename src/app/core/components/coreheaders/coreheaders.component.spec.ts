import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreheadersComponent } from './coreheaders.component';

describe('CoreheadersComponent', () => {
  let component: CoreheadersComponent;
  let fixture: ComponentFixture<CoreheadersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreheadersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreheadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
