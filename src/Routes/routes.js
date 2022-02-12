import Home from "../Pages/Home/Home";
import Campaign from "../Pages/Campaign/Campaign";
import CampaignActivity from "../Pages/CampaignActivity/CampaignActivity";
import NotFound from "../Pages/NotFound/NotFound";


const routes = [
  // Original routes
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/campaigns",
    component: Campaign,
    exact: true,
  },

  // Test routes
  {
    path: "/campaigns/activity",
    component: CampaignActivity,
    exact: true,
  },


  // Default routes (404)
  {
    path: "*",
    component: NotFound,
  },
];

export default routes;
