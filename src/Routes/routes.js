import Home from "../Pages/Home/Home";
import Campaign from "../Pages/Campaign/Campaign";
import NotFound from "../Pages/NotFound/NotFound";


const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/campaign",
    component: Campaign,
    exact: true,
  },
  // Default
  {
    path: "*",
    component: NotFound,
  },
];

export default routes;
