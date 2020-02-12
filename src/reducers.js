import { 
    INCREMENT, 
    DECREMENT, 
    RESET
} from './actions';


//  our ideal/default state is just a number:
//  0 
//  -1 

// reducers are always a function and always receive state and action 
// state is your bank balance, action is your transaction slip
export function count(state=0, action) {
    let newState = state;
    switch(action.type) {
        case INCREMENT:
            newState += 1;
            break;
        case DECREMENT:
            newState -= 1;
            break;
        case RESET:
            newState = 0;
            break;
        default:
            break;
        }
        return newState;
}

