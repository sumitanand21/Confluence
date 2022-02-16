import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SowdetailsComponent } from './sowdetails.component';

describe('SowdetailsComponent', () => {
  let component: SowdetailsComponent;
  let fixture: ComponentFixture<SowdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SowdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SowdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
