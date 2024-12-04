import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import "./App.css";
import Contact from "./components/Contact";
import R from "./components/R";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ConsultationForm from "./components/ConsultationForm";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Hero />
          <Services />
          <Contact></Contact>
          <R></R>
          <Testimonials />
          <Footer />
        </>
      ),
    },
    {
      path: "/home",
      element: (
        <>
          <Navbar />
          <Hero />
          <Services />
          <Contact></Contact>
          <R></R>
          <Testimonials />
          <Footer />
        </>
      ),
    },
    {
      path: "/Services",
      element: (
        <>
          <Navbar />
          <Services />
        </>
      ),
    },
    {
      path: "/result",
      element: (
        <>
          <Navbar />
          <Testimonials />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <Navbar />
          <Contact></Contact>
        </>
      ),
    },
    {
      path: "/gallery",
      element: (
        <>
          <Navbar />
          <R></R>
        </>
      ),
    },
    {
      path: "/book-consultation",
      element: (
        <>
          <Navbar />
          <ConsultationForm></ConsultationForm>
        </>
      ),
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;