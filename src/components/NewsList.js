import React, { useState } from 'react';
import NewsCard from './NewsCard';
import environmentImg from '../img/environment.png';
import housingImg from '../img/housing.png';
import aiImg from '../img/ai.jpg';
import tennisImg from '../img/tennis.png';
import './NewsList.css';

const initialNewsData = [
  {
    id: 1,
    title: 'Climate Change and Sustainability',
    date: '29/09/2024',
    image: environmentImg,
    description: 'A recent study published in Nature Climate Change warns that global warming could lead to a significant decline in agricultural yields, particularly in tropical regions. The researchers found that even moderate warming could reduce crop production by up to 10% by the end of the century. This poses a major threat to food security, especially in developing countries'
  },
  {
    id: 2,
    title: 'Government New Affordable Housing Scheme',
    date: '01/10/2024',
    image: housingImg,
    description: 'The Indian government has announced a new affordable housing scheme aimed at providing affordable homes to low-income families. The scheme offers subsidies, interest rate reductions, and other incentives to make homeownership more accessible. The government hopes that this initiative will help address the housing shortage in the country and improve the quality of life for millions of people'
  },
  {
    id: 3,
    title: 'Artificial Intelligence and Technology',
    date: '30/09/2024',
    image: aiImg,
    description: 'In a groundbreaking development, a team of researchers has created a robot capable of self-replication. The robot, dubbed "Replicator," uses 3D printing technology to produce exact copies of itself from raw materials. This breakthrough could have significant implications for fields such as manufacturing, space exploration, and disaster relief. Experts believe that self-replicating robots could revolutionize how we produce goods and explore new environments'
  },
  {
    id: 4,
    title: 'Serena Williams Announces Retirement from Tennis',
    date: '02/10/2024',
    image: tennisImg,
    description: 'Tennis legend Serena Williams has announced her retirement from professional tennis after a long and illustrious career. Williams, who holds numerous Grand Slam titles, has been a dominant force in the sport for decades. Her retirement marks the end of an era and will be a significant loss to the tennis world.'
  }
];

const NewsList = () => {
  const [newsData, setNewsData] = useState(initialNewsData);
  const [editItemId, setEditItemId] = useState(null);
  const [formData, setFormData] = useState({ title: '', description: '' });

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Edit post function
  const handleEdit = (newsItem) => {
    setEditItemId(newsItem.id);
    setFormData({ title: newsItem.title, description: newsItem.description });
  };

  // Save updated post
  const handleSave = (id) => {
    const updatedNewsData = newsData.map((newsItem) =>
      newsItem.id === id ? { ...newsItem, ...formData } : newsItem
    );
    setNewsData(updatedNewsData);
    setEditItemId(null); // Clear the edit state after saving
  };

  // Cancel editing
  const handleCancel = () => {
    setEditItemId(null);
  };

  // Delete post function
  const handleDelete = (id) => {
    const updatedNewsData = newsData.filter((newsItem) => newsItem.id !== id);
    setNewsData(updatedNewsData);
  };

  return (
    <div className="news-list">
      {newsData.map((newsItem) => (
        <div key={newsItem.id} className="news-card">
          {/* If the current item is being edited, show the form */}
          {editItemId === newsItem.id ? (
            <div className="edit-form">
              <h3>Edit Post</h3>
              <label>
                Title:
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Description:
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows="4" // Default rows for better height
                />
              </label>
              <div className="button-container">
                <button onClick={() => handleSave(newsItem.id)}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
              </div>
            </div>
          ) : (
            // Show the regular news card if it's not being edited
            <NewsCard
              title={newsItem.title}
              date={newsItem.date}
              image={newsItem.image}
              description={newsItem.description}
              onDelete={() => handleDelete(newsItem.id)}
              onEdit={() => handleEdit(newsItem)}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default NewsList;
