import {  AuthenticationLayout } from "src/Layouts";
import Home from "src/pages/Home/Home";
import Login from "src/pages/Authentication/Login/Login";

//Public Routes
const publishRoutes = [
  { path: "/", component: Home },
  { path: "/login", component: Login, layout: AuthenticationLayout },
];

const privateRoutes = [];

export { publishRoutes, privateRoutes };
