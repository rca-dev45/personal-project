import React from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';

import PageTwo from './PageTwo.jsx';
import PageThree from './PageThree.jsx';
import ReduxPage from './ReduxPage.jsx';
import "../App.css";

const PageOne = () =>{
  return (
      <div>

      <h1>Hello World</h1>
      <h2> Welcome to my Personal Project</h2>

      <p> It currently serves as a demonstration of React Redux basic
      with such features as: <br/>
      3 Pages which use react router<br/>
      A page with a form <br/>
      Coming soon:<br/>
      A demonstration for Redux<br/>
      A demonstration of jest/test writing capabilities<br/>
      A demonstration of API calls <br/>
      Long term features:<br/>
      A dashboard with google foot traffic displays<br/>
      Integrated habit tracking from Done app<br/>
      Investment Fund projection and analysis<br/>
      </p>

      <br/>
      <Link className="tic-tac" to="/PageTwo"> Page Two</Link>
      <Link className="tic-tac" to="/PageThree"> Page Three</Link>
      <Link className="tic-tac" to="/ReduxPage"> Redux Page</Link>
      </div>

  );
};




const App = () =>{

  return (
    <div className='app-stuff'>
      <BrowserRouter>
          <Route path="/" exact component={PageOne}/>
          <Route path="/PageTwo"  component={PageTwo}/>
          <Route path="/PageThree" component={PageThree}/>
          <Route path="/ReduxPage" component={ReduxPage}/>
      </BrowserRouter>
    </div>

  );
};

export default App;
