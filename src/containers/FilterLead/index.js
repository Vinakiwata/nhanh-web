import React, {useState} from 'react';
import './styles.scss'
import EnhancedInput from '../../components/InputEnhanced'
import Image from '../../common/Images'

let dataOption = [
    {label: 'NVPTTT/NVXL', value: 0},
    {label: 'Phân bổ - Global', value: 1},
    {label: 'Phân bổ - TP', value: 2},
    {label: 'Phân bổ - KT', value: 3},
    {label: '#Filter', value: 4},
    {label: '#Filter', value: 5},
  ]
const FilterLead = () => {
    const [openOption, setOpenOption] = useState(false);
    const handleSlected = () => {
        setOpenOption(!openOption)
    }
    const selectOption = () => {
        return (
            <div>
                <div className="labelSelected">Nguồn</div>

            </div>
        )
    }
    return (
    <div className="FilterLeadContainer">
        <EnhancedInput label="Nhân viên phụ trách" placeholder="Nhập ID để tìm kiếm"/>
        <EnhancedInput label="AFF ID"  placeholder="Nhập giá trị"/>
        {selectOption()}
        <div className="groupButton">
            <button type="button" className="btnClose">
            <img src={Image.icClose} alt=""/>
            </button>
            <button type="button" className="btnAction">
                <div className="txtLabelBtn">XOÁ HẾT</div>
            </button>
            <button type="button" className="btnAction">
                <div className="txtLabelBtn">ÁP DỤNG BỘ LỌC</div>
            </button>
        </div>
    </div>
    )
}

export default FilterLead;