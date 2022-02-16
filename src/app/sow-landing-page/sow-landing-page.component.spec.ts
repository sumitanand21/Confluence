import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SowLandingPageComponent } from './sow-landing-page.component';

describe('SowLandingPageComponent', () => {
  let component: SowLandingPageComponent;
  let fixture: ComponentFixture<SowLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SowLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SowLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
