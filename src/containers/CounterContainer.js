import {
    connect
} from 'react-redux';

import { Counter } from '../components.Counter';
import { actionDecrement, actionIncrement, actionReset } from '../actions';

// Describe how to translate redux state into react props 
function mapStateToProps(state) {
    return {
        // left:prop name right: how to locate desired value from redux state
        count: state.count
    }
}

// Describe how to translate redux dispatch into react props 
function mapDispatchToProps(dispatch) {
    return {
        handleIncrement: () => {
            dispatch(actionIncrement())
        },
        handleDecrement: () => {
            dispatch(actionDecrement())
        }, 
        handleReset: () => {
            dispatch(actionReset())
        }
    }
}