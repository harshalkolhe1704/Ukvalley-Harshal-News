import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NewsList from './components/NewsList';
import AddNews from './components/AddNews';
import './App.css';
import climate from './img/environment.png';
import house from './img/housing.png';
import ai from './img/ai.jpg';
import tennis from './img/tennis.png';

const App = () => {
  const [newsData, setNewsData] = useState([
    { id: 1, title: 'Climate Change and Sustainability', date: '30/09/2024', image: climate, description: 'A new study reveals...' },
    { id: 2, title: 'Affordable Housing Scheme', date: '01/10/2024', image: house, description: 'The government has announced...' },
    { id: 3, title: 'Artificial Intelligence and Technology', date: '02/10/2024', image: ai, description: 'In a groundbreaking development, a team of researchers has created a robot capable of self-replication. The robot, dubbed "Replicator," uses 3D printing technology to produce exact copies of itself from raw materials. This breakthrough could have significant implications for fields such as manufacturing, space exploration, and disaster relief. Experts believe that self-replicating robots could revolutionize how we produce goods and explore new environments.' },
    { id: 3, title: 'Serena Williams Announces Retirement from Tennis', date: '03/10/2024', image: tennis, description: 'Tennis legend Serena Williams has announced her retirement from professional tennis after a long and illustrious career. Williams, who holds numerous Grand Slam titles, has been a dominant force in the sport for decades. Her retirement marks the end of an era and will be a significant loss to the tennis world' }

  ]);

  // Function to add a new post
  const handleAddNews = (newPost) => {
    setNewsData([newPost, ...newsData]); // Add new post to the beginning of the list
  };

  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>Harshal News</h1>
          <Link to="/add-news">
            <i className="fas fa-plus-circle" style={{ fontSize: '40px', marginLeft: '30px', color:'white' }}></i> {/* Add Icon */}
          </Link>
        </header>

        <Routes>
          <Route path="/" element={<NewsList newsData={newsData} />} />
          <Route path="/add-news" element={<AddNews onAddNews={handleAddNews} />} />
        </Routes>

      </div>
    </Router>
  );
};

export default App;
