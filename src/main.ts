import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { FabiovalentinoAppComponent, environment } from './app/';
import { TodoService } from './app/todo/todo-service';

if (environment.production) {
  enableProdMode();
}

bootstrap(FabiovalentinoAppComponent, [TodoService]);
