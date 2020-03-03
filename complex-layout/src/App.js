import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom';
import ProjectData from './data/projects.json';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
              <nav>
                <ul>
                  {ProjectData.map((project) => {
                    return(
                      <li>
                        <Link to={`/project/${project.number}`}>
                          <div className="project-number">{project.number}</div>
                          <div className="project-title">{project.title}</div>
                          <div className="project-subtitle">{project.subtitle}</div>
                        </Link>
                      </li>
                    )
                  }
                  )}
                </ul>
              </nav>
          </Switch>

          {/* <Switch>
            <Route path={}></Route>
          </Switch> */}
                  
      </Router>
    </div>
  );
}

export default App;
