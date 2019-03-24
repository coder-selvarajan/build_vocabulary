import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabViewPage } from './vocab-view.page';

describe('VocabViewPage', () => {
  let component: VocabViewPage;
  let fixture: ComponentFixture<VocabViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VocabViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VocabViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
