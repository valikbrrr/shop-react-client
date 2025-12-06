export const SERVER_URL = import.meta.env.VITE_SERVER_URL;
export const API_URL = `${SERVER_URL}/api`;

console.log('VITE_SERVER_URL:', import.meta.env.VITE_SERVER_URL);
console.log('SERVER_URL:', SERVER_URL);
console.log('API_URL:', API_URL);

export const getAuthUrl = (string: string) => `/auth${string}`;
export const getUsersUrl = (string: string) => `/users${string}`;
export const getProductsUrl = (string: string) => `/products${string}`;
export const getCategoriesUrl = (string: string) => `/categories${string}`;
export const getOrdersUrl = (string: string) => `/orders${string}`;
