import React, { useState } from 'react';
import './PostForm.css';

export function PostForm({ setPostDetails, setShowPostDetails }) {
  const [postText, setPostText] = useState('');

  const postData = async () => {
    try {
      // Generate current timestamp
      const currentTimestamp = new Date().toISOString();

      // POST new post
      const postResponse = await fetch('https://us-west-2.aws.neurelo.com/rest/Posts/__one?', {
        method: 'POST',
        headers: {
          'X-API-KEY': 'neurelo_9wKFBp874Z5xFw6ZCfvhXcyZwIhjXrOrzo+2fbj9Wyc+N76gNofSpZE6khH1WOvpgPPlsyWI8qZwaQj5h7Wc75lgoIqVVxmXfgXWmfsN6z04zXw00K/erQLTv4Tyrf2AsLgJBQjtjdMftxtOCjzAMlCZMoyjQhnK2unq5Ft3N/XqU+ztY7GQFJ9gBXnn6/TH_f6VuX9fXgGJAZpd/z3F798xUxNh44dROqcQ5eO8HF0k='
        },
        body: JSON.stringify({
          "Image": postText, // Use post text as Image value
          "Poster": {
            "email": "user101@example.com",
            "id": "60d5f48398d1a0c10f0d6e4d",
            "password": "$2a$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36d6N3Q5N2cR.ZPR0oTQ2/S",
            "username": "user101"
          },
          "comments": [
            "Nice picture!",
            "Looks great!",
            "Where is this?"
          ],
          "timestamp": currentTimestamp // Use current timestamp
        })
      });

      if (!postResponse.ok) {
        throw new Error('Failed to add new post');
      }

      // GET latest post
      const getResponse = await fetch(
        'https://us-west-2.aws.neurelo.com/rest/Posts?order_by=%5B%0A++%7B%0A++++%22timestamp%22%3A+%22desc%22%0A++%7D%0A%5D&take=1',
        {
          method: 'GET',
          headers: {
            'X-API-KEY': 'neurelo_9wKFBp874Z5xFw6ZCfvhXcyZwIhjXrOrzo+2fbj9Wyc+N76gNofSpZE6khH1WOvpgPPlsyWI8qZwaQj5h7Wc75lgoIqVVxmXfgXWmfsN6z04zXw00K/erQLTv4Tyrf2AsLgJBQjtjdMftxtOCjzAMlCZMoyjQhnK2unq5Ft3N/XqU+ztY7GQFJ9gBXnn6/TH_f6VuX9fXgGJAZpd/z3F798xUxNh44dROqcQ5eO8HF0k='
          }
        }
      );

      if (!getResponse.ok) {
        throw new Error('Failed to fetch latest post');
      }

      const data = await getResponse.json();

      // Extract the first post's username and image URL
      const firstPost = data.data[0];
      const postDetails = {
        username: firstPost.Poster.username,
        imageURL: firstPost.Image,
      };

      // Log the post details
      console.log(postDetails);

      // Update the post details state and show the PostDetails component
      setPostDetails(postDetails);
      setShowPostDetails(true);
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postData();
  };

  const handleInputChange = (event) => {
    setPostText(event.target.value);
  };

  return (
    <section className="post">
      <header>Create Post</header>
      <form onSubmit={handleSubmit}>
        <div className="content">
          <img src="/assets/logo.png" alt="Logo" />
          <div className="details">
            <p>HackNetworks</p>
            <div className="privacy">
              <i className="fas fa-user-friends"></i>
              <span>Friends</span>
              <i className="fas fa-user-down"></i>
            </div>
          </div>
        </div>
        <textarea placeholder="What's on your mind, Hacker! ?" value={postText} onChange={handleInputChange}></textarea>
        <div className="theme-emoji">
          <img src="/assets/theme.svg" alt="Theme" />
          <img src="/assets/smile.svg" alt="Smile" />
        </div>
        <div className="options">
          <p>Add to your Network</p>
          <ul className="list">
            <li><img src="/assets/gallery.svg" alt="Gallery" /></li>
            <li><img src="/assets/tag.svg" alt="Tag" /></li>
            <li><img src="/assets/emoji.svg" alt="Emoji" /></li>
            <li><img src="/assets/mic.svg" alt="Mic" /></li>
            <li><img src="/assets/more.svg" alt="More" /></li>
          </ul>
        </div>
        <button type="submit">Post</button>
      </form>
    </section>
  );
};

