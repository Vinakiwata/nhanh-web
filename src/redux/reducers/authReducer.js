import {SET_VAR_AUTH, GET_USER_INFO_SUCESS, GET_USER_INFO_FAILED} from '../actions/authAction'
import _ from 'lodash'
const defaultState= {
    token: '',
    user: null,
};

const authentication = (state = defaultState, action) =>  {
    switch (action.type) {
        case SET_VAR_AUTH:
            return {
                ...state,
                [action.key]: action.value
            }
        case GET_USER_INFO_SUCESS:
            return {
                ...state,
                user: _.get(action,'payload.data',null)
            }
        default:
            return state;
    }
}

export default authentication;