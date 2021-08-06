import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';
import './styles.scss'

class Tabs extends Component {
    static propTypes = {
      children: PropTypes.instanceOf(Array).isRequired,
      titles: PropTypes.instanceOf(Array).isRequired,
      tabCurrent: PropTypes.number,
      onPageClick: PropTypes.func.isRequired
    }
  
    constructor(props) {
      super(props);
  
      this.state = {
        activeTab: this.props?.tabCurrent??0,
      };
    }
  
    onClickTabItem = (tab) => {
        const {onPageClick} = this.props;
        onPageClick&&onPageClick(tab)
        this.setState({ activeTab: tab });
    }
    render() {
        const {
          onClickTabItem,
          props: {
            children,
            titles
          },
          state: {
            activeTab,
          }
        } = this;

        return (
          <div className="tabs">
            <ol className="tab-list">
              {titles.map((title,index) => {
    
                return (
                  <Tab
                    activeTab={activeTab}
                    key={index}
                    tabIndex = {index}
                    title={title}
                    onClick={onClickTabItem}
                  />
                );
              })}
            </ol>
            <div className="tab-content">
              {children.map((child, index) => {
                if (index !== activeTab) return undefined;
                return child.props.children;
              })}
            </div>
          </div>
        );
      }
    }
    
    export default Tabs;