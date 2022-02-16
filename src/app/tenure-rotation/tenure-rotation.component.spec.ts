import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenureRotationComponent } from './tenure-rotation.component';

describe('TenureRotationComponent', () => {
  let component: TenureRotationComponent;
  let fixture: ComponentFixture<TenureRotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenureRotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenureRotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
