import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation.jsx";

const EventsLayout = () => {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
};

export default EventsLayout;
