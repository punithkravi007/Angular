import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveServersComponent } from './active-servers.component';

describe('ActiveServersComponent', () => {
  let component: ActiveServersComponent;
  let fixture: ComponentFixture<ActiveServersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveServersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
