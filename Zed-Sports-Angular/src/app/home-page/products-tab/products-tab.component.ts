import { Component, OnInit } from '@angular/core';
import { HomeScreenService } from '../home-page.service';

@Component({
  selector: 'app-products-tab',
  templateUrl: './products-tab.component.html',
  styleUrls: ['./products-tab.component.css']
})
export class ProductsTabComponent implements OnInit {

  best_seller_products : any;
  new_arrival_products : any;
  featured_products : any;
  constructor(private homeScreenService: HomeScreenService) {}

  ngOnInit(): void {
    this.best_seller_products = this.homeScreenService.best_seller_products;
    this.new_arrival_products = this.homeScreenService.new_arrival_products;
    this.featured_products = this.homeScreenService.featured_products;
  }

}
