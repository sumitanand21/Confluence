import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClonesearchComponent } from './clonesearch.component';

describe('ClonesearchComponent', () => {
  let component: ClonesearchComponent;
  let fixture: ComponentFixture<ClonesearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClonesearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClonesearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
