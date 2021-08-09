import React from 'react';
import { connect } from 'react-redux';
import './styles.scss'
import EnhancedInput from '../../components/InputEnhanced'
import Image from '../../common/Images'

const AddLead = (props) => {
    const {token} = props;
    return (<div className="addLeadContainer">
        <div className="titlePage">THÔNG TIN KHÁCH HÀNG</div>
        <EnhancedInput label="Số điện thoại" placeholder="Số điện thoại bàn hoặc di động"/>
        <EnhancedInput label="Tên Shop/Công ty" placeholder="Tên shop/Công ty"/>
        <EnhancedInput label="Địa chỉ" placeholder="Nhập đúng format để dễ dàng thống kê tìm kiếm"/>
        <EnhancedInput label="Email" placeholder="Cá nhan hoặc cty đều được"/>
        <EnhancedInput label="Sản lượng dự kiến (Đơn/Tháng)" placeholder="Số số đơn"/>
        <EnhancedInput label="Doanh thu dự kiến (Vnđ/Tháng)" placeholder="Nhập số tiền"/>
        <EnhancedInput label="Ghi chú thêm" placeholder="Nhập ghi chú"/>
        <div className="groupButton">
            <button type="button" className="btnClose">
            <img src={Image.icClose} alt=""/>
            </button>
            <button type="button" className="btnAdd">
                <img src={Image.icAddUser} alt=""/>
                <div className="txtLabelBtn">THÊM LEAD MỚI</div>
            </button>
        </div>
    </div>)
}

const mapStateToProps = (state) => {
    return {
        token: state.auth.token
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        // getUserInfo: (token) => dispatch(getUserInfo(token)),
        // setVarAuth: (key, value) => dispatch(setVarAuth(key, value))
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (AddLead)
// export default AddLead;