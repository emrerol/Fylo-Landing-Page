import ProductivityImg from "../../images/stay-productive.png";
import RightArrow from "../../images/icon-arrow.svg";
import "./Action.style.scss";

const Productivity = () => {
  return (
    <div className="productivity">
      <img
        src={ProductivityImg}
        alt="Productivity"
        className="productivity__image"
      />
      <div className="productivity__text-holder">
        <p className="productivity__text-holder--header">
          Stay productive, wherever you are
        </p>
        <p className="productivity__text-holder--text">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs
        </p>
        <p className="productivity__text-holder--text">
          Securely share files and folders wihh friends, family and colleagues
          for live colllaboration. No email attachments required.
        </p>
        <div className="productivity__text-holder--route">
          <a className="route">See how Fylo works</a>
          <img src={RightArrow} />
        </div>
      </div>
    </div>
  );
};

export default Productivity;
