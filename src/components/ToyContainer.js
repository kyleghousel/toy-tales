import React from "react";
import ToyCard from "./ToyCard";

const ToyContainer = ({ onDelete, onLike, toys }) => {
  return (
    <div id="toy-collection">{
      toys.map(({id, image, likes, name}) => (
        <ToyCard
          key={id}
          id={id}
          image={image}
          likes={likes}
          name={name}
          onDelete={onDelete}
          onLike={onLike}
        />
      ))
    }</div>
  );
}

export default ToyContainer;
