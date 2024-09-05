import { NavLink, Outlet } from "react-router-dom";

const MainNavigation = () => {
  return (
    <>
      <div>MainNavigation</div>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"} >HomePage</NavLink>
          </li>
          <li>
            <NavLink to={"/events"}>Events</NavLink>
          </li>
          <li>
            <NavLink to={"/events/new"}>New Event</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default MainNavigation;
