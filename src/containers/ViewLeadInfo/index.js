import React, {useState} from 'react';
import './styles.scss'
import Images from '../../common/Images'
import Modal from 'react-modal';
import { useHistory } from "react-router-dom";

const customStyles = {
    content: {
    borderColor:'transparent',
    backgroundColor:'transparent',
    padding:0,
    inset: 20,
    },
  };
const ViewLeadInfo = () => {
    let history = useHistory();
    const closePage = ()=> {
        history.goBack()
    }
    const [modalIsOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(false);
    }
    const navigateProcessPage = () => {
        history.push('/process')
    }
    return (
        <div className="ViewLeadInfoContainer">
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
                <div onClick={navigateProcessPage} className="groupViewProcess">
                    <div className="txtWiewProcess">Xem q.trình</div>
                    <img src={Images.icViewLogBlue}/>
                </div>
            </div>
            <div className="txtInfoGeneral">Thông tin chung</div>
            <div className="borderView">
                <div className="txtLabelText">Tên shop/Công ty</div>
                <div className="txtInfoText">Shop Meora - Shopee</div>
            </div>
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
                <div className="borderText">
                    <div className="txtInfoText2">BẢNG GIÁ ĐỒNG GIÁ 20.5K - 2KG - TOÀN QUỐC</div>
                </div>
            </div>
            <div className="borderView">
                <div className="txtLabelText">Hợp đồng</div>
                <div className="borderText">
                    <div className="txtInfoText2">Shoppee</div>
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
            <div className="borderView">
                <div className="txtLabelText">Sản lượng đơn/tháng</div>
                <div className="txtInfoText">100</div>
            </div>
            <div className="borderView">
                <div className="txtLabelText">Doanh thu  dự kiến tháng</div>
                <div className="txtInfoText">100M đ</div>
            </div>
            <button onClick={openModal} className="borderView" style={{width:'100%'}}>
                <div style={{display:'flex',flexDirection:'row', flex:1, width:'90%'}}>
                    <div className="txtLabelText">Ghi chú:</div>
                    <div className="txtNote"> Nhân viên lấy hàng 10h tối</div>
                </div>
                <img src={Images.icDownArrowBlue}/>
            </button>
            <div className="borderView">
                <div className="txtLabelText">Thông tin tài khoản Xu</div>
                <div className="groupOption">
                    <div className="txtLabelText">Hiện có </div>
                    <div style={{marginRight:5, marginLeft: 5}} className="txtInfoText">969.000 xu </div>
                    <img src={Images.icCoinInfoBlue}/>
                    <img style={{marginLeft:3}} src={Images.icDoubleDownOrange}/>
                </div>
            </div>
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
            <div className="txtInfoGeneral">Liên hệ</div>
            <div className="borderView">
                <div className="txtLabelText">Điện thoại</div>
                <div className="txtInfoText">0987200456</div>
            </div>
            <div className="borderView">
                <div className="txtLabelText">Email</div>
                <div className="txtInfoText">levanA@gmail.com</div>
            </div>
            <div className="txtInfoGeneral">Thông tin xác minh</div>
            <div className="groupLocation">

            </div>
            <div className="groupButton">
                <button onClick={closePage} type="button" className="btnClose">
                <img src={Images.icClose} alt=""/>
                </button>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <div style={{backgroundColor:'#F2F7F9', borderRadius: 15, padding:10}}>
                    <div style={{fontFamily:'Google Sans', fontSize:14, color: '#00476F'}}>Ghi chú: </div>
                    <div style={{fontFamily:'Google Sans', fontWeight:'bold', fontSize:14, fontStyle:'italic', color:'#00476F'}}>{content}</div>
                </div>
                <div style={groupButton}>
                    <button onClick={closeModal} type="button" style={btnClose}>
                    <img src={Images.icClose} alt=""/>
                    </button>
                </div>
            </Modal>
        </div>
    )
}

export default ViewLeadInfo;

const groupButton = {
    height: 160,
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #F2F7F9 100%)',
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 0px 20px;
}
const btnClose = {
    height: 60,
    width: 60,
    backgroundColor: '#00476F',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    borderColor: 'rgba(255, 255, 255, 0.6)'
}

let content = `Khi mùa sale cuối năm đang đến gần, việc đưa vào đưa vào hoạt động 64 bưu cục mới đã giúp GHN tăng tốc độ giao nhận với việc:

Rút ngắn khoảng cách với cả Người Gửi và Người Nhận; từ đó đơn hàng có thể được lấy/gửi hoặc giao đến tay người nhận nhanh chóng hơn.
Shop chủ động lựa chọn lấy/ gửi hàng; giảm tình trạng dồn ứ hàng, đặc biệt trong các mùa cao điểm.
Giảm tải áp lực cho các tuyến giao - nhận trọng điểm; đảm bảo vận hành luôn ổn định trên mọi tuyến.
Đơn hàng của Shop sẽ luôn có nhân viên GHN được tiếp nhận và trung chuyển trong thời gian sớm nhất; đảm bảo đơn được hoàn thành đúng thời gian dự kiến.`