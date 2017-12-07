import Axios from 'axios';
/**
 * Action Types
 */
export const GET_TODOS_LOADING = 'GET_TODOS_LOADING';
export const GET_TODOS = 'GET_TODOS';
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
export const GET_TODOS_FAILURE = 'GET_TODOS_FAILURE';


/**
 * Action Creators
 */
export function getTodosLoading(){
    return {
        type: GET_TODOS_LOADING
    }
}
export function getTodos(){
    return {
        type: GET_TODOS,
        payload: Axios.get('http://localhost:3001/todos')
    }
}
export function getTodosSuccess(response){
    return {
        type: GET_TODOS_SUCCESS,
        data: response.payload.data
    }
}
export function getTodosFailure(error){
    return {
        type: GET_TODOS_FAILURE,
        error
    }
}
