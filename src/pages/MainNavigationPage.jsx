import { Outlet, useLoaderData, useSubmit } from "react-router-dom";
import MainNavigation from "../components/MainNavigation.jsx";
import { getAuthToken } from "../util.js";
import { useEffect } from "react";

const MainNavigationPage = () => {
  const submit = useSubmit();
  function handleLogout() {
    submit(null, { method: "POST", action: "/logout" });
  }

  const token = useLoaderData();
  useEffect(() => {
    if (!token) {
      return;
    }

    const storedExpirationDate = localStorage.getItem("expiration");
    const expirationDate = new Date(storedExpirationDate); //convert to Date type from ISO(stored in localStorage)

    const currentTime = Date.now();
    const timeUntilLogout = expirationDate.getTime() - currentTime;

    if (timeUntilLogout > 0) {
      const logoutTimer = setTimeout(handleLogout, timeUntilLogout);

      return () => {
        clearTimeout(logoutTimer);
      };
    } else {
      handleLogout();
    }
  }, [token]);

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
