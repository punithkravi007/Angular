import { Component, OnInit } from '@angular/core';
import { HomeScreenService } from '../home-page.service';

@Component({
  selector: 'app-featured-promotion',
  templateUrl: './featured-promotion.component.html',
  styleUrls: ['./featured-promotion.component.css'],
})
export class FeaturedPromotionComponent implements OnInit {
  featured_promotions: any;
  title : string = "Superb Products";
  constructor(private homeScreenService: HomeScreenService) {}

  ngOnInit(): void {
    this.featured_promotions = this.homeScreenService.featured_promotions;
  }
}
