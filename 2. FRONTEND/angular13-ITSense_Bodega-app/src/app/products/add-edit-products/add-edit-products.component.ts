import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsApiService } from 'src/app/products-api.service';

@Component({
  selector: 'app-add-edit-products',
  templateUrl: './add-edit-products.component.html',
  styleUrls: ['./add-edit-products.component.css']
})
export class AddEditProductsComponent implements OnInit {

  productList$!: Observable<any[]>;
  statusList$!: Observable<any[]>;
  productTypesList$!: Observable<any[]>;

  constructor(private service:ProductsApiService) { }

  @Input() product:any;
  id: number = 0;
  status: string = "";
  stock!: number;
  productTypeId!: number;

  ngOnInit(): void {
    this.id = this.product.id;
    this.status = this.product.status;
    this.stock = this.product.stock;
    this.productTypeId = this.product.productTypeId;
    this.statusList$ = this.service.getStatusList();
    this.productList$ = this.service.getProductList();
    this.productTypesList$ = this.service.getProductTypesList();
  }

  addProduct() {
    var product = {
      status:this.status,
      stock:this.stock,
      productTypeId:this.productTypeId
    }
    this.service.addProduct(product).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showAddSuccess = document.getElementById('add-success-alert');
      if(showAddSuccess) {
        showAddSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showAddSuccess) {
          showAddSuccess.style.display = "none"
        }
      }, 4000);
    })
  }
  updateProduct() {
    var product = {
      id: this.id,
      status:this.status,
      stock:this.stock,
      productTypeId:this.productTypeId
    }
    var id:number = this.id;
    this.service.updateProduct(id,product).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showUpdateSuccess = document.getElementById('update-success-alert');
      if(showUpdateSuccess) {
        showUpdateSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showUpdateSuccess) {
          showUpdateSuccess.style.display = "none"
        }
      }, 4000);
    })

  }

}
