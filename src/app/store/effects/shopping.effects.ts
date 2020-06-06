import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ShoppingService} from '../../shopping.service';
import {
  AddItemAction,
  AddItemFailureAction,
  AddItemSuccessAction,
  DeleteItemAction,
  DeleteItemFailureAction,
  DeleteItemSuccessAction,
  LoadShoppingAction,
  LoadShoppingFailureAction,
  LoadShoppingSuccessAction,
  ShoppingActionTypes
} from '../actions/shopping.action';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class ShoppingEffects {
  @Effect() loadShopping$ = this.action$.pipe(
      ofType<LoadShoppingAction>(ShoppingActionTypes.LOAD_SHOPPING),
      mergeMap(
          () => this.shoppingService.getShoppingItems().pipe(
              map(data => new LoadShoppingSuccessAction(data)),
              catchError(err => of(new LoadShoppingFailureAction(err)))
          )
      )
  );

  @Effect() addShoppingItem$ = this.action$.pipe(
      ofType<AddItemAction>(ShoppingActionTypes.ADD_ITEM),
      mergeMap(
          (data) => this.shoppingService.addShoppingItem(data.payload)
          .pipe(
              map(() => new AddItemSuccessAction(data.payload)),
              catchError(error => of(new AddItemFailureAction(error)))
          )
      )
  );

  @Effect() deleteShoppingItem$ = this.action$
  .pipe(
      ofType<DeleteItemAction>(ShoppingActionTypes.DELETE_ITEM),
      mergeMap(
          (data) => this.shoppingService.deleteShoppingItem(data.payload)
          .pipe(
              map(() => new DeleteItemSuccessAction(data.payload)),
              catchError(error => of(new DeleteItemFailureAction(error)))
          )
      )
  );


  constructor(private action$: Actions, private shoppingService: ShoppingService) {
  }


}
