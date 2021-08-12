import React, {useState} from 'react';
import './styles.scss'
import EnhancedInput from '../../components/InputEnhanced'
import Images from '../../common/Images'
import { useHistory } from "react-router-dom";

const ProcessScreen = () => {
    let history = useHistory();
    const closePage = ()=> {
        history.goBack()
    }

    return (
        <div className="ProcessContainer">
            <div className="customerId">Khách hàng - ID#########</div>
            <div className="txtInfoGeneral">Quy trình xử lý</div>
            <div className="timeline">
                <div className="tickTime right">
                    <div className="textNormal">Tạo yêu cầu bởi</div>
                    <div className="textNormal">dd/mm/yyyy - hh:mm #Thứ</div>
                </div>
                <div className="tickTime right">
                    <div className="textNormal">Bảng giá AM duyệt</div>
                    <div className="groupText">
                        <div className="textNormal textApproved">Đã Duyệt </div>
                        <div className="textNormal">Bởi</div>
                        <div className="textNormal textName">#Tênnv</div>
                    </div>
                    <div className="textNormal">dd/mm/yyyy - hh:mm #Thứ</div>
                </div>
                <div className="tickTime approved right">
                <div className="textNormal">Bảng giá GDV duyệt</div>
                    <div className="groupText">
                        <div className="textNormal textApproved">Đã duyệt </div>
                        <div className="textNormal">Bởi</div>
                        <div className="textNormal textName">#Tênnv</div>
                    </div>
                    <div className="textNormal">dd/mm/yyyy - hh:mm #Thứ</div>
                </div>
                <div className="tickTime finished right">
                    <div className="groupText">
                        <div className="textNormal textFinished">Đã hoàn tất </div>
                        <div className="textNormal">Bởi</div>
                        <div className="textNormal textName">#Tênnv</div>
                    </div>
                    <div className="textNormal">dd/mm/yyyy - hh:mm #Thứ</div>
                </div>
            </div>
            <div className="groupButton">
                <button onClick={closePage} type="button" className="btnClose">
                <img src={Images.icClose} alt=""/>
                </button>
            </div>
        </div>
    )
}

export default ProcessScreen;
