import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import Trainings from "./pages/Trainings";
import Articles from "./pages/Articles";
import Faq from "./pages/Faq";
import LearnMore from "./pages/LearnMore";

function App() {

  const router = createBrowserRouter([
    {
      path: '/website',
      element: <Homepage />,
    },
    {
      path:'website/about-us/',
      element: <AboutUs />
    },
    {
      path:'website/trainings/',
      element: <Trainings />
    },
    {
      path:'website/articles/',
      element: <Articles />
    },
    {
      path:'website/faq/',
      element: <Faq />
    },
    {
      path:'website/learn-more/',
      element: <LearnMore />
    },
  ]);

  return <RouterProvider router = {router} />
}



export default App
