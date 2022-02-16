import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddManageProjectComponent } from './add-manage-project.component';

describe('AddManageProjectComponent', () => {
  let component: AddManageProjectComponent;
  let fixture: ComponentFixture<AddManageProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddManageProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddManageProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
