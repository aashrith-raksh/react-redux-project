// Challenge / Exercise

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import EditEvent from "./pages/EditEvent.jsx";
import EventsLayout from "./pages/EventsLayout.jsx";
import NewEvent from "./pages/NewEvent.jsx";
import EventDetail, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from "./pages/EventDetail.jsx";
import MainNavigationPage from "./pages/MainNavigationPage.jsx";
import EventsPage, { loader as eventsLoader } from "./pages/EventsPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainNavigationPage />,
    errorElement: <ErrorPage />,
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
              { path: "edit", element: <EditEvent /> },
            ],
          },
          { path: "new", element: <NewEvent /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
