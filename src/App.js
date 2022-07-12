import "./App.scss";
import Productivity from "./layouts/Action/Action.layout";
import ComSection from "./layouts/ComSection/ComSection.layout";
import EmailLayout from "./layouts/EmailLayout/Email-Layout.component";
import Footer from "./layouts/Footer/Footer.layout";
import Header from "./layouts/Header/Header.layout";
import Landing from "./layouts/Landing/Landing.layout";
import Testimonial from "./layouts/Testimonial/Testimonial.layout";

function App() {
  return (
    <>
      <Header />
      <Landing />
      <Testimonial />
      <Productivity />
      <ComSection />
      <EmailLayout />
      <Footer />
    </>
  );
}

export default App;
