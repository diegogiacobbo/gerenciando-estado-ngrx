import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment } from '../ngrx';

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

  //Here... I would get the return statement from services
  decrement() {
    this.store.dispatch(
      decrement(
        {
          payload: 3
        }
      )
    )
  }

  //Here... I would get the return statement from services 
  increment() {
    this.store.dispatch(
      increment(
        {
          payload: 3
        }
      )
    )
  }
}
