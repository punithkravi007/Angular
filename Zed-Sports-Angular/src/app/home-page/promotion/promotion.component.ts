import { Component, OnInit } from '@angular/core';
import { HomeScreenService } from '../home-page.service';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css'],
})
export class PromotionComponent implements OnInit {
  promotions: {
    alt: string;
    url: string;
  };
  constructor(private homeScreenService: HomeScreenService) {}

  ngOnInit(): void {
    this.promotions = this.homeScreenService.promotions;
  }
}
