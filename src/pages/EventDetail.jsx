import { useLoaderData, json, useRouteLoaderData, redirect } from "react-router-dom";
import EventItem from "../components/EventItem.jsx";

const EventDetail = () => {
  const data = useRouteLoaderData("event-id");
  const event = data.event;
  return (
    <>
      <EventItem event={event} />
    </>
  );
};

export async function loader({ request, params }) {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId);

  if (!response.ok) {
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

export async function action({ params, request }) {
  const eventId = params.eventId;

  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
  });

  if (!response.ok) {
    throw json(
      {
        message: "Couldn't delete the event",
      },
      {
        status: 500,
      }
    );
  } else {
    return redirect('/events');
  }
}

export default EventDetail;
