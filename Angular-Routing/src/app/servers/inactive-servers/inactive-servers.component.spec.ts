import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactiveServersComponent } from './inactive-servers.component';

describe('InactiveServersComponent', () => {
  let component: InactiveServersComponent;
  let fixture: ComponentFixture<InactiveServersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InactiveServersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InactiveServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
