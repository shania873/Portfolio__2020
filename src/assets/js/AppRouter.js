import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

import Home from './Home';
import About from './About';
import Skills from './Skills';
import Work from './Work';
import Project from './Project';
import Contact from './Contact';
import Child from './Child';

const AppRouter = (props) => (
    <main className="main--website">  
        <Switch>
              <Route exact={true}  path="/" component={Home} />     

                  
              <Route path="/about" component={About}/>           
              <Route path="/skills" component={Skills}/>        
              <Route path="/work" component={Work}/>         
              <Route path="/project" component={Project}/>           
              <Route path="/contact" component={Contact}/>   
              <Route path="/:id" name="jkljklkl" component={Child} />
        </Switch>
     </main>

)
    
  
  export default AppRouter;