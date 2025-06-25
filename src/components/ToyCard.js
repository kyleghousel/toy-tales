import React from "react";
import { API } from './App'

const ToyCard = ({ id, image, likes, name, onDelete }) => {

  const handleDelete = () => {
    fetch(API + id, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Delete failed")
        onDelete(id)
      })
      .catch((err) => {
        console.error('Error deleting post:', err)
      });

  }

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
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
