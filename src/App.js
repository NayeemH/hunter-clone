import { BrowserRouter as Router, Switch } from "react-router-dom";
import { RouteWithSubRoutes } from "./Routes/RouteWithSubRoutes";

import routes from "./Routes/routes";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
