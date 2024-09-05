import { useParams } from "react-router-dom";

const EventDetail = () => {
  const params = useParams();
  const eventId = params.eventId;
  return <h1>Details about event {eventId}</h1>;
};

export default EventDetail;
