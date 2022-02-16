import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTaskMoreInnerComponent } from './my-task-more-inner.component';

describe('MyTaskMoreInnerComponent', () => {
  let component: MyTaskMoreInnerComponent;
  let fixture: ComponentFixture<MyTaskMoreInnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTaskMoreInnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTaskMoreInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
