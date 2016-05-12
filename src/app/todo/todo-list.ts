/**
 * Created by valentino on 5/11/16.
 */
import { Component } from "@angular/core";
import {TodoService} from "./todo-service";

@Component({
  selector: 'todo-list',
  template: `
    <div>
      <ul>
        <li *ngFor="#todo of todoService.todos">
          {{todo}}
        </li>
      </ul>
    </div>
  `
})

export class TodoList{
  constructor(public todoService:TodoService){

  }
}
