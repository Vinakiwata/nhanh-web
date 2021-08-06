import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Image from '../../common/Images'

class Tab extends Component {
    static propTypes = {
      activeTab: PropTypes.string.isRequired,
      title: PropTypes.instanceOf(Object).isRequired,
      tabIndex: PropTypes.number.isRequired,
      onClick: PropTypes.func.isRequired,
    };
  
    onClick = () => {
      const { title, tabIndex, onClick } = this.props;
      onClick(tabIndex);
    }
  
    render() {
      const {
        onClick,
        props: {
          activeTab,
          title,
          tabIndex
        },
      } = this;
      let className = 'tab-list-item';
  
      if (activeTab === tabIndex) {
        className += ' tab-list-active';
      }
  
      return (
        <li
          className={className}
          onClick={onClick}
        >
          <div className="txtNumber">{title?.number}</div>
          <div className="groupTxtTitle">
            <div className="txtTitle">{title?.title}</div>
            {(activeTab === tabIndex)&&<img style={{marginLeft:3}} src={Image.icListBlue} />}
            
          </div>
          
        </li>
      );
    }
  }
  
  export default Tab;