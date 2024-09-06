import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";

const ErrorPage = () => {
  const error = useRouteError();
  // console.log(error)

  let message = "An error occured";
  let title = "Error";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    message = "Path doesn't exist";
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
};

export default ErrorPage;
