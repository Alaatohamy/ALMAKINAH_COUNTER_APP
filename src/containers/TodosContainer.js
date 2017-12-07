import {getTodosLoading, getTodos, getTodosSuccess, getTodosFailure } from '../actions/todos';
import {connect} from 'react-redux';
import Todos from '../components/Todos';

const mapStateToProps = function(state){
    return {
        todos: state.todos.items,
        loading: state.todos.loading
    }
}

const mapDispatchToProps = function(dispatch){
    return {
        getTodos: function(){
            dispatch(getTodosLoading());
            dispatch(getTodos()).then(function(response){
                dispatch(getTodosSuccess(response))
            })
            .catch(function(error){
                dispatch(getTodosFailure(error))
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);

// {
//     counter: ...,
//     todos: {
//         items: [],
//         loading: false
//     }
// }
