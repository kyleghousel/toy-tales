import React from "react";

const ToyCard = ({ id, image, likes, name }) => {
  return (
    <div className="card" id={id}>
      <h2>{name && name}</h2>
      <img
        src={image && image}
        alt={name && name}
        className="toy-avatar"
      />
      <p>{likes && likes} Likes </p>
      <button className="like-btn">Like {"<3"}</button>
      <button className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
