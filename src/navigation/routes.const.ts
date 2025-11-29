import { Home } from "@/components/screens/home/Home";
import Auth from "@/components/screens/auth/Auth";
import type { IRoute } from "@/types/navigation.types";
import Favorites from "@/components/screens/favorites/Favorites";
import Search from "@/components/screens/search/Search";
import Explorer from "@/components/screens/explorer/Explorer";
import Profile from "@/components/screens/profile/Profile";

export const routes: IRoute[] = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "Auth",
    path: "/auth",
    component: Auth,
  },
  {
    name: "Favorites",
    path: "/favorites",
    component: Favorites,
  },
  {
    name: "Search",
    path: "/search",
    component: Search,
  },
  {
    name: "Explorer",
    path: "/explorer",
    component: Explorer,
  },
  {
    name: "Profile",
    path: "/profile",
    component: Profile,
  },
];
