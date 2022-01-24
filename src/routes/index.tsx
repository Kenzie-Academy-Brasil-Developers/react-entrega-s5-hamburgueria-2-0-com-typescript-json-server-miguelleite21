import { Switch } from "react-router-dom";
import { Route } from "./Route";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Cart from "../pages/Cart";

export const Routes = () => (
  <Switch>
    <Route exact path={"/"} component={Login} />
    <Route path={"/register"} component={Register} />
    <Route path={"/home"} component={Home} isPrivate />
    <Route path={"/cart"} component={Cart} isPrivate />
  </Switch>
);
