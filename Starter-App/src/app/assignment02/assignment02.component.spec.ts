import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment02Component } from './assignment02.component';

describe('Assignment02Component', () => {
  let component: Assignment02Component;
  let fixture: ComponentFixture<Assignment02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assignment02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Assignment02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
