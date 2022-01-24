import { ComponentType } from "react";
import { Redirect, Route as ReactRoute, RouteProps } from "react-router-dom";
import { useAuth } from "../providers/AuthProviders";
interface Props extends RouteProps {
  isPrivate?: boolean;
  component: ComponentType;
}
export const Route = ({
  isPrivate = false,
  component: Component,
  ...rest
}: Props) => {
  const { authToken } = useAuth();
  return (
    <ReactRoute
      {...rest}
      render={() =>
        isPrivate === !!authToken ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? "/" : "/home"} />
        )
      }
    />
  );
};
