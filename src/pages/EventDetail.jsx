import { useLoaderData, json, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem.jsx";

const EventDetail = () => {
  const data = useRouteLoaderData('event-id');
  const event = data.event;
  return (
    <>
      <EventItem event={event} />
    </>
  );
};

export async function loader({ request, params }) {
  const eventId = params.eventId;
  console.log(eventId);
  const response = await fetch("http://localhost:8080/events/" + eventId);

  if (!response.ok) {
    console.log("res no ok");
    return json(
      {
        message: "Couldn't fetch details about the event",
      },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}

export default EventDetail;
