/**
 * Created by lago on 5/11/16.
 */
import { Component } from "@angular/core";

@Component({
  selector: 'todo-item',
  template: `
    <div align="center">
      <input style="text" #myInput/>
      <button (click)="onClick(myInput.value)">Click me</button>
    </div>
  `
})

export class TodoItem{
  onClick(value){
    console.log('clicked! and got value: ' + value);
  }

}
