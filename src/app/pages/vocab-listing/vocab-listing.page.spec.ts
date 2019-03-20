import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabListingPage } from './vocab-listing.page';

describe('VocabListingPage', () => {
  let component: VocabListingPage;
  let fixture: ComponentFixture<VocabListingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VocabListingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VocabListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
