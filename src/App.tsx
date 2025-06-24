import {Toaster, Toaster as Sonner} from "@/components/ui/sonner";
import {TooltipProvider} from "@/components/ui/tooltip";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {createBrowserRouter, RouterProvider} from "react-router";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "*",
        element: <NotFound/>,
    },
]);

const App = () => (
    <QueryClientProvider client={queryClient}>
        <TooltipProvider>
            <RouterProvider router={router}/>
            <Toaster/>
            <Sonner/>
        </TooltipProvider>
    </QueryClientProvider>
);

export default App;