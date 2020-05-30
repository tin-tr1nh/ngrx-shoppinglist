import {Action} from "@ngrx/store";
import { ShoppingItem } from '../models/shopping-item.model';

export enum ShoppingActionTypes {
  ADD_ITEM = '[SHOPPING-LIST] Add item',
  REMOVE_ITEM = "[SHOPPING-LIST] Remove item"
}

export class AddItemAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM

  constructor(public payload: ShoppingItem) {

  }
}

export class RemoveItemAction implements Action {
  readonly type = ShoppingActionTypes.REMOVE_ITEM

  constructor(public payload: string) {}
}

export type ShoppingAction = AddItemAction | RemoveItemAction
