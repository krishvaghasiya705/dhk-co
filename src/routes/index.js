import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./defaultLayout";
import Home from "../module/home";
import Projects from "../module/projects";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/projects",
                element: <Projects />
            },
            {
                path: "/projects/:title",
                element: <Projects />
            },
        ]
    }
])

export default router