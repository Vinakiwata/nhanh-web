export const LOGIN_SSO = 'LOGIN_SSO'
export const LOGIN_SSO_SUCCESS = 'LOGIN_SSO_SUCCESS'
export const LOGIN_SSO_FAILED = 'LOGIN_SSO_FAILED'
export const GET_USER_INFO = 'GET_USER_INFO'
export const GET_USER_INFO_SUCESS = 'GET_USER_INFO_SUCCESS'
export const GET_USER_INFO_FAILED = 'GET_USER_INFO_FAILED'
export const SET_VAR_AUTH = 'SET_VAR_AUTH'

export const loginSSO = (ssoToken) => {
    return { type: LOGIN_SSO, payload: {ssoToken}}
}

export const loginSSOSuccess = (token) => {
    return {type: LOGIN_SSO_SUCCESS, payload: {token}}
}

export const loginSSOFailed = (error) => {
    return {type: LOGIN_SSO_FAILED, payload: {error}}
}

export const getUserInfo = (token)=> ({
    type: GET_USER_INFO,
    payload: {token}
})
  
export const getUserInfoSuccess = (data) => ({
    type: GET_USER_INFO_SUCESS,
    payload: {
        data
    }
})
  
export const getUserInfoError = (message) => ({
    type: GET_USER_INFO_FAILED,
    payload: {
        message
    }
})

export const setVarAuth = (key, value) => ({
    type: SET_VAR_AUTH,
    key,
    value
})