import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ConnectionService } from '../utils/connection.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private connectionService: ConnectionService, private router: Router) {
    this.hello();
  }

  title = 'Products';
  emptyStore = '';

  products: any = [];

  goToSecond() {
    this.router.navigate(['/second', 'PRF', {message: this.title}]);
  }

  hello() {
    this.connectionService.getProducts().subscribe((data) => {
      this.products = JSON.parse(data);
    }, error => {
      console.log('Sorry we encountered an error: ', error);
    });
  }

  decreaseAmount(product: any) {
    if (product.amount >= 1) {
      product.amount -= 1;
      console.log(product)
      this.connectionService.updateProduct(product).subscribe(response => { 
        console.log(response);
      });
    } else {
      this.emptyStore = "There is no more " + product.title + " in the store!";
    }


  }

  ngOnInit(): void {
  }

}
