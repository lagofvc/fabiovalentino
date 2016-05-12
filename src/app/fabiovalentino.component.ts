import { Component } from '@angular/core';
import { TodoItem } from './todo/todo-item'

@Component({
  moduleId: module.id,
  selector: 'fabiovalentino',
  templateUrl: 'fabiovalentino.component.html',
  styleUrls: ['fabiovalentino.component.css'],
  directives: [TodoItem]
})
export class FabiovalentinoAppComponent {
  title = 'f a b i o . v a l e n t i n o';
}
