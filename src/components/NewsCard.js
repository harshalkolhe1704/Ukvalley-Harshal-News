import React from 'react';
import './NewsCard.css';

const NewsCard = ({ title, date, image, description, onDelete, onEdit }) => {
  return (
    <div className="news-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p className="date">{date}</p>
      <p>{description}</p>
      <div className="button-container">
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default NewsCard;
