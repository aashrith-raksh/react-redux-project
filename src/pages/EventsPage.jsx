import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList.jsx";

const EventsPage = () => {
  const data = useLoaderData();
  const events = data.events;
  return (
    <div>
      <EventsList events={events} />
    </div>
  );
};

const loader = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // throw error
  } else {
    return response;
  }
};

export { loader };

export default EventsPage;
