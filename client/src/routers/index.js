import { AuthenticationLayout } from "src/Layouts";
import Home from "src/pages/Home/Home";
import Login from "src/pages/Authentication/Login/Login";
import Register from "src/pages/Authentication/Register/Register";

//Public Routes
const publishRoutes = [
  { path: "/", component: Home },
  { path: "/:serverId", component: Home },
  { path: "/login", component: Login, layout: AuthenticationLayout },
  { path: "/register", component: Register, layout: AuthenticationLayout },
];

const privateRoutes = [];

export { publishRoutes, privateRoutes };
