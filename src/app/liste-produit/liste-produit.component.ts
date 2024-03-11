import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
interface Product {
  name: string;
  reference: string;
  family: string;
}

@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.css']
})
export class ProductListComponent {
  products: Product[] = [];
  newProduct: Product = { name: '', reference: '', family: '' };
  editIndex: number | null = null;

 /* addProduct() {
    this.products.push({ ...this.newProduct });
    this.clearNewProduct();
  }

  editProduct(index: number) {
    this.editIndex = index;
    this.newProduct = { ...this.products[index] };
  }

  updateProduct() {
    if (this.editIndex !== null) {
      this.products[this.editIndex] = { ...this.newProduct };
      this.clearNewProduct();
      this.editIndex = null;
    }
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
  }

  private clearNewProduct() {
    this.newProduct = { name: '', reference: '', family: '' };
  }*/
}
