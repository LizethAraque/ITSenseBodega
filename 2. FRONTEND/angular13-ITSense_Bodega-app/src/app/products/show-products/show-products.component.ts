import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsApiService } from 'src/app/products-api.service';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {

  productList$!:Observable<any[]>;
  productTypesList$!:Observable<any[]>;
  productTypesList:any=[];

  // Map to display data associate with foreign keys
  productTypesMap:Map<number, string> = new Map()

  constructor(private service:ProductsApiService) { }

  ngOnInit(): void {
    this.productList$ = this.service.getProductList();
    this.productTypesList$ = this.service.getProductTypesList();
    this.refreshProductTypesMap();
  }

  // Variables (properties)
  modalTitle:string = '';
  activateAddEditProductComponent:boolean = false;
  activateAddTypeProductComponent:boolean = false;
  activateAddSalidaProductComponent:boolean = false;
  product:any;
  productType:any;
  productSalida:any;

  modalAdd() {
    this.product = {
      id:0,
      status:null,
      stock:null,
      productTypeId:null
    }
    this.modalTitle = "Add Product";
    this.activateAddEditProductComponent = true;
  }

  modalAddProductSalida() {
    this.productSalida = {
      id:0,
      productTypeId:null,
      cantidad:null
    }
    this.modalTitle = "Add ProductSalida";
    this.activateAddTypeProductComponent = true;
  }

  modalAddProductType() {
    this.productType = {
      id:0,
      productName:null
    }
    this.modalTitle = "Add ProductType";
    this.activateAddTypeProductComponent = true;
  }

  modalEdit(item:any) {
    this.product = item;
    this.modalTitle = "Edit Product";
    this.activateAddEditProductComponent = true;
  }

  modalSalida(item:any) {
    this.productSalida = item;
    this.modalTitle = "Salida Product";
    this.activateAddSalidaProductComponent = true;
  }

  delete(item:any) {
    if(confirm(`Are you sure you want to delete product ${item.id}`)) {
      this.service.deleteProduct(item.id).subscribe(res => {
        var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showDeleteSuccess = document.getElementById('delete-success-alert');
      if(showDeleteSuccess) {
        showDeleteSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showDeleteSuccess) {
          showDeleteSuccess.style.display = "none"
        }
      }, 4000);
      this.productList$ = this.service.getProductList();
      })
    }
  }

  modalClose() {
    this.activateAddEditProductComponent = false;
    this.productList$ = this.service.getProductList();
  }

  refreshProductTypesMap() {
    this.service.getProductTypesList().subscribe(data => {
      this.productTypesList = data;

      for(let i = 0; i < data.length; i++)
      {
        this.productTypesMap.set(this.productTypesList[i].id, this.productTypesList[i].productName);
      }
    })
  }

}

