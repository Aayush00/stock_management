import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FilterProduct, ProductList } from '../../model/Logic';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-modal',
  standalone : true,
  imports: [CommonModule, RouterModule,FormsModule],
  templateUrl: './product-modal.component.html',
  styleUrl: './product-modal.component.css'
})
export class ProductModalComponent {
  isModalOpen = true;
  products: ProductList[] = [];
  filteredProducts: ProductList[] = []; // Fixed incorrect type
  searchQuery: string = '';

  constructor(private router: Router) {} // Fixed constructor

  ngOnInit() {
    this.fetchProducts(); // Fetch products on load
  }

  fetchProducts() {
    this.products = [
      { productId: 1, productName: 'Product A', price: 100, quantity: 10, description: 'High-quality product A' },
      { productId: 2, productName: 'Product B', price: 150, quantity: 5, description: 'Reliable product B' },
      { productId: 3, productName: 'Poduct 3', price: 200, quantity: 8, description: 'Affordable product C' }
    ];
    this.filteredProducts = [...this.products];
  }

  searchProducts() {
    this.filteredProducts = this.products.filter(product =>
      product.productName.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  clearSearch() {
    this.searchQuery = '';
    this.filteredProducts = [...this.products]; // Reset product list
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
