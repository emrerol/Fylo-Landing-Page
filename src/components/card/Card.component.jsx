import IntroIllust from "../../images/illustration-intro.png";
import "./Card.style.scss";
import MyButton from "../button/Button.component";

const Card = () => {
  return (
    <div className="card">
      <img className="card__image" src={IntroIllust} alt="Intro" />
      <div className="card__text-container">
        <p className="card__text">
          All your files in one secure location, <br /> accessible anywhere.
        </p>
        <div className="card__text-container--secondary">
          <p>
            Fylo stores all your most important files in one secure location.{" "}
            <br />
            Access them wherever you need, share and collaborate with <br />{" "}
            friends family, and co-workers.
          </p>
        </div>
      </div>
      <MyButton text={"Get Started"} />
    </div>
  );
};

export default Card;
