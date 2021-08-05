import React, {Component} from 'react';
import './styles.scss';
import GHNAPI from './../../services/GHNAPI' 
import Constants from './../../common/Constants'

class SplashScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            isSuccess: true,
            session:''
        }
    }
    render(){
        return (
        <div className="App splash">
            Hello Hello
        </div>
        );
    }

    onLogout = async() => {
        // const {session} = this.state
        // await GHNAPI.logout(session)
        localStorage.clear();
        window.location.href = Constants.GHN.AUTHEN_URL
    }

  async componentDidMount(){
    const authorCode = this.getParamUrl(window.location.href).authorcode
    if(authorCode) {
        console.log(222222,authorCode)
        const res = await GHNAPI.login(authorCode)
        console.log(111111,res)
        // const response = res?.data
        // if(response?.status === 'OK'){
        //     const data = response.data
        //     const userInfo = data[0].userInfo
        //     if(userInfo){
        //         const session = data[0].session
        //         localStorage.setItem("session", session)
        //         window.location.href="/"
        //     } else {
        //         window.location.href = Constants.GHN.AUTHEN_URL
        //     }
        // } else {
        //     window.location.href = Constants.GHN.AUTHEN_URL
        // }

    } else {
        console.log("here")
        window.location.href = Constants.GHN.AUTHEN_URL
    }

  }

  getParamUrl(url){
    let vars = {}
    url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
        vars[key] = value
    })
    return vars
}

}

export default SplashScreen;
