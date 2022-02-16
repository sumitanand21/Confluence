import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllmydemandsComponent } from './allmydemands.component';

describe('AllmydemandsComponent', () => {
  let component: AllmydemandsComponent;
  let fixture: ComponentFixture<AllmydemandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllmydemandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllmydemandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
