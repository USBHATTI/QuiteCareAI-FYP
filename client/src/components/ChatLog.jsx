import React from 'react';

const ChatLog = () => {
  // Mock Data
  const messages = [
    { sender: 'bot', text: 'Hello! I am ready to interpret your signs.' },
    { sender: 'user', text: 'Hello' },
    { sender: 'bot', text: 'Hi! How can I help you today?' },
    { sender: 'user', text: 'I am feeling heavy' },
  ];

  return (
    <div className="flex-1 bg-white border border-gray-200 rounded-xl p-6 overflow-y-auto shadow-sm">
      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-6">Conversation Log</h3>
      
      <div className="space-y-6">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
             <div className={`max-w-[80%] px-5 py-3 text-sm shadow-sm ${
                msg.sender === 'user' 
                  ? 'bg-blue-600 text-white rounded-2xl rounded-br-sm' 
                  : 'bg-gray-100 text-gray-800 rounded-2xl rounded-bl-sm'
              }`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatLog;