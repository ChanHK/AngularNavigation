import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productID: string;

  constructor(private actRoute: ActivatedRoute) {
    this.productID = this.actRoute.snapshot.params.id;
  }

  ngOnInit(): void {}
}
