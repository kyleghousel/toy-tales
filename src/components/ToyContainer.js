import React from "react";
import ToyCard from "./ToyCard";

const ToyContainer = ({ toys }) => {
  return (
    <div id="toy-collection">{
      toys.map(({id, image, likes, name}) => (
        <ToyCard
          key={id}
          id={id}
          image={image}
          likes={likes}
          name={name}
        />
      ))
    }</div>
  );
}

export default ToyContainer;
