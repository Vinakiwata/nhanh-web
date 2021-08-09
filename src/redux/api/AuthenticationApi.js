import Constants from '../../common/Constants'
import {from} from 'rxjs';
import axios from 'axios';
const loginApi = (authorcode) => {
    const url = `${Constants.GHN.URL}nhs/api/v1/login-sso`
    const params={
        "authorCode": authorcode
    }
    const config = {
    }
    return from(axios.post(url, params,config));
}

const getUserInfo = (token) => {
    const url = `${Constants.GHN.URL}nhs/api/v1/user`
    const config = {
        headers: {
            'Authorization-Sso': token,
        },
    };
    return from(axios.get(url,config))
}

// const loginOut = () => {
//     const url = GHN.URL
//     return from(instance.get(url))
// }

export default {
    loginApi,
    getUserInfo,
    // loginOut
}

