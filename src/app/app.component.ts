import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "./store/models/app-state.model";
import { Observable } from "rxjs";
import { ShoppingItem } from "./store/models/shopping-item.model";
import {
  AddItemAction,
  RemoveItemAction,
} from "./store/actions/shopping.action";
import { v4 as uuidv4 } from "uuid";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  shoppingItems$: Observable<Array<ShoppingItem>>;
  title = "ngrx-demo-shoppinglist";
  constructor(private store: Store<AppState>) {}
  text: string;

  ngOnInit() {
    this.shoppingItems$ = this.store.select((store) => store.shopping);
  }

  addItem() {
    this.store.dispatch(
      new AddItemAction({
        id: uuidv4(),
        name: this.text,
      })
    );
    console.log("Here");
  }

  removeItem(id: string) {
    this.store.dispatch(new RemoveItemAction(id));
  }
}
