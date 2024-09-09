import { json, redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm";

function AuthenticationPage() {
  return <AuthForm />;
}

export async function action({ request, params }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "signup";

  const requestBody = await request.formData();

  const authBody = {
    email:requestBody.get('email'),
    password:requestBody.get('password')
  }

  const response = await fetch("http://localhost:8080/" + mode, {
    method: "POST",
    body: JSON.stringify(authBody),
    headers: {
      "Content-Type": "application/json",
    },
  });

  
  if(response.status === 422 || response.status === 401){
    return response
  }

  if (!response.ok) {
    throw json(
      {
        message: "Couldn't authenticate user",
      },
      {
        status: 500,
      }
    );
  }

  const redData = await response.json();
  const token = redData.token;

  localStorage.setItem('token', `Bearer ${token}`);
  const expirationDate = new Date();
  expirationDate.setHours(expirationDate.getHours() + 1);

  const expirationTime = expirationDate.toISOString();
  localStorage.setItem('expiration', expirationTime);



  return redirect("/");
}

export default AuthenticationPage;
