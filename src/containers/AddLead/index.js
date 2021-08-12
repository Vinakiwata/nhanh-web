import React, {useState} from 'react';
import { connect } from 'react-redux';
import './styles.scss'
import EnhancedInput from '../../components/InputEnhanced'
import Image from '../../common/Images'
import _ from 'lodash'
import {checkPhoneValid,validateEmail} from '../../utils/CheckValid'
import CreateLeadApi from '../../redux/api/CreateLeadApi'
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from "react-router-dom";

let userInfoDefault = {
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
const AddLead = (props) => {
    const {token} = props;
    let history = useHistory();
    const [addInfo,setAddInfo] = useState({...userInfoDefault});
    const [error,setError] = useState({...userInfoDefault});
    const handleInput = (name,value)=>{
        if(name==='phone'){
            if(value?.length<11){
                setAddInfo({...addInfo,[name]:value})
            }
        }
        else{
            setAddInfo({...addInfo,[name]:value})
        }
        
        handleCheckValid(name,value)
    }
    const showToastError = (label) => toast.error(label, toastOption);
    const showToastSuccess = (label) => toast.success(label, toastOption);
    const handleCheckValid = (name, value) => {
        let errorMessage = error;
        switch (name) {
            case 'phone':
                let phoneValid = checkPhoneValid(value)
                errorMessage.phone = phoneValid;
                if(!phoneValid&&(value?.length<11)){
                    handleCheckPhone(value)
                }
                break;
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
    const checkValidToSubmit = () => {
        let errorMessage = {};
        errorMessage.phone = (!addInfo?.phone) ? 'Số điện thoại không được để trống':error?.phone;
        errorMessage.email = error?.email;
        errorMessage.shopName = (!addInfo?.shopName) ? 'Tên shop không được để trống':'';
        errorMessage.address = (!addInfo?.address) ? 'Địa chỉ không được để trống':'';
        errorMessage.quantity = (!addInfo?.quantity) ? 'Sản lượng dự kiến không được để trống':'';
        return errorMessage
    }
    const handleAddLead = () => {
        let validSubmit = checkValidToSubmit();
        if(!_.isEmpty(Object.values(validSubmit).filter(o=>o))){
            setError(validSubmit)
        }
        else{
            console.log("tao")
            CreateLeadApi.createLead(token,addInfo?.phone,addInfo?.shopName, addInfo?.address, addInfo?.email,addInfo?.quantity,addInfo?.revenue,addInfo?.note,
                result=>{
                    showToastSuccess("Tạo khách hàng thành công")
                    history.push('/add-lead-success')
                    clearAllInput();
                },
                err=>{
                    showToastError(err)
                    history.push('/add-lead-failed')
                })
        }
        
    }

    const clearAllInput = () => {
        setAddInfo({...userInfoDefault})
    }

    const handleCheckPhone = (phone) => {
        CreateLeadApi.checkPhone(token,phone, result=>{
            console.log(333,result)
            if(result.status==='not_existed_lead'){
                setError({...error,phone:''})
            }
            else {
                setError({...error,phone:'Số điện thoại này đã được đăng kí'})
            }
        },err=>{
            setError({...error,phone:'số điện thoại không hợp lệ'})
        })
    }
    return (<div className="addLeadContainer">
        <div className="titlePage">THÔNG TIN KHÁCH HÀNG</div>
        <EnhancedInput name = "phone" error={error?.phone} value={addInfo?.phone} onChange={handleInput} label="Số điện thoại" placeholder="Số điện thoại bàn hoặc di động" type="number"/>
        <EnhancedInput name = "shopName" error={error?.shopName} value={addInfo?.shopName} onChange={handleInput} label="Tên Shop/Công ty" placeholder="Tên shop/Công ty"/>
        <EnhancedInput name = "address" error={error?.address} value={addInfo?.address} onChange={handleInput} label="Địa chỉ" placeholder="Nhập đúng format để dễ dàng thống kê tìm kiếm"/>
        <EnhancedInput name = "email" error={error?.email} value={addInfo?.email} onChange={handleInput} label="Email" placeholder="Cá nhân hoặc cty đều được"/>
        <EnhancedInput name = "quantity" error={error?.quantity} value={addInfo?.quantity} onChange={handleInput} label="Sản lượng dự kiến (Đơn/Tháng)" placeholder="Số đơn" type="number"/>
        <EnhancedInput name = "revenue" value={addInfo?.revenue} onChange={handleInput} label="Doanh thu dự kiến (Vnđ/Tháng)" placeholder="Nhập số tiền" type="number"/>
        <EnhancedInput name = "note" value={addInfo?.note} onChange={handleInput} label="Ghi chú thêm" placeholder="Nhập ghi chú"/>
        <div className="groupButton">
            <button type="button" onClick={clearAllInput} className="btnClose">
            <img src={Image.icClose} alt=""/>
            </button>
            <button type="button" className="btnAdd" onClick={handleAddLead}>
                <img src={Image.icAddUser} alt=""/>
                <div className="txtLabelBtn">THÊM LEAD MỚI</div>
            </button>
        </div>
        <ToastContainer/>
    </div>)
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

export default connect(mapStateToProps, mapDispatchToProps) (AddLead)