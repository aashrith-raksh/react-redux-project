import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

const EditEvent = () => {
  const data = useRouteLoaderData('event-id');
  const event = data.event;
  return (
    <EventForm event={event}/>
  )
};

export default EditEvent;
