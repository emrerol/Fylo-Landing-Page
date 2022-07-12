import CommentCard from "../../components/comment/CommentCard.component";
import "./ComSection.style.scss";
import Quote from "../../images/bg-quotes.png";

const ComSection = () => {
  const commentData = [
    {
      text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      name: "Satish Patel",
      title: "Founder & CEO, Huddle",
    },
    {
      text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      name: "Bruce McKenzie",
      title: "Founder & CEO, Huddle",
    },
    {
      text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      name: "Iva Boyd",
      title: "Founder & CEO, Huddle",
    },
  ];
  return (
    <div>
      <img src={Quote} alt="Quote" className="quote-img" />
      <div className="comsection-wrapper">
        {commentData.map((person) => (
          <CommentCard
            text={person.text}
            name={person.name}
            title={person.title}
          />
        ))}
      </div>
    </div>
  );
};

export default ComSection;
