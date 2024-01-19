import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  products: any;

  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit(): void {
    this.showAllProducts();
  }

  showAllProducts(): void {
    this.httpService.getAllProducts().subscribe((data: any) => {
      this.products = data.products;
    });
  }

  showProductById(id: number): void {
    this.router.navigate(['/products', id]);
  }
}
