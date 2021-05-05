import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeScreenService {
  promotions: any = [
    {
      alt: 'promotion banner-01',
      url: '../../assets/images/promo-banner1.jpg',
    },
    {
      alt: 'promotion banner-02',
      url: '../../assets/images/promo-banner2.jpg',
    },
    {
      alt: 'promotion banner-03',
      url: '../../assets/images/promo-banner3.jpg',
    },
  ];

  featured_promotions: any = [
    {
      title: 'HRX by Hrithik Roshan',
      image: '../../assets/images/products/mens/Tshirt-0-1.jpg',
      productName: 'HRX by Hrithik Roshan',
      productPrice: 'Rs.359',
    },
    {
      title: 'HERE&NOW',
      image: '../../assets/images/products/mens/Jeans-0-1.webp',
      productName:
        'Men Blue Skinny Fit Mid-Rise Clean Look Stretchable Cropped Jeans',
      productPrice: 'Rs.1299',
    },
    {
      title: 'ALDO',
      image: '../../assets/images/products/mens/shoes-0-1.webp',
      productName: 'Men Camel Brown Textured Leather Loafers',
      productPrice: 'Rs.6499',
    },
    {
      title: 'Libas',
      image: '../../assets/images/products/womens/Dupatta-0-1.webp',
      productName: 'Women Green Solid Kurta with Trousers & Dupatta',
      productPrice: 'Rs.1499',
    },
    {
      title: 'Portico New York',
      image: '../../assets/images/products/Home/bedding-0-1.jpg',
      productName:
        'Peach-Coloured & Off-White Printed AC Room 120GSM Double King Bedding Set',
      productPrice: 'Rs.5499',
    },
  ];

  best_seller_products: any = [
    {
      title: 'Biba',
      image: '../../assets/images/products/Best Seller/Best-seller-01.webp',
      productName:
        'Women Beige & Mustard Yellow Printed Anarkali Kurta with Churidar and Dupatta',
      productPrice: 'Rs.1299',
    },
    {
      title: 'YK',
      image: '../../assets/images/products/Best Seller/Best-seller-02.webp',
      productName: 'Boys White & Coral Orange Cotton Striped T-shirt with Shorts & Detachable Suspenders',
      productPrice: 'Rs.879',
    },
    {
      title: 'House of Pataudi',
      image: '../../assets/images/products/Best Seller/Best-seller-03.jpg',
      productName: 'Men White Yoke Design Straight Kurta',
      productPrice: 'Rs.1499',
    },
    {
      title: 'Portico New York',
      image: '../../assets/images/products/Home/bedding-0-1.jpg',
      productName:
        'Peach-Coloured & Off-White Printed AC Room 120GSM Double King Bedding Set',
      productPrice: 'Rs.5499',
    },
  ];

  featured_products: any = [
    {
      title: 'HERE&NOW',
      image: '../../assets/images/products/mens/Jeans-0-1.webp',
      productName:
        'Men Blue Skinny Fit Mid-Rise Clean Look Stretchable Cropped Jeans',
      productPrice: 'Rs.1299',
    },
    {
      title: 'ALDO',
      image: '../../assets/images/products/mens/shoes-0-1.webp',
      productName: 'Men Camel Brown Textured Leather Loafers',
      productPrice: 'Rs.6499',
    },
    {
      title: 'Libas',
      image: '../../assets/images/products/womens/Dupatta-0-1.webp',
      productName: 'Women Green Solid Kurta with Trousers & Dupatta',
      productPrice: 'Rs.1499',
    },
    {
      title: 'Portico New York',
      image: '../../assets/images/products/Home/bedding-0-1.jpg',
      productName:
        'Peach-Coloured & Off-White Printed AC Room 120GSM Double King Bedding Set',
      productPrice: 'Rs.5499',
    },
  ];

  new_arrival_products: any = [
    {
      title: 'HERE&NOW',
      image: '../../assets/images/products/mens/Jeans-0-1.webp',
      productName:
        'Men Blue Skinny Fit Mid-Rise Clean Look Stretchable Cropped Jeans',
      productPrice: 'Rs.1299',
    },
    {
      title: 'ALDO',
      image: '../../assets/images/products/mens/shoes-0-1.webp',
      productName: 'Men Camel Brown Textured Leather Loafers',
      productPrice: 'Rs.6499',
    },
    {
      title: 'Libas',
      image: '../../assets/images/products/womens/Dupatta-0-1.webp',
      productName: 'Women Green Solid Kurta with Trousers & Dupatta',
      productPrice: 'Rs.1499',
    },
    {
      title: 'Portico New York',
      image: '../../assets/images/products/Home/bedding-0-1.jpg',
      productName:
        'Peach-Coloured & Off-White Printed AC Room 120GSM Double King Bedding Set',
      productPrice: 'Rs.5499',
    },
  ];
}
