import {SET_VAR_LEAD} from '../actions/managerLeadAction'
import _ from 'lodash'
const defaultState= {
    dataFilter: null
};

const leadReducer = (state = defaultState, action) =>  {
    switch (action.type) {
        case SET_VAR_LEAD:
            return {
                ...state,
                [action.key]: action.value
            }
        default:
            return state;
    }
}

export default leadReducer;