// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';

export function Sidebar() {
    return (
      <div className="menu">
        <h2 className="logo">HackNetworks</h2>
        <a className="top-space" href="#">Dashboard</a>
        <a href="#">Home</a>
        <a href="./ProfilePage">Profile</a>
        <a href="https://mlh.io/">MLH</a>
        <a href="https://devpost.com/">Devpost</a>
        <a href="#">Settings</a>
      </div>
    );
  };;
