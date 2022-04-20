import { initialState } from "./constants";
import { actions } from "./actions";

const reducer = (state, action)=>{
    switch(action.type) {
        case actions.CLICK_NUMBER:
            //alert('Gu');
            if(state.currentValue === '0' && action.value != '.'){
                return{
                    ...state,
                    currentValue: `${action.value}`,
                };
            }

            if (action.value === '.' && state.pointCounter!==0){
                //ya hay un punto, no hacer nada
                return state;
            }

            if(action.value === '.'){
                return {
                    ...state,
                    currentValue: `${state.currentValue}${action.value}`,
                    pointCounter: 1, //solo puede tener un punto
                };
            }

            
            return {
            ...state,
            currentValue: `${state.currentValue}${action.value}`,
            };

        case actions.CLICK_C:
            return initialState;

        case actions.CLICK_OPERATOR:
            return{
                operator: action.value,
                previousValue: state.currentValue,
                currentValue: '0',
                pointCounter: 0,

            };

        case actions.CLICK_EQUAL:
            const current = parseFloat(state.currentValue);
            const previous = parseFloat(state.previousValue);

            switch(state.operator){
                case "+":
                    return {
                        ...initialState,
                        currentValue: previous + current,
                    };

                default:
                    return state;
            }
        
        default:
            return state;
    }
};
export {reducer, actions, initialState};