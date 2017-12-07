import { GET_TODOS_LOADING, GET_TODOS_SUCCESS, GET_TODOS_FAILURE } from '../actions/todos';

const INITIAL_STATE = {
    items: [],
    loading: false,
    error: null
}

export default function(currentState = INITIAL_STATE, action){
    switch (action.type) {
        case GET_TODOS_LOADING:
            return {
                ...currentState,
                loading: true
            }
            break;
        case GET_TODOS_SUCCESS:
            return {
                items: action.data,
                loading: false,
                error: null
            }
        break;
        case GET_TODOS_FAILURE:
            return {
                ...currentState,
                error: action.error,
                loading: false
            }
        break;
        default:
            return currentState;
    }
}
