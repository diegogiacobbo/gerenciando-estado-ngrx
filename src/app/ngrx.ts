import { Action } from '@ngrx/store'

enum TypeAction{
    Increment = 'Increment',
    Decrement = 'Decrement'
}

export class Decrement implements Action {
    readonly type = TypeAction.Decrement
}

export class Increment implements Action {
    readonly type = TypeAction.Increment
} 

const INITIAL_STATE = { 
    counter: 0 
}

export const reducer = (state = INITIAL_STATE, action: any) => {
    
    switch (action.type) {
        case TypeAction.Decrement:
            return { ... state, counter: state.counter - 1 }
        case TypeAction.Increment:
            return { ... state, counter: state.counter + 1 }
        default:
            return state
    }

}
