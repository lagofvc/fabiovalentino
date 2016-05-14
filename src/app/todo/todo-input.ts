/**
 * Created by lago on 5/11/16.
 */
import { Component } from "@angular/core";
import { TodoService} from "./todo-service";

@Component({
  selector: 'todo-input',
  template: `
    <div align="center">
    <form (submit)="onSubmit()">
      <input type="text" [(ngModel)]="todoModel">
    </form>
    </div>
  `
})

export class TodoInput{
  todoModel;
  constructor(public todoService: TodoService){

  }

  onSubmit(){
    this.todoService.todos.push(this.todoModel);
    console.log(this.todoService.todos);
    this.todoModel = "";
  }

}
