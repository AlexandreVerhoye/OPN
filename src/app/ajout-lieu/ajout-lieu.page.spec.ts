import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutLieuPage } from './ajout-lieu.page';

describe('AjoutLieuPage', () => {
  let component: AjoutLieuPage;
  let fixture: ComponentFixture<AjoutLieuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutLieuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutLieuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
