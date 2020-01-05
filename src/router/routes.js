import { routes as home } from "../pages/home";
import { routes as auth } from "../modules/auth";
import { routes as marcas } from "../pages/marcas";
import { routes as tipos } from "../pages/tipos";
import { routes as produtos } from "../pages/produtos";

export default [...auth, ...home, ...marcas, ...tipos, ...produtos];
