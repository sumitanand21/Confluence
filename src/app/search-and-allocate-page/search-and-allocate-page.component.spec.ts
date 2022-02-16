import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAndAllocatePageComponent } from './search-and-allocate-page.component';

describe('SearchAndAllocatePageComponent', () => {
  let component: SearchAndAllocatePageComponent;
  let fixture: ComponentFixture<SearchAndAllocatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAndAllocatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAndAllocatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
