import { map, mergeMap, catchError } from 'rxjs/operators'
import { of } from 'rxjs'
import GHNAPI from '../api/AuthenticationApi';
import {LOGIN_SSO, loginSSOSuccess, loginSSOFailed,
GET_USER_INFO, getUserInfoSuccess, getUserInfoError} from '../actions/authAction'
import { combineEpics, ofType} from 'redux-observable'
import _ from 'lodash';

const loginUserT62Epic= (action$)=>
    action$.pipe(
        ofType(LOGIN_SSO),
        map((action) => action.payload),
        mergeMap(({ ssoToken }) => 
            GHNAPI.loginApi(ssoToken).pipe(
                map(({data}) => {
                    const response = data;
                    if (response.status === 'OK') {
                        return loginSSOSuccess(response.data[0]?.access_token??'')
                    }
                    else {
                        return loginSSOFailed(response.message)
                    }
                }),
                catchError(error => of(loginSSOFailed(error.message)))
            )
        )
    )

const getUserInfoEpic= (action$)=>
    action$.pipe(
        ofType(GET_USER_INFO),
        map((action) => action.payload),
        mergeMap(({ token }) => 
            GHNAPI.getUserInfo(token).pipe(
                map(({data}) => {
                    const response = data;
                    if (response.status === 'OK') {
                        return getUserInfoSuccess(response?.data[0])
                    }
                    else {
                        return getUserInfoError(response.message)
                    }
                }),
                catchError(error => of(getUserInfoError(error.message)))
            )
        )
    )
export default combineEpics(
    loginUserT62Epic,
    getUserInfoEpic
);
