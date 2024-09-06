import { redirect, json } from "react-router-dom";
import EventForm from "../components/EventForm";

const NewEvent = () => {
  return <EventForm />;
};

export async function action({ request, params }) {
  const formData = await request.formData();

  const newEventData = {
    title: formData.get("title"),
    image: formData.get("image"),
    description: formData.get("description"),
    date: formData.get("date"),
  };

  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
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
