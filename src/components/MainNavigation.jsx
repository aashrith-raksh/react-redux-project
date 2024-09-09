import { Form, NavLink, useRouteLoaderData } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { getAuthToken } from "../util";

function MainNavigation() {
  const token = useRouteLoaderData('root');
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              to={"/"}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              to={"/events"}
            >
              Events
            </NavLink>
          </li>
          {!token && <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              to={"/auth/?mode=signup"}
            >
              Create Account
            </NavLink>
          </li>}
          {token && <li>
            <Form action="/logout" method="post">
              <button>Logout</button>
            </Form>
          </li>}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
