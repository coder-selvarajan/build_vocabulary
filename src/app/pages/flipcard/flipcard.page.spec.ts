import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipcardPage } from './flipcard.page';

describe('FlipcardPage', () => {
  let component: FlipcardPage;
  let fixture: ComponentFixture<FlipcardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlipcardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipcardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
