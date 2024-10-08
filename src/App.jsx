// Challenge / Exercise

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import EditEvent from "./pages/EditEvent.jsx";
import EventsLayout from "./pages/EventsLayout.jsx";
import NewEvent, { action as newEventAction } from "./pages/NewEvent.jsx";
import EventDetail, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from "./pages/EventDetail.jsx";
import MainNavigationPage, {
  loader as tokenLoader,
} from "./pages/MainNavigationPage.jsx";
import EventsPage, { loader as eventsLoader } from "./pages/EventsPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import AuthenticationPage, {
  action as authAction,
} from "./pages/Authentication.jsx";
import { logoutAction } from "./pages/Logout.jsx";
import { checkAuthLoader } from "./util.js";
import NewsletterPage, {
  action as newsletterSignupAction,
} from "./pages/Newsletter.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainNavigationPage />,
    errorElement: <ErrorPage />,
    id: "root",
    loader: tokenLoader,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsLayout />,
        children: [
          { index: true, element: <EventsPage />, loader: eventsLoader },
          {
            path: ":eventId",
            loader: eventDetailLoader,
            id: "event-id",
            children: [
              {
                index: true,
                element: <EventDetail />,
                action: deleteEventAction,
              },
              ,
              {
                path: "edit",
                element: <EditEvent />,
                action: newEventAction,
                loader: checkAuthLoader,
              },
            ],
          },
          {
            path: "new",
            element: <NewEvent />,
            action: newEventAction,
            loader: checkAuthLoader,
          },
        ],
      },
      { path: "newsletter", element: <NewsletterPage />, action: newsletterSignupAction },
      { path: "auth", element: <AuthenticationPage />, action: authAction },
      { path: "logout", action: logoutAction },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
