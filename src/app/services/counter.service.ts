import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  public count: number = 0;
  public countChange = new EventEmitter();

  increment() {
    this.count++;
    this.countChange.emit({
      value: this.countChange,
    });
  }
  decrement() {
    this.count--;
    this.countChange.emit({
      value: this.countChange,
    });
  }

  constructor() {}
}
