import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddNews.css';


const AddNews = ({ onAddNews }) => {
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    date: '',
    image: '',
    description: ''
  });

  const navigate = useNavigate(); // Hook to navigate to another route

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate a unique id for the new post
    const newPost = {
      ...formData,
      id: Date.now(), // Generating a unique id based on timestamp
    };

    onAddNews(newPost);

    // After adding, redirect back to the news list
    navigate('/');
  };

  return (
    <div className="add-news-form">
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <label>Image URL:</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="5"
          required
        />

        <button type="submit">Add News</button>
      </form>
    </div>
  );
};

export default AddNews;
