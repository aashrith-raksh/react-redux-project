import { useFetcher } from "react-router-dom";
import classes from "./NewsletterSignup.module.css";
import { useEffect, useRef } from "react";

function NewsletterSignup() {
  const fetcher = useFetcher();
  const inputRef = useRef(null);

  const { data, state } = fetcher;

  console.log(data);

  useEffect(() => {
    const clearInput = () => {
      inputRef.current.value = "";
    };

    if (state === "idle" && data) {
      alert(data.message);
      clearInput();
    }
  }, [data, state]);

  return (
    <fetcher.Form
      action="/newsletter"
      method="post"
      className={classes.newsletter}
    >
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
        name="email"
        ref={inputRef}
      />
      <button disabled={state === "submitting"}>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
