import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcatListingPage } from './subcat-listing.page';

describe('SubcatListingPage', () => {
  let component: SubcatListingPage;
  let fixture: ComponentFixture<SubcatListingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcatListingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcatListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
