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

  if (token) {
    return token;
  }

  return null;
}

export default MainNavigationPage;
