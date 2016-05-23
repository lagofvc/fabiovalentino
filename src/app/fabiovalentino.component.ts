import { Component } from '@angular/core';
import { TodoInput } from './todo/todo-input';
import { TodoList } from './todo/todo-list';
@Component({
  moduleId: module.id,
  selector: 'fabiovalentino',
  templateUrl: 'fabiovalentino.component.html',
  styleUrls: ['fabiovalentino.component.css'],
  directives: [TodoInput, TodoList]
})
export class FabiovalentinoAppComponent {
  title = `f a b i o  v a l e n t i n o`;
}
