import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import Trainings from "./pages/Trainings";
import Articles from "./pages/Articles";
import Faq from "./pages/FAQ";

function App() {

  const router = createBrowserRouter([
    {
      path: '/website',
      element: <Homepage />,
    },
    {
      path:'/about-us/',
      element: <AboutUs />
    },
    {
      path:'/trainings/',
      element: <Trainings />
    },
    {
      path:'articles/',
      element: <Articles />
    },
    {
      path:'/faq/',
      element: <Faq />
    },
  ]);

  return <RouterProvider router = {router} />
}



export default App
