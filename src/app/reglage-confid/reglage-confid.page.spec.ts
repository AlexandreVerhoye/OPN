import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReglageConfidPage } from './reglage-confid.page';

describe('ReglageConfidPage', () => {
  let component: ReglageConfidPage;
  let fixture: ComponentFixture<ReglageConfidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReglageConfidPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReglageConfidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
