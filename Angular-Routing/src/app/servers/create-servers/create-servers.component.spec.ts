import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateServersComponent } from './create-servers.component';

describe('CreateServersComponent', () => {
  let component: CreateServersComponent;
  let fixture: ComponentFixture<CreateServersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateServersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
