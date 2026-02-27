import type { IRoute } from "../types";
import { Home } from "@/pages/home";
import { Auth } from "@/pages/auth";
import { Favorites } from "@/pages/favorites";
import { Search } from "@/pages/search";
import { Profile } from "@/pages/profile";
import { Explorer } from "@/pages/explorer";
import { Cart } from "@/pages/cart";
import { Category } from "@/pages/category";
import { Product } from "@/pages/product";

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
    name: "Profile",
    path: "/profile",
    component: Profile,
  },
  {
    name: "Explorer",
    path: "/explorer",
    component: Explorer,
  },
  {
    name: "Cart",
    path: "/cart",
    component: Cart,
  },
  {
    name: "Category",
    path: "/category/:slug",
    component: Category,
  },
  {
    name: "Product",
    path: "/product/:slug",
    component: Product,
  },
];
