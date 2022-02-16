import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceedToAllocateComponent } from './proceed-to-allocate.component';

describe('ProceedToAllocateComponent', () => {
  let component: ProceedToAllocateComponent;
  let fixture: ComponentFixture<ProceedToAllocateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProceedToAllocateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProceedToAllocateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
