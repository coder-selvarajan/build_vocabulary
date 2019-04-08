import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandompickPage } from './randompick.page';

describe('RandompickPage', () => {
  let component: RandompickPage;
  let fixture: ComponentFixture<RandompickPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandompickPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandompickPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
