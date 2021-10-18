import "./app.scss";
import Home from './pages/home/Home';
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  const user= true;
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" component={Register}/>
        <Route exact={true} path="/login" component={Login}/>
        <Route exact={true} path="/home" component={Home}/>
        <Route path="/movies">
          <Home type="movie" />
        </Route>
        <Route path="/series">
          <Home type="series" />
        </Route>
        <Route path="/watch">
          <Watch />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
