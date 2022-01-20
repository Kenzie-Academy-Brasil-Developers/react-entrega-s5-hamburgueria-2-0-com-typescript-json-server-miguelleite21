import { Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Cart from "../pages/Cart";

export const Routes = () => (
  <Switch>
    <Route exact path={"/"} component={Login} />
    <Route path={"/register"} component={Register} />
    <Route path={"/home"} component={Home} />
    <Route path={"/cart"} component={Cart} />
  </Switch>
);
