import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClonesearchExpandedComponent } from './clonesearch-expanded.component';

describe('ClonesearchExpandedComponent', () => {
  let component: ClonesearchExpandedComponent;
  let fixture: ComponentFixture<ClonesearchExpandedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClonesearchExpandedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClonesearchExpandedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
