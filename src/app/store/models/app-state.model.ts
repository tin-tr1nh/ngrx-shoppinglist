import { ShoppingItem } from './shopping-item.model';

// Where we keep all the State
export interface AppState {
  readonly shopping: Array<ShoppingItem>
};
