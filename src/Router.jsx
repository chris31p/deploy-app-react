//Crear una función llamada router para todas las rutas que necesite

import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import RecipeList from "./pages/RecipeList";
import RecipeDetail from "./pages/RecipeDetail";
import Layout from "./components/Layout";

// const Router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/recetas",
//     element: <RecipeList />,
//   },
//   {
//     path: "/recetas/:nombre",
//     element: <RecipeDetail />,
//   },
// ]);

const Router = createBrowserRouter([
    {path: '/', element:<Layout/>, children:[
        {path: "/",element: <App />},
        {path: "/recetas",element: <RecipeList />},
        {path: "/recetas/:nombre",element: <RecipeDetail />}
    ]}
])

export default Router;
