import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { FabiovalentinoAppComponent } from '../app/fabiovalentino.component';

beforeEachProviders(() => [FabiovalentinoAppComponent]);

describe('App: Fabiovalentino', () => {
  it('should create the app',
      inject([FabiovalentinoAppComponent], (app: FabiovalentinoAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'fabiovalentino works!\'',
      inject([FabiovalentinoAppComponent], (app: FabiovalentinoAppComponent) => {
    expect(app.title).toEqual('fabiovalentino works!');
  }));
});
