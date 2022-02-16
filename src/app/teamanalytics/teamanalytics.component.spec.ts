import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamanalyticsComponent } from './teamanalytics.component';

describe('TeamanalyticsComponent', () => {
  let component: TeamanalyticsComponent;
  let fixture: ComponentFixture<TeamanalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamanalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamanalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
