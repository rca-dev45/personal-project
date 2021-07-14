import React from 'react';
import {Link} from 'react-router-dom';
import "../App.css";

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
    <h3>{this.state.count}</h3>
    <button onClick={()=>this.setState({count: this.state.count + 1})}> + </button>
    <button onClick={()=>this.setState({count: this.state.count - 1})}> - </button>
    </div>

    <Link className="tic-tac" to="/"> Page One</Link>
    <Link className="tic-tac" to="/PageThree"> Page Three</Link>
    </div>
    </div>

  );
}

}

export default ReduxPage;
