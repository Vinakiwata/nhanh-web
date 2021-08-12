import React, {useEffect, useState} from 'react';
import './styles.scss';
import Tabs from "../../components/Tabs"; 
import _ from 'lodash'
import ItemInfoCheckLead from '../../components/ItemInfoCheckLead'
import Images from '../../common/Images'
import { useHistory } from "react-router-dom";

let dataTempt = [
    {isNew: true, label: 'ID:#### - #Tên shop', isVerification: false, isSetting: false, approvalState: 0},
    {isNew: true, label: 'ID:#### - #Tên shop', isVerification: false, isSetting: false, approvalState: 0},
    {isNew: false, label: 'ID:#### - #Tên shop', isVerification: true, isSetting: false, approvalState: 0},
    {isNew: false, label: 'ID:#### - #Tên shop', isVerification: true, isSetting: true, approvalState: 0},
    {isNew: false, label: 'ID:#### - #Tên shop', isVerification: true, isSetting: true, approvalState:1},
    {isNew: false, label: 'ID:#### - #Tên shop', isVerification: false, isSetting: true, approvalState: 0},
    {isNew: false, label: 'ID:#### - #Tên shop', isVerification: true, isSetting: true, approvalState: 2},
    {isNew: false, label: 'ID:#### - #Tên shop', isVerification: true, isSetting: true, approvalState: 2},
    {isNew: false, label: 'ID:#### - #Tên shop', isVerification: true, isSetting: true, approvalState: 2},
    {isNew: false, label: 'ID:#### - #Tên shop', isVerification: true, isSetting: true, approvalState: 2},
    {isNew: false, label: 'ID:#### - #Tên shop', isVerification: true, isSetting: true, approvalState: 2},
    {isNew: false, label: 'ID:#### - #Tên shop', isVerification: true, isSetting: true, approvalState: 2},
    {isNew: false, label: 'ID:#### - #Tên shop', isVerification: true, isSetting: true, approvalState: 2},
    {isNew: false, label: 'ID:#### - #Tên shop', isVerification: true, isSetting: true, approvalState: 2},
    {isNew: false, label: 'ID:#### - #Tên shop', isVerification: true, isSetting: true, approvalState: 2},
    {isNew: false, label: 'ID:#### - #Tên shop', isVerification: true, isSetting: true, approvalState: 2},
    {isNew: false, label: 'ID:#### - #Tên shop', isVerification: true, isSetting: true,approvalState:2}
  ]

const ManagerLead = (props) => {
    let history = useHistory();
    const [currentTab, setCurrentTab] = useState(0);
    return(<div className="managerContainer">
        <div className="txtStatistic">Thống kê - Tính đến Thứ 6, 24/06/2021</div>
        <div className="pageTab">
            <Tabs titles={[{number: 1.234, title: 'Lead được phân bổ'},
                {number: 234, title: 'Lead đã xác minh'},
                {number: 123, title: 'Đang xin chính sách'}]}
                onPageClick={(tab) => {
                    if (!_.isEqual(tab, currentTab)) {
                    setCurrentTab(tab);
                    }
                }}
            > 
                <div> 
                    {
                        dataTempt.map((item,index)=><ItemInfoCheckLead key={index} label={item?.label} isNew={item?.isNew} isVerification={item?.isVerification} isSetting={item?.isSetting} approvalState={item?.approvalState}/>)
                    }
                </div> 
                <div> 
                    {
                        dataTempt2.map((item,index)=><ItemInfoCheckLead key={index} label={item?.label} isNew={item?.isNew} isVerification={item?.isVerification} isSetting={item?.isSetting} approvalState={item?.approvalState}/>)
                    }
                </div> 
                <div> 
                    {
                        dataTempt3.map((item,index)=><ItemInfoCheckLead key={index} label={item?.label} isNew={item?.isNew} isVerification={item?.isVerification} isSetting={item?.isSetting} approvalState={item?.approvalState}/>)
                    }
                </div> 
            </Tabs> 
        </div>
        <div className="groupButton">
            <button onClick={()=>history.push('/filter-lead')} type="button" className="btnFilter">
                <img src={Images.icNoneFilterBlue} alt=""/>
                <span className="txtFilter">Lọc : Hiện tất cả</span>
            </button>
        </div>
    </div>)
}

export default ManagerLead;


let dataTempt2 = [
    {isNew: true, label: 'ID:#### - #Tên shop', isVerification: false, isSetting: false, approvalState: 0},
    {isNew: true, label: 'ID:#### - #Tên shop', isVerification: false, isSetting: false, approvalState: 0},
    {isNew: false, label: 'ID:#### - #Tên shop', isVerification: true, isSetting: false, approvalState: 0},
    {isNew: false, label: 'ID:#### - #Tên shop', isVerification: true, isSetting: true, approvalState: 0},
    {isNew: false, label: 'ID:#### - #Tên shop', isVerification: true, isSetting: true, approvalState:1},
    {isNew: false, label: 'ID:#### - #Tên shop', isVerification: false, isSetting: true, approvalState: 0}
  ];

  let dataTempt3 = [
    {isNew: true, label: 'ID:#### - #Tên shop', isVerification: false, isSetting: false, approvalState: 0},
    {isNew: true, label: 'ID:#### - #Tên shop', isVerification: false, isSetting: false, approvalState: 0},
    {isNew: false, label: 'ID:#### - #Tên shop', isVerification: true, isSetting: false, approvalState: 0},
    {isNew: false, label: 'ID:#### - #Tên shop', isVerification: true, isSetting: true, approvalState: 0},
    {isNew: false, label: 'ID:#### - #Tên shop', isVerification: true, isSetting: true, approvalState:1},
    {isNew: false, label: 'ID:#### - #Tên shop', isVerification: false, isSetting: true, approvalState: 0},
    {isNew: false, label: 'ID:#### - #Tên shop', isVerification: true, isSetting: true, approvalState: 2},
    {isNew: false, label: 'ID:#### - #Tên shop', isVerification: true, isSetting: true, approvalState: 2},
    {isNew: false, label: 'ID:#### - #Tên shop', isVerification: true, isSetting: true, approvalState: 2},
  ]