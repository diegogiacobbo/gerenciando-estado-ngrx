import { createAction, createReducer, on, props } from '@ngrx/store'

enum TypeAction{
    Increment = 'Increment',
    Decrement = 'Decrement'
}

export const decrement = createAction(
    TypeAction.Decrement,
    props<{payload: number}>()
)

export const increment = createAction(
    TypeAction.Increment,
    props<{payload: number}>()
)

const INITIAL_STATE = { 
    counter: 0 
}

export const reducer = createReducer(
    INITIAL_STATE,
    on(increment, (state, { payload }) => ({
        ...state,
        counter: state.counter + payload
    })),
    on(decrement,  (state, { payload }) => ({
        ...state,
        counter: state.counter - payload
    }))
)