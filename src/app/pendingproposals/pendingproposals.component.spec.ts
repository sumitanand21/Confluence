import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingproposalsComponent } from './pendingproposals.component';

describe('PendingproposalsComponent', () => {
  let component: PendingproposalsComponent;
  let fixture: ComponentFixture<PendingproposalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingproposalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingproposalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
