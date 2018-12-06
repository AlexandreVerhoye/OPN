import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsLieuxPage } from './details-lieux.page';

describe('DetailsLieuxPage', () => {
  let component: DetailsLieuxPage;
  let fixture: ComponentFixture<DetailsLieuxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsLieuxPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsLieuxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
