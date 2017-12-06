/**
 * Action Types
 */

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const RESET_COUTNER = 'RESET_COUTNER';

/**
 * Action Creators
 */
export function incrementCounter(){
    return {
        type: INCREMENT_COUNTER
    }
}
export function decrementCounter(){
   return {
       type: DECREMENT_COUNTER
   }
}
export function resetCounter(){
   return {
       type: RESET_COUTNER
   }
}
