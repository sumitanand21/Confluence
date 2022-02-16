import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SowViewSavedProfileComponent } from './sow-view-saved-profile.component';

describe('SowViewSavedProfileComponent', () => {
  let component: SowViewSavedProfileComponent;
  let fixture: ComponentFixture<SowViewSavedProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SowViewSavedProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SowViewSavedProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
