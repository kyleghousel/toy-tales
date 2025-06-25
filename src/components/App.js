import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

const API = 'http://localhost:3001/toys/'

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch(API)
      .then(res=>res.json())
      .then(setToys)
  }, [])

  const handleClick = () => {
    setShowForm((showForm) => !showForm);
  }

  const handleToyDonation = (id) => {
    setToys(toys.filter((toy) => toy.id !== id))
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={(newToy) => setToys(prev => [...prev, newToy])}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onDelete={handleToyDonation}/>
    </>
  );
}

export default App;
export { API }
