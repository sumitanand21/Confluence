import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectSearchComponent } from './direct-search.component';

describe('DirectSearchComponent', () => {
  let component: DirectSearchComponent;
  let fixture: ComponentFixture<DirectSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
