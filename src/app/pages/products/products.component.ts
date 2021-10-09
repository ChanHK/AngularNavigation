import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  Products = [
    {
      id: 'ABC123',
      name: 'Basketballs',
      description: 'Lorem ipsum.',
    },
    {
      id: 'DEF456',
      name: 'Gloves',
      description: 'Lorem ipsum.',
    },
    {
      id: 'GHI789',
      name: 'Bags',
      description: 'Lorem ipsum.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
