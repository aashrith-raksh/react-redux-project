import EventsList from "../components/EventsList.jsx";

const events = [
  {
    id: "e1",
    title: "React Conference 2024",
    date: "2024-09-15",
    image: "https://example.com/images/react-conference.jpg",
  },
  {
    id: "e2",
    title: "JavaScript Workshop",
    date: "2024-10-10",
    image: "https://example.com/images/js-workshop.jpg",
  },
  {
    id: "e3",
    title: "CSS Grid Masterclass",
    date: "2024-11-01",
    image: "https://example.com/images/css-grid-masterclass.jpg",
  },
  {
    id: "e4",
    title: "Node.js Developer Summit",
    date: "2024-12-05",
    image: "https://example.com/images/nodejs-summit.jpg",
  },
  {
    id: "e5",
    title: "Frontend Dev Conference",
    date: "2024-09-25",
    image: "https://example.com/images/frontend-conference.jpg",
  },
];

const EventsPage = () => {
  return (
    <div>
      <EventsList events={events} />
    </div>
  );
};

export default EventsPage;
