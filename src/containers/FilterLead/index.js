import React, {useState} from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import './styles.scss'
import EnhancedInput from '../../components/InputEnhanced'
import Images from '../../common/Images'
import {setVarLead} from '../../redux/actions/managerLeadAction'

let dataOption = [
    {label: 'Tất cả', value: 6},
    {label: 'NVPTTT/NVXL', value: 0},
    {label: 'Phân bổ - Global', value: 1},
    {label: 'Phân bổ - TP', value: 2},
    {label: 'Phân bổ - KT', value: 3},
    {label: '#Filter', value: 4},
    {label: '#Filter', value: 5},
  ]
let dataFilterTempt = {
    msnv:'',
    affID: '',
    source: 'Tất cả'
}
const FilterLead = (props) => {
    let history = useHistory();
    const {setVarLead, dataFilter} = props;
    const [openOption, setOpenOption] = useState(false);
    const [listFilter,setListFilter] = useState(dataFilterTempt)
    const handleShowSlected = () => {
        setOpenOption(!openOption)
    }
    const handleSetInput = (name, value) => {
        setListFilter({...listFilter,[name]:value})
    }
    const handleSelectOption = (item) => {
        setOpenOption(!openOption)
        setListFilter({...listFilter,'source':item?.label??''})
    }
    const handleSetFilter = (value) => {
        setVarLead('dataFilter',value)
        if(!value){
            setListFilter({...dataFilterTempt})
        }
    }
    const selectOption = () => {
        return (
            <div>
                <div className="labelSelected">Nguồn</div>
                <div className="groupSelector">
                    <button onClick={()=>handleShowSlected()} className="groupTitleFilter">
                        <div className="titleFilter">{listFilter?.source??'Tất cả'}</div>
                        <img src={Images.icDownArrowBlue}/>
                    </button>
                    <div>
                        {
                            openOption&&
                            <div className="listFilter">
                                {dataOption.map((item, index) =>
                                <button onClick={()=>handleSelectOption(item)} className="btnFilter" key={index}>{item?.label}</button>)}
                                
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
    return (
    <div className="FilterLeadContainer">
        <EnhancedInput name="msnv" value={listFilter?.msnv} onChange={handleSetInput} label="Nhân viên phụ trách" placeholder="Nhập ID để tìm kiếm" type="number"/>
        <EnhancedInput name="affID" value={listFilter?.affID} onChange={handleSetInput} label="AFF ID"  placeholder="Nhập giá trị" type="number"/>
        {selectOption()}
        <div className="groupButton">
            <button onClick={()=>history.goBack()} type="button" className="btnClose">
            <img src={Images.icClose} alt=""/>
            </button>
            <button type="button" onClick={()=>handleSetFilter(null)} className="btnAction">
                <div className="txtLabelBtn">XOÁ HẾT</div>
            </button>
            <button type="button" onClick={()=>handleSetFilter(listFilter)} className="btnAction">
                <div className="txtLabelBtn">ÁP DỤNG BỘ LỌC</div>
            </button>
        </div>
    </div>
    )
}

// export default FilterLead;
const mapStateToProps = (state) => {
    return {
        token: state.auth.token,
        dataFilter: state.lead.dataFilter
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        setVarLead: (key,value) => dispatch(setVarLead(key,value))
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (FilterLead)