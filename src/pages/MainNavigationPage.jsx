import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation.jsx";

const MainNavigationPage = () => {

  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
};

export default MainNavigationPage;
