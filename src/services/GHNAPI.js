import axios from 'axios'
import Constants from './../common/Constants'

const timeout = 9500;
const GHNAPI = {};

GHNAPI.loginT62 = (t62) => {
    const dURL =  `${Constants.GHN.PDS_URL}/login-t62?token=${t62}`
    const config = {
        headers: {
            // 'token': t62,
        },
        timeout
    }

    return axios.get(dURL, config)
}

GHNAPI.login = (authorCode) => {
    
    const dURL =  `${Constants.GHN.URL}nhs/api/v1/login-sso`
    const params = {
        authorCode
    }
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    return axios.post(dURL,params , config)
}

GHNAPI.getUserInfo = (token) => {
    const dURL =  `${Constants.GHN.URL}/nhs/api/v1/user`
    const config = {
        headers: {
            'Authorisation-Sso': token,
            // "User-Agent": window.navigator.userAgent,
        },
    };
    
    return axios.get(dURL, config)
}

GHNAPI.logout = (token) => {
    const dURL =  `${Constants.GHN.URL}/logout`
    const config = {
        headers: {
            'X-Auth': token,
        },
        timeout
    }

    return axios.get(dURL, config)
}

export default GHNAPI