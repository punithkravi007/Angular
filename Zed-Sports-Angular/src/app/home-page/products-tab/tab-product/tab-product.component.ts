import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-product',
  templateUrl: './tab-product.component.html',
  styleUrls: ['./tab-product.component.css'],
})
export class TabProductComponent implements OnInit {
  @Input('product') product: any;
  constructor() {}

  ngOnInit(): void {}
}
