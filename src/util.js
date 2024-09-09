import { redirect } from "react-router-dom";

export function getAuthToken(){
    const authToken = localStorage.getItem('token');
    return authToken;
}

export function checkAuthLoader(){
    const authToken = getAuthToken();
    return authToken || redirect("/");
}