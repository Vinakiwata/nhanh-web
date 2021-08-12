import React, {Component, useEffect} from 'react';
import './styles.scss';
import AuthApi from '../../redux/api/AuthenticationApi'
import Constants from './../../common/Constants'
import { connect } from 'react-redux';
import {getUserInfo, setVarAuth} from '../../redux/actions/authAction'
import { useHistory } from "react-router-dom";

const  SplashScreen = (props) => {
    let history = useHistory();
    useEffect(()=>{
        handleLogin()
    },[])
    const handleLogin = async() => {
        const authorCode = getParamUrl(window.location.href).authorcode
        if(authorCode) {
            const res = await AuthApi.loginApi(authorCode)
            const response = res?.data
            if(response?.status === 'OK'){
                const data = response.data
                if(data[0]?.access_token){
                    const {setVarAuth, getUserInfo} = props;
                    let token = data[0].access_token;
                    setVarAuth('token',token);
                    getUserInfo(token);
                    history.push("/add-lead");
                }
                else {
                    window.location.href = Constants.GHN.AUTHEN_URL
                }
            } else {
                window.location.href = Constants.GHN.AUTHEN_URL
            }

        } else {
            window.location.href = Constants.GHN.AUTHEN_URL
        }
    }

  const getParamUrl = (url)=>{
        let vars = {}
        url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
            vars[key] = value
        })
        return vars
    }
    return (
    <div className="App splash">
        Loading ...
    </div>
    );


}

const mapStateToProps = (state) => {
    return {

    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        getUserInfo: (token) => dispatch(getUserInfo(token)),
        setVarAuth: (key, value) => dispatch(setVarAuth(key, value))
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (SplashScreen)
