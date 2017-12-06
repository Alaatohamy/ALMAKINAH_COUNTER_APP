import {INCREMENT_COUNTER, DECREMENT_COUNTER, RESET_COUTNER} from '../actions/counter';

const INITIAL_STATE = {
    count: 0
}

/**
{
    type: INCREMENT_COUNTER
}
 */

export default function(currentState = INITIAL_STATE, action){
    switch (action.type) {
        case INCREMENT_COUNTER:
            return {count: currentState.count+1}
            break;
        case DECREMENT_COUNTER:
            return {count: currentState.count-1}
            break;
        case RESET_COUTNER:
            return INITIAL_STATE
            break;
        default:
            return currentState;
    }
}
