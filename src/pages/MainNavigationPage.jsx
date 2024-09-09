import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation.jsx";
import { getAuthToken } from "../util.js";

const MainNavigationPage = () => {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
};

export function loader() {
  const token = getAuthToken();
  return token || null;
}

export default MainNavigationPage;
