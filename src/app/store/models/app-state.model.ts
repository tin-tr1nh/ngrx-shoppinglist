import {ShoppingItem} from './shopping-item.model';

// Where we keep all the State
export interface AppState {
  readonly shoppingList: Array<ShoppingItem>;
}
