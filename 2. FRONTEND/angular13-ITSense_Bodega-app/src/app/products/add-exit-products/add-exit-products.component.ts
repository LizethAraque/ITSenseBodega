import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsApiService } from 'src/app/products-api.service';

@Component({
  selector: 'app-add-exit-products',
  templateUrl: './add-exit-products.component.html',
  styleUrls: ['./add-exit-products.component.css']
})
export class AddExitProductsComponent implements OnInit {

  productList$!: Observable<any[]>;
  statusList$!: Observable<any[]>;
  productTypesList$!: Observable<any[]>;
  productSalidaList$!: Observable<any[]>;

  constructor(private service:ProductsApiService) { }

  @Input() productSalida:any;
  id: number = 0;
  status: string = "";
  cantidad!: number;
  productTypeId!: number;

  ngOnInit(): void {
    this.id = this.productSalida.id;
    this.cantidad = this.productSalida.cantidad;
    this.productTypeId = this.productSalida.productTypeId;
    this.statusList$ = this.service.getStatusList();
    this.productList$ = this.service.getProductList();
    this.productTypesList$ = this.service.getProductTypesList();
    this.productSalidaList$ = this.service.getProductSalidaList();
  }

  addProduct() {
    var productSalida = {
      cantidad:this.cantidad,
      productTypeId:this.productTypeId
    }
    this.service.addProductSalida(productSalida).subscribe(res => {
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
    var productSalida = {
      id: this.id,
      cantidad:this.cantidad,
      productTypeId:this.productTypeId
    }
    var id:number = this.id;
    this.service.updateProductSalida(id,productSalida).subscribe(res => {
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
