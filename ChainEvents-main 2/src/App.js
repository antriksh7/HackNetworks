import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { PostForm } from './components/PostForm';
import { PostDetails } from './components/PostDetails';
import './App.css';

const App = () => {
  const [postDetails, setPostDetails] = useState({ username: '', imageURL: '' });
  const [showPostDetails, setShowPostDetails] = useState(false);

  return (
    <div className="main">
      <Sidebar />
      <div className="body">
        <Header />
        <div className="container">
          <div className="wrapper">
            <PostForm setPostDetails={setPostDetails} setShowPostDetails={setShowPostDetails} />
            {showPostDetails && <PostDetails postDetails={postDetails} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
