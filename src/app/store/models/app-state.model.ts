import {ShoppingListState} from '../reducers/shoppingListStateReducer';

// Where we keep all the State
export interface AppState {
  readonly shoppingListState: ShoppingListState;
}
