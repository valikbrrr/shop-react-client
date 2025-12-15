export type TypeWebRoutes = {
  Home: undefined;
  Auth: undefined;
  Favorites: undefined;
  Search: undefined;
  Explorer: undefined;
  Profile: undefined;
  Cart: undefined;
  Category: {
    slug: string;
  };
};

export type TypeWebPaths = keyof TypeWebRoutes;

export interface IRoute {
  name: TypeWebPaths;
  path: string;
  component: React.ComponentType;
}
