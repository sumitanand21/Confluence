import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMyDemandsExpandedComponent } from './all-my-demands-expanded.component';

describe('AllMyDemandsExpandedComponent', () => {
  let component: AllMyDemandsExpandedComponent;
  let fixture: ComponentFixture<AllMyDemandsExpandedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllMyDemandsExpandedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMyDemandsExpandedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
