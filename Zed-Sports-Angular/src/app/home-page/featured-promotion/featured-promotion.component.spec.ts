import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedPromotionComponent } from './featured-promotion.component';

describe('FeaturedPromotionComponent', () => {
  let component: FeaturedPromotionComponent;
  let fixture: ComponentFixture<FeaturedPromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedPromotionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
