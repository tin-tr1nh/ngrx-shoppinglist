import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from './store/models/app-state.model';
import {Observable} from 'rxjs';
import {ShoppingItem} from './store/models/shopping-item.model';
import {AddItemAction, DeleteItemAction, LoadShoppingAction} from './store/actions/shopping.action';
import {v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  shoppingItems$: Observable<Array<ShoppingItem>>;
  loading$: Observable<boolean>;
  error$: Observable<Error>;

  title = 'ngrx-demo-shoppinglist';
  itemName: string;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.dispatch(new LoadShoppingAction());
    this.shoppingItems$ = this.store.select((store) => store.shoppingListState.list);
    this.loading$ = this.store.select(store => store.shoppingListState.loading);
    this.error$ = this.store.select(store => store.shoppingListState.error);
  }

  addItem() {
    this.store.dispatch(
        new AddItemAction({
          id: uuidv4(),
          name: this.itemName,
        })
    );
    console.log('Here');
  }

  removeItem(id: string) {
    this.store.dispatch(new DeleteItemAction(id));
  }
}
