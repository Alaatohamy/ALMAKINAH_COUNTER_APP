import { connect } from 'react-redux';
import Counter from '../components/Counter';
import {incrementCounter, decrementCounter, resetCounter} from '../actions/counter';

/**
function connect(mapStateToProps){
	return function(Counter){
		return <Counter count={store.counter.count} />;
	}
}
 */

 const mapStateToProps = function(state){
     return {
         count: state.counter.count,
         // propName: path.in.store
     }
 }

 const mapDispatchToProps = function(dispatch){
     return {
         increment: function(){
             dispatch(incrementCounter())
         },
         decrement: function(){
             dispatch(decrementCounter())
         },
         reset: function(){
             dispatch(resetCounter())
         }
     }
 }

// const connectComponent = connect(mapStateToProps);
// const ContainedComponent = connectComponent(Counter);
const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);
export default CounterContainer;
