import React from 'react';
import {Link} from 'react-router-dom';
import Tab from './Tab.js';
import Tabs from './Tabs.js';
import "../App.css";


const PageThree = () =>{
  return (
    <div>
      <h1 className="generic-header">This and That</h1>
      <br/>

      <Tabs>
       <div label="Lorem Tab">
       <blockquote>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        In sed orci hendrerit, ultricies massa id, cursus ipsum.
        Maecenas massa erat, luctus eu lectus nec, placerat commodo nisl.
        Integer sit amet varius sem, eget ultrices sem.
        Quisque molestie venenatis odio nec auctor.
        Donec ac gravida elit. Curabitur dictum porttitor nisl,
        vitae aliquam nulla vehicula eget. Integer dapibus pharetra pharetra. Cras ac tempus ante.
        </blockquote>
       </div>
       <div label="Dune Tab">
      <p>There was a man so wise,<br/>
      He jumped into<br/>
      A sandy place<br/>
      And burnt out both his eyes!<br/>
      And when he knew his eyes were gone,<br/>
      He offered no complaint.<br/>
      He summoned up a vision<br/>
      And made himself a saint</p>
      <br/>
      <p>Here lies a toppled god.<br/>
        His fall was not a small one.<br/>
        We did but build his pedestal,<br/>
        A narrow and a tall one.<br/>
      </p>

       </div>
       <div label="Stoic maxims">
         <p>This is education, to learn to wish that things should happen as they have</p>
         <p>We become happy by not needing happiness</p>
         <p>No one is good by accident, virtue is cultivated</p>
         <p>Who has the most? He who desires the least</p>
         <p>Justice * Courage * Wisdom * Self-Control</p>
       </div>
     </Tabs>

      <br/>
      <Link className="tic-tac" to="/"> Page One</Link>
      <Link className="tic-tac" to="/PageTwo"> Page Two</Link>
      <Link className="tic-tac" to="/ReduxPage"> Redux</Link>
    </div>
  );
};

export default PageThree
