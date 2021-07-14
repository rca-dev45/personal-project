import React from 'react';
import {Link} from 'react-router-dom';
import "../App.css";



const PageTwo = () =>{
  return (
      <div>
      <h1>Registration form</h1>
        <form className="form-block">
          <label>First Name</label>
          <input  type="text" />
          <label>Last Name</label>
          <input type="text" />
          <section className="DOB">
          <label for="DOB">Date of Birth:</label>
          <input type="date" id="DOB" name="DOB"/>
          </section>
          <p>Do you want to stay up to date on all the latest coupons and deals?:</p>
          <section className="inline-radio-buttons">
            <input type="radio" id="Yes" name="food" value="Yes"></input>
            <label for="Yes">Yes</label>
            <input type="radio" id="No" name="food"value="No"/>
            <label for="No">No</label>
          </section>
          <p>Terms of Service/Terms & Condtions?:</p>
          <section className="inline-radio-buttons">
            <input type="radio" id="Agree" name="terms-of-service" value="Agree"></input>
            <label for="terms-of-service">Agree</label>
            <input type="radio" id="Disagree" name="terms-of-service"value="Disagree"/>
            <label for="No">Disagree</label>
          </section>
        <input className="submit" type="submit" value="Submit" />




        </form>
      <br/>
      <Link className="tic-tac" to="/"> Page One</Link>
      <Link className="tic-tac" to="/PageThree"> Page Three</Link>
      <Link className="tic-tac" to="/ReduxPage"> Redux Page</Link>
      </div>
  );
};


export default PageTwo
