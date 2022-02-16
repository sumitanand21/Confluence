import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTaskMoreComponent } from './my-task-more.component';

describe('MyTaskMoreComponent', () => {
  let component: MyTaskMoreComponent;
  let fixture: ComponentFixture<MyTaskMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTaskMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTaskMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
