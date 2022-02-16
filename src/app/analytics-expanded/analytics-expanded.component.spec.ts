import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsExpandedComponent } from './analytics-expanded.component';

describe('AnalyticsExpandedComponent', () => {
  let component: AnalyticsExpandedComponent;
  let fixture: ComponentFixture<AnalyticsExpandedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticsExpandedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsExpandedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
