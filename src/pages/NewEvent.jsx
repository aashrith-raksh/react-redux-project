import { redirect, json } from "react-router-dom";
import EventForm from "../components/EventForm";
import { getAuthToken } from "../util";

const NewEvent = () => {
  return <EventForm method={"POST"} />;
};

export async function action({ request, params }) {
  const formData = await request.formData();
  const eventId = params.eventId;

  const token = getAuthToken();

  const newEventData = {
    title: formData.get("title"),
    image: formData.get("image"),
    description: formData.get("description"),
    date: formData.get("date"),
  };

  let url = "http://localhost:8080/events/";

  if (request.method === "PATCH") {
    url = "http://localhost:8080/events/" + eventId;
  }

  const response = await fetch(url, {
    method: request.method,
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(newEventData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw json(
      {
        message: `Couldn't create the event...${errorData.message}`,
      },
      {
        status: 500,
      }
    );
  } else {
    return redirect("/events");
  }
}

export default NewEvent;
