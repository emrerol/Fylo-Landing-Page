import "./CommentCard.style.scss";

const CommentCard = ({ text, name, title }) => {
  return (
    <div className="comment-card">
      <div className="comment-card__text">
        <p>{text}</p>
      </div>
      <div className="comment-card__info">
        <div className="comment-card__info--img"></div>
        <div className="comment-card__info--person">
          <label className="comment-card__info--person--name">{name}</label>
          <label className="comment-card__info--person--title">{title}</label>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
