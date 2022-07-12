import "./email.styles.scss";
import MyButton from "../button/Button.component";
const Email = () => {
  return (
    <div className="email">
      <h1 id="mail-title">Get early access today</h1>
      <span id="mail-explain">
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you
      </span>
      <div className="email__container">
        <input
          type="email"
          placeholder="email@example.com"
          className="email__container--input"
        />
        <MyButton text={"Get Started"} />
      </div>
    </div>
  );
};

export default Email;
