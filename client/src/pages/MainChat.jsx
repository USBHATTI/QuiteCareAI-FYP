import React from 'react';

// Import Components
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import VideoStage from '../components/VideoStage';
import ControlPanel from '../components/ControlPanel';
import ChatLog from '../components/ChatLog';

const MainChat = () => {
  return (
    <div className="flex flex-col h-screen bg-white font-sans text-gray-900">
      
      {/* 1. Navbar (Fixed at Top) */}
      <Navbar page="chat" />

      {/* 2. Main Workspace */}
      {/* CHANGE: Added 'pt-20' to push content down below the fixed Navbar */}
      <div className="flex flex-1 overflow-hidden pt-20">
        
        {/* A. Sidebar (Left) */}
        <Sidebar />

        {/* B. Content Area (Right) */}
        <div className="flex-1 flex flex-col relative h-full">
          
          {/* Tool Header */}
          

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50/50">
            <div className="max-w-5xl mx-auto flex flex-col h-full">
              <VideoStage />
              <ControlPanel />
              <ChatLog />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MainChat;