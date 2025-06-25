import React, { useState } from "react";
import { API } from "./App"

const ToyForm = ({ onAddToy }) => {

  const [formData, setFormData] = useState({
    name: '',
    image: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    const newToy = {
      name: formData.name,
      image: formData.image,
      likes: 0,
    }

    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newToy)
    })
      .then((res) => {
        if (!res.ok) throw new Error('Bad network response');
        return res.json();
      })
      .then((addedToy) => {
        onAddToy(addedToy)
        setFormData({
          name: '',
          image: ''
        })
      })
      .catch((error) => {
        console.error("POST failed:", error);
      });

  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={formData.image}
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
