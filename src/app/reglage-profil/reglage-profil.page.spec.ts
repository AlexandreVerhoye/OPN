import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReglageProfilPage } from './reglage-profil.page';

describe('ReglageProfilPage', () => {
  let component: ReglageProfilPage;
  let fixture: ComponentFixture<ReglageProfilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReglageProfilPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReglageProfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
