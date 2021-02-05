import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment01Component } from './assignment01.component';

describe('Assignment01Component', () => {
  let component: Assignment01Component;
  let fixture: ComponentFixture<Assignment01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assignment01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Assignment01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
