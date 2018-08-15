import App from '../App';
import Dashboard from "../layouts/Dashboard.jsx";

var indexRoutes = [
  { path: "/app", name: "App", component: App },
  { path: "/", name: "Dashboard", component: Dashboard }
];

export default indexRoutes;