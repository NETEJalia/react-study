import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  // useRouteMatch,
  // useParams
} from 'react-router-dom';
import ProjectData from './data/projects.json';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          {ProjectData.map((project) => {
            return(
              <li key={`${project.id}`}>
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

        <Switch>
          {ProjectData.map((project) => {
            return(
              <Route key={`${project.id}`} path={`/project/${project.number}`}>
                <p>{project.title}</p>
              </Route>
            )
          }
          )}
        </Switch>
    </Router>
  );
}

export default App;
