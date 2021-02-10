import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesInfoComponent } from './recipes-info.component';

describe('RecipesInfoComponent', () => {
  let component: RecipesInfoComponent;
  let fixture: ComponentFixture<RecipesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipesInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
