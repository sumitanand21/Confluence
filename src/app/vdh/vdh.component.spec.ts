import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VdhComponent } from './vdh.component';

describe('VdhComponent', () => {
  let component: VdhComponent;
  let fixture: ComponentFixture<VdhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VdhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VdhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
