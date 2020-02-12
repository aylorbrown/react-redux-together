// Action best pracitse #2: constants
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

//  in redux, action objects have to have a type 
//  Actions best practice #1: action creator functions
export function actionIncrement() {
    return ({
        type: INCREMENT
    })
}

export function actionDecrement() {
    return ({
        type: DECREMENT
    })
}

export function actionReset() {
    return ({
        type: RESET
    })
}

