import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Decrement, Increment } from '../ngrx';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  public counter$: Observable<any>;

  constructor(private store: Store<{ counterReducer: number }>) {
    this.counter$ = new Observable<any>()
  }

  ngOnInit(): void {
    this.counter$ = this.store.pipe(
      select('counterReducer')
    )
  }

  decrement() {
    this.store.dispatch(
      new Decrement
    )
  }

  increment() {
    this.store.dispatch(
      new Increment
    )
  }
}
