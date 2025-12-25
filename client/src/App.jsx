import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import Pages
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import MainChat from './pages/MainChat';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/chat" element={<MainChat />} />
    </Routes>
  );
}

export default App;