// import React from "react";
import Access from "../../images/icon-access-anywhere.svg";
import Security from "../../images/icon-security.svg";
import Collaboration from "../../images/icon-collaboration.svg";
import Store from "../../images/icon-any-file.svg";
import TestimonialCard from "../../components/testimonial-card/Testimonial-Card.component";
import "./TestimonialLayout.style.scss";

const defaults = [
  {
    logo: Access,
    heading: "Access your files, anywhere",
    explain:
      "anywhere The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
  },
  {
    logo: Security,
    heading: "Security you can trust",
    explain:
      "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
  },
  {
    logo: Collaboration,
    heading: "Real-time collaborationt",
    explain:
      "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
  },
  {
    logo: Store,
    heading: "Store any type of file",
    explain:
      "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared",
  },
];

function Testimonial() {
  return (
    <div className="testimonial">
      {defaults.map((item) => (
        <TestimonialCard
          extraClass="div"
          logo={item.logo}
          heading={item.heading}
          explain={item.explain}
        />
      ))}
    </div>
  );
}

export default Testimonial;
