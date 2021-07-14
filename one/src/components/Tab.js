import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.string.isRequired,

  };

  onClick = () => {
    const {label, onClick } = this.props;
    onClick(label);
    console.log('DMZ 1');
  }

  render() {
    const {
      onClick,
      props: {
        activeTab,
        label,
      },
    }  = this;

    let className = 'tab-list-active';

    if(activeTab === label){
      className += '-selected';
    }

    return(
      <div
      className={className}
      onClick={onClick}
      >
      {label}
      </div>
    );

  }
}

export default Tab;
