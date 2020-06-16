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

const AppRouter = () => (
    <main className="main--website">  
    <Switch>
          <Route exact={true}  path="/" >
            <Home />
          </Route>
          <Route path="/about" component={About}>
            <About />
          </Route>
          <Route path="/skills" component={Skills}>
            <Skills />
          </Route>
          <Route path="/work" component={Work}>
            <Work />
          </Route>
          <Route path="/project" component={Project}>
            <Project />
          </Route>
          <Route path="/contact" component={Contact}>
            <Contact />
          </Route>
          <Route path="/projectWork/:id" component={Child}>
              <Child />
          </Route>
        </Switch>
        </main>

)
    
  
  export default AppRouter;