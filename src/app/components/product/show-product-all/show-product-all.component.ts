import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {CreateProductComponent} from '../create-product/create-product.component';
import {EditProductComponent} from '../edit-product/edit-product.component';
import {MatTableDataSource} from '@angular/material/table';
import {Product} from '../product';
import {MatSort} from '@angular/material/sort';
import {ProductService} from '../product.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';

@Component({
  selector: 'app-show-product-all',
  templateUrl: './show-product-all.component.html',
  styleUrls: ['./show-product-all.component.css']
})
export class ShowProductAllComponent implements OnInit {
  listData: MatTableDataSource<Product>;
  headersColumns: string [] = ['Options', 'id', 'name'];

  @ViewChild(MatSort) sort: MatSort;

  constructor(public productService: ProductService, private dialog: MatDialog,
              private snackBar: MatSnackBar,
              private route: Router) {
    this.productService.listen().subscribe(
      (m: string) => {
        this.refreshData();
      }
    );
  }

  ngOnInit(): void {
    this.refreshData();
  }

  refreshData() {
    this.productService.getAll()
      .subscribe(
        data => {
          this.listData = new MatTableDataSource<Product>(data);
          this.listData.sort = this.sort;
        }
      );
  }

  onEdit(product: Product){
    console.log(product);
    this.productService.formData = product;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '70%';
    this.dialog.open(EditProductComponent, dialogConfig);
  }

  onDelete(id: number): void{
    if (confirm('¿Are you sure to deleted?')){
      this.productService.deleteProduct(id)
        .subscribe(
          res => {
            this.refreshData();
            this.snackBar.open('A product has been removed', '', {
              duration: 4000,
              verticalPosition: 'top'
            });
          }
        );
    }
  }

  onAdd(): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '70%';
    this.dialog.open(CreateProductComponent, dialogConfig);
  }

  applyFilter(valueFilter: string){
    this.listData.filter = valueFilter.trim().toLocaleLowerCase();
  }
}
