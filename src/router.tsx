import { createBrowserRouter } from "react-router";
import HomePage from "./pages/home/Page";
import LoginPage from "./pages/login/Page";

const router = createBrowserRouter([
    {
        path: "/home",
        element: <HomePage></HomePage>,
    },
    {
        path: "/login",
        element: <LoginPage></LoginPage>,
    },
]);

export default router;