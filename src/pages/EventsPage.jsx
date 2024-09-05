import { Link } from "react-router-dom";

const EventsPage = () => {
  return (
    <div>
      Events page
      <ul>
        <li>
          <Link to={"/events/1"}>Event 1</Link>
        </li>
        <li>
          <Link to={"/events/2"}>Event 2</Link>
        </li>
        <li>
          <Link to={"/events/3"}>Event 3</Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link to={"/events/1/edit"}>Edit Event 1</Link>
        </li>
        <li>
          <Link to={"/events/2/edit"}>Edit Event 2</Link>
        </li>
        <li>
          <Link to={"/events/3/edit"}>Edit Event 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default EventsPage;
