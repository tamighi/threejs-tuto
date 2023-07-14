import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  StarCanvas,
  Tech,
  Works,
} from "./components";

import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar /> <Hero />
        </div>
      <div className="relative z-0 bg-primary">
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
      </div>
      <div className="relative z-0">
        <Contact />
        <StarCanvas />
      </div>
    </BrowserRouter>
  );
};

export default App;
