import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetexpressionsPage } from './getexpressions.page';

describe('GetexpressionsPage', () => {
  let component: GetexpressionsPage;
  let fixture: ComponentFixture<GetexpressionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetexpressionsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetexpressionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
