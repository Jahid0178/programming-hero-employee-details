import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../src/components/Home/Home";
import Home from "../src/components/Home/Home";
import Employees from "./components/Employees/Employees";
import NotFound from "./components/NotFound/NotFound";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Employee from "./components/Employee/Employee";

function App() {
  return (
    <div>
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/employees">
            <Employees></Employees>
          </Route>
          <Route path="/employees/:id">
            <Employee></Employee>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
