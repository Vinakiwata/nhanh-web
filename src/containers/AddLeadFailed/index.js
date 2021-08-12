import React, {useState} from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import './styles.scss'
import Images from '../../common/Images'

const AddLeadFailed = () => {
    let history = useHistory();
    const closePage = ()=>{
        let url = window.location.href
        if(!url.includes('action=close')){
            window.location.href=window.location.href+"?action=close"
        } 
        history.goBack()
    }
    return (
        <div className="AddLeadFailed">
            <img style={{marginTop:61}} src={Images.faceFailed}/>
            <div className="txtFailed">THÊM LEAD THẤT BẠI</div>
            <div style={{marginTop:20}}>
                <div style={{textDecorationLine:'underline'}} className="txtNote">Vui lòng:</div>
                <div className="txtNote">👉 Thử lại</div>
                <div className="txtNote">👉 Liên hệ với team để được hỗ trợ</div>
            </div>
            <div className="txtWarning">Tự động chuyển đến màn hình công việc sau 3</div>
            <div className="groupButton">
                <button onClick={closePage} type="button" className="btnClose">
                <img src={Images.icClose} alt=""/>
                </button>
            </div>
        </div>
    )
}

export default AddLeadFailed;