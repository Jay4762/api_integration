import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  productById: any;
  productId: number = 1;

  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit(): void {
    this.fetchProductById(this.productId);
  }

  fetchProductById(id: number): void {
    this.httpService.getProductById(id).subscribe((data: any) => {
      this.productById = data;
    });
  }

  navigateToAllProducts(): void {
    this.router.navigate(['/products']);
  }
}
