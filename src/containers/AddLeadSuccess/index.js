import React, {useState} from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import './styles.scss'
import Images from '../../common/Images'

const AddLeadSuccess = () => {
    let history = useHistory();
    const goBack = ()=> {
        history.goBack()
    }
    return (
        <div className="AddLeadSuccess">
            <img style={{marginTop:61}} src={Images.faceSuccess}/>
            <div className="txtSuccess">
            THÊM LEAD THÀNH CÔNG
            </div>
            <div style={{fontSize:50, marginTop:20}}>👍</div>
            <div className="groupButton">
                <button onClick={()=>{
                    let url = window.location.href
                    if(!url.includes('action=close')){
                        window.location.href=window.location.href+"?action=close"
                    }     
                }} type="button" className="btnClose">
                <img src={Images.icClose} alt=""/>
                </button>
                <button type="button" onClick={goBack} className="btnAction">
                    <img src={Images.icAddUser}/>
                    <div className="txtLabelBtn">THÊM LEAD KHÁC</div>
                </button>
            </div>
        </div>
    )
}

export default AddLeadSuccess;