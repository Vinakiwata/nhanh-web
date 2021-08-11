import React from 'react';
import './styles.scss'
import Images from '../../common/Images'
const InputEnhanced = ({name,label, value, type, maxLength, placeholder, onChange, error, disabled, isEdit}) => {
    const handleChange = (e)=>{
        onChange(e.target.name,e.target.value)
    }
    return (
        <div className="inputEnhancedContainer">
            <div className="labelInput">{label}</div>
            <div className="groupInput" style={{height:40,display:'flex',backgroundColor: disabled?'#F2F7F9':'#DDEAF3'}}>
                <input disabled={disabled} maxLength={maxLength} name={name} value={value} onChange={handleChange} type={type} className={error?"styleInput2":"styleInput"} style={{backgroundColor: disabled?'#F2F7F9':'#DDEAF3', paddingRight: isEdit?30:18}}  placeholder={placeholder}/>
                {isEdit&&<img className="iconEdit" src={Images.icPenCilBlue}/>}
            </div>
            {error&&<div className="messageError">{error}</div>}
        </div>
    )
}

InputEnhanced.defaultProps = {
    label: '',
    value: '',
    type: 'text',
    placeholder: 'Vui lòng nhập',
    error: '',
    name:'input',
    onChange: ()=>{},
    maxLength: '500',
    disabled: false,
    isEdit: false
}

export default InputEnhanced;