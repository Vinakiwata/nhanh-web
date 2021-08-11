import React, {useState} from 'react';
import { connect } from 'react-redux';
import './styles.scss'
import EnhancedInput from '../../components/InputEnhanced'
import Images from '../../common/Images'
import _ from 'lodash'
import {checkPhoneValid,validateEmail} from '../../utils/CheckValid'
import CreateLeadApi from '../../redux/api/CreateLeadApi'
import { ToastContainer, toast } from 'react-toastify';

let userInfoDefault = {
    phone: '0363225277',
    shopName: 'MinMoon',
    email: 'huong@gmail.com',
    address: 'Huyện Cần đước',
    quantity: '100',
    revenue: '500,000',
    note: 'Hàng dễ vỡ'
}
let userInfoError = {
    phone: '',
    shopName: '',
    email: '',
    address: '',
    quantity: '',
    revenue: '',
    note: ''
}
const toastOption = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
}
const EditLeadInfo = (props) => {
    const {token} = props;
    const [addInfo,setAddInfo] = useState({...userInfoDefault});
    const [error,setError] = useState({...userInfoError});
    const handleInput = (name,value)=>{
        setAddInfo({...addInfo,[name]:value})
        handleCheckValid(name,value)
    }
    const showToastError = (label) => toast.error(label, toastOption);
    const showToastSuccess = (label) => toast.success(label, toastOption);
    const handleCheckValid = (name, value) => {
        let errorMessage = error;
        switch (name) {
            case 'shopName':
                errorMessage.shopName = value? '': 'Tên shop không được để trống';
                break;
            case 'email':
                errorMessage.email = value?(validateEmail(value)=== false? 'Địa chỉ email không hợp lệ':''):''
                break;
            case 'address':
                errorMessage.address = value? '': 'Địa chỉ không được để trống';
                break;
            case 'quantity':
                errorMessage.quantity = value? '': 'Sản lượng dự kiến không được để trống';
                break;
            default:
                break;
        }
        setError(errorMessage)
    }
    return(
        <div className="EditLeadContainer">
            <div className="customerId">Khách hàng - ID#########</div>
            <div className="groupStateUser">
                <div className="groupCheckInfo">
                    <img src={Images.icVerifyUserOrange}/>
                    <div className="txtCheckInfo">Đã xác minh</div>
                </div>
                <div style={{marginLeft:7}} className="groupCheckInfo">
                    <img src={Images.icPolicyOrange}/>
                    <div className="txtCheckInfo">Đã duyệt ch.sách</div>
                </div>
                <div className="groupViewProcess">
                    <div className="txtWiewProcess">Xem q.trình</div>
                    <img src={Images.icViewLogBlue}/>
                </div>
            </div>
            <EnhancedInput name = "phone" disabled error={error?.phone} value={addInfo?.phone} onChange={handleInput} label="Số điện thoại" placeholder="Số điện thoại bàn hoặc di động" type="number"/>
            <EnhancedInput name = "shopName" error={error?.shopName} value={addInfo?.shopName} onChange={handleInput} label="Tên Shop/Công ty" placeholder="Tên shop/Công ty" isEdit/>
            <EnhancedInput name = "address" error={error?.address} value={addInfo?.address} onChange={handleInput} label="Địa chỉ" placeholder="Nhập đúng format để dễ dàng thống kê tìm kiếm" isEdit/>
            <EnhancedInput name = "email" error={error?.email} value={addInfo?.email} onChange={handleInput} label="Email" placeholder="Cá nhân hoặc cty đều được" isEdit/>
            <EnhancedInput name = "quantity" error={error?.quantity} value={addInfo?.quantity} onChange={handleInput} label="Sản lượng dự kiến (Đơn/Tháng)" placeholder="Số đơn" type="number" isEdit/>
            <EnhancedInput name = "revenue" value={addInfo?.revenue} onChange={handleInput} label="Doanh thu dự kiến (Vnđ/Tháng)" placeholder="Nhập số tiền" type="number" isEdit/>
            <EnhancedInput name = "note" value={addInfo?.note} onChange={handleInput} label="Ghi chú thêm" placeholder="Nhập ghi chú" isEdit/>

            <div className="txtInfoGeneral">Phụ trách</div>
            <div className="borderView">
                <div className="txtLabelText">Team</div>
                <div className="txtInfoText">###</div>
            </div>
            <div className="borderView">
                <div className="txtLabelText">Bộ phận</div>
                <div className="txtInfoText">EXP/l-region/DNB</div>
            </div>
            <div className="borderView">
                <div className="txtLabelText">Nguồn</div>
                <div className="txtInfoText">Phân bổ - Global</div>
            </div>
            <div className="borderView">
                <div className="txtLabelText">AFID</div>
                <div className="txtInfoText">123</div>
            </div>
            <div className="borderView">
                <div className="txtLabelText">Nhân viên phụ trách</div>
                <div className="groupOption">
                    <div className="borderText">
                        <div className="txtInfoText2">Ng văn A</div>
                    </div>
                    <div className="borderText">
                        <div className="txtInfoText2">Nguyên Văn An</div>
                    </div>
                    <div className="borderText">
                        <div className="txtInfoText2">...</div>
                    </div>
                </div>
            </div>
            <div className="txtInfoGeneral">Thiết lập riêng</div>
            <div className="borderView">
                <div className="txtLabelText">Tỉ lệ hoàn hàng cam kết</div>
                <div className="groupPercentCommit">
                    <img src={Images.icIncreaseGreen}/>
                    <div className="txtIncreasePercent">69%</div>
                    <div className="txtInfoText">50.09%</div>
                </div>
            </div>
            <div className="borderView">
                <div className="txtLabelText">Bảng giá</div>
                <div style={{backgroundColor:'#00476F'}} className="borderText">
                    <div className="txtInfoText2">Chưa cài đặt</div>
                </div>
            </div>
            <div className="borderView">
                <div className="txtLabelText">Hợp đồng</div>
                <div style={{backgroundColor:'#00476F'}} className="borderText">
                    <div className="txtInfoText2">Đang xử lý</div>
                </div>
            </div>
            <div className="borderView">
                <div className="txtLabelText">Thiết lập riêng</div>
                <div className="groupOption">
                    <div className="borderText">
                        <div className="txtInfoText2">Giao 1 phần</div>
                    </div>
                    <div className="borderText">
                        <div className="txtInfoText2">Chịu phí chuyển khoản COD</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        token: state.auth.token
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (EditLeadInfo)