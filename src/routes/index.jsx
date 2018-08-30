import App from '../App';
import Dashboard from "../layouts/Dashboard.jsx";
import Teste from "../xxx/teste.jsx"

var indexRoutes = [
  { path: "/app", name: "App", component: App },
  { path: "/teste", name: "Teste", component: Teste},
  { path: "/", name: "Dashboard", component: Dashboard }
];

export default indexRoutes;