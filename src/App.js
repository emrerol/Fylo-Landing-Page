import "./App.scss";
import Productivity from "./layouts/Action/Action.layout";
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
    </div>
  );
}

export default App;
