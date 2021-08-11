import React from 'react';
import './styles.scss'
const InputEnhanced = ({name,label, value, type, maxLength, placeholder, onChange, error}) => {
    const handleChange = (e)=>{
        onChange(e.target.name,e.target.value)
    }
    return (
        <div className="inputEnhancedContainer">
            <div className="labelInput">{label}</div>
            <div style={{height:40}}>
                <input maxLength={maxLength} name={name} value={value} onChange={handleChange} type={type} className={error?"styleInput2":"styleInput"}  placeholder={placeholder}/>
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
}

export default InputEnhanced;