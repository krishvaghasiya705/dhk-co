import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./defaultLayout";
import Home from "../module/home";
import Projects from "../module/projects";
import Studio from "../module/studio";
import Journal from "../module/journal";
import Articledetail from "../module/articledetail";
import Contact from "../module/contact";
import ErrorPage from "../module/errorpage";

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
            {
                path: "/studio",
                element: <Studio />
            },
            {
                path: "/journal",
                element: <Journal />
            },
            {
                path: "/journal/:title",
                element: <Articledetail />
            },
            {
                path: "/contact",
                element: <Contact />
            },
        ]
    },
    {
        path: "*",
        element: <ErrorPage />
    }
])

export default router