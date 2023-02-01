import { AuthenticationLayout } from "src/Layouts";
import Home from "src/pages/Home/Home";
import Login from "src/pages/Authentication/Login/Login";
import Register from "src/pages/Authentication/Register/Register";
import Friend from "src/pages/Friend/Friend";
import SideBarMe from "src/Layouts/components/SideBar/SideBarMe/SideBarMe";
import HeaderDM from "src/Layouts/components/Header/HeaderDM/HeaderDM";
import HeaderFriend from "src/Layouts/components/Header/HeaderFriend/HeaderFriend";
import CallVideo from "src/pages/CallVideo/CallVideo";

//Public Routes
const publishRoutes = [
  {
    path: "/@me",
    component: Friend,
    sideBarLayout: SideBarMe,
    Header: HeaderFriend,
  },
  {
    path: "/@me/online",
    component: Friend,
    sideBarLayout: SideBarMe,
    Header: HeaderFriend,
  },
  {
    path: "/@me/pending",
    component: Friend,
    sideBarLayout: SideBarMe,
    Header: HeaderFriend,
  },
  {
    path: "/@me/:dmChannelId",
    component: Home,
    sideBarLayout: SideBarMe,
    Header: HeaderDM,
  },
  { path: "/:serverId", component: Home },
  { path: "/:serverId/:channelId", component: Home },
  { path: "/login", component: Login, layout: AuthenticationLayout },
  { path: "/register", component: Register, layout: AuthenticationLayout },
  { path: "/callVideo/:serverId", component: CallVideo, layout: null },
];

const privateRoutes = [];

export { publishRoutes, privateRoutes };
