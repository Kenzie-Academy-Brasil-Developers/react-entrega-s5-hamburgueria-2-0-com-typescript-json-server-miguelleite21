import { Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Cart from "../pages/Cart";

export const Routes = () => (
  <Switch>
    <Route exact path={"/"} component={Login} />
    <Route exact path={"/register"} component={Register} />
    <Route exact path={"/home"} component={Home} />
    <Route exact path={"/cart"} component={Cart} />
  </Switch>
);
