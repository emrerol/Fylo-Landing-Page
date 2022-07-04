import "./App.scss";
import Productivity from "./layouts/Action/Action.layout";
import ComSection from "./layouts/ComSection/ComSection.layout";
import Header from "./layouts/Header/Header.layout";
import Landing from "./layouts/Landing/Landing.layout";
import Testimonial from "./layouts/Testimonial/Testimonial.layout";

function App() {
  return (
    <div>
      <Header />
      <Landing />
      <Testimonial />
      <Productivity />
      <ComSection />
    </div>
  );
}

export default App;
