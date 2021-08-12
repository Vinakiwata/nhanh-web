import React, {useEffect, useState} from 'react';
import './styles.scss';
import Tabs from "../../components/Tabs"; 
import _ from 'lodash'
import { connect } from 'react-redux';
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
    const {dataFilter} = props;
    let history = useHistory();
    const [currentTab, setCurrentTab] = useState(0);
    const handleNavigateView = (item) => {
        if (item?.approvalState === 0) {
            history.push('/edit-lead')
        }
        else {
            history.push('/lead-info')
        }
        
      }
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
                        dataTempt.map((item,index)=><ItemInfoCheckLead onPress={()=>handleNavigateView(item)} key={index} label={item?.label} isNew={item?.isNew} isVerification={item?.isVerification} isSetting={item?.isSetting} approvalState={item?.approvalState}/>)
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
            {dataFilter?
            <button onClick={()=>history.push('/filter-lead')} type="button" className="btnFilter">
                <img src={Images.icFilterOrange} alt=""/>
                <span style={{color:'#F26522'}} className="txtFilter">Lọc </span>
                <div className="optionFilter">{(dataFilter?.msnv==='')?`Tất cả nhân viên`:`Nhân viên: ${dataFilter?.msnv}`}</div>
                {(dataFilter?.affID!=='')&&<div className="optionFilter">{`AFFID: ${dataFilter?.affID}`}</div>}
                <div className="optionFilter">{(dataFilter?.source==='Tất cả')?`Tất cả nguồn`:dataFilter?.source}</div>
            </button>:
            <button onClick={()=>history.push('/filter-lead')} type="button" className="btnFilter">
                <img src={Images.icNoneFilterBlue} alt=""/>
                <span className="txtFilter">Lọc : Hiện tất cả</span>
            </button>
            }
            
        </div>
    </div>)
}

// export default ManagerLead;
const mapStateToProps = (state) => {
    return {
        token: state.auth.token,
        dataFilter: state.lead.dataFilter
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (ManagerLead)


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