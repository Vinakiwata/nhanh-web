import React from 'react';
import './styles.scss'
import Images from '../../common/Images'

const ItemInfoCheckLead = ({isNew, label, isVerification, isSetting,approvalState, onPress}) => {
    return(
        <button className="itemInfoCheckLeadContainer">
            {
                isNew? 
                <div className="highlightSpace">
                    <img src ={Images.icPointerRightWhite}/>
                </div>:
                <div className="widthSpace"/>
            }
            <div className="txtInfo">{label}</div>
            <img className="styleIcon" src={isVerification?Images.icVerifyUserOrange:Images.icVerifyUserFlightBlue}/>
            <img className="styleIcon" src={isSetting?Images.icPolicyOrange: Images.icPolicyFlightBlue}/>
            <img className="styleIcon" src={approvalState===1?Images.icCheckboxOrange:approvalState===2?Images.icCheckboxOrange:Images.icCheckboxFlightBlue}/>
        </button>
    )
}

export default ItemInfoCheckLead;