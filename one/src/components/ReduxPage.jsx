import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {addOne} from '../redux/actions/add-action.js';
import {subOne} from '../redux/actions/sub-action.js';
import "../App.css";
import PropTypes from 'prop-types';

class ReduxPage extends React.Component{
  constructor(props){
    super(props);

    this.state={ count : 1};
  }

  render(){
  return (
    <div>
    <h1>Hello Hello</h1>
    <div>
    <div>
    <h3>{this.props.count}</h3>
    <button onClick={()=>{this.props.addOne()}}> + </button>
    <button onClick={()=>{this.props.subOne()}}> - </button>
    </div>

    <Link className="tic-tac" to="/"> Page One</Link>
    <Link className="tic-tac" to="/PageThree"> Page Three</Link>
    </div>
    </div>

  );
}

}

ReduxPage.propTypes={
  addOne: PropTypes.func,
  count: PropTypes.object,
  subOne: PropTypes.func

};

const mapStateToProps = state=>{
  return{
    count: state.counter.count
  };
};

const mapDispatchToProps ={
  addOne,
  subOne
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (ReduxPage);
