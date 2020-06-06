import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ShoppingItem} from './store/models/shopping-item.model';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  SHOPPING_URL = 'http://locahost:3000';

  constructor(private http: HttpClient) {
  }

  getShoppingItem(id: string) {
    return this.http.get(this.SHOPPING_URL + `/shopping/${id}`).pipe(
        delay(300)
    );
  }

  addShoppingItem(item: ShoppingItem) {
    this.http.post(`${this.SHOPPING_URL}/shopping`, item).pipe(
        delay(300)
    );
  }

  deleteShoppingItem(id: string) {
    this.http.delete(`${this.SHOPPING_URL}/shopping/${id}`).pipe(
        delay(300)
    );
  }
}
