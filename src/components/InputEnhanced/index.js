import React from 'react';
import './styles.scss'
// Restricts input for the given textbox to the given inputFilter.
// function setInputFilter(textbox, inputFilter) {
//     ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
//       textbox.addEventListener(event, function() {
//         if (inputFilter(this.value)) {
//           this.oldValue = this.value;
//           this.oldSelectionStart = this.selectionStart;
//           this.oldSelectionEnd = this.selectionEnd;
//         } else if (this.hasOwnProperty("oldValue")) {
//           this.value = this.oldValue;
//           this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
//         } else {
//           this.value = "";
//         }
//       });
//     });
//   }
const InputEnhanced = ({label, value, type, placeholder, onChange}) => {
    const handleChange = (e)=>{
        onChange(e.target.value)
    }
    return (
        <div className="inputEnhancedContainer">
            <div className="labelInput">{label}</div>
            <div style={{height:40}}>
                <input value={value} onChange={handleChange} type={type} className="styleInput"  placeholder={placeholder}/>
            </div>
            
        </div>
    )
}

InputEnhanced.defaultProps = {
    label: '',
    value: '',
    type: 'text',
    placeholder: 'Vui lòng nhập',
    onChange: ()=>{}
}

export default InputEnhanced;