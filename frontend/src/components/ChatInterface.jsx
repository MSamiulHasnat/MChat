import React, { useState } from 'react';

function ChatInterface() {
  const [messages, setMessages] = useState([
    { sender: 'bot', content: 'Hello, how can I help you today?' },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: 'user', content: input }]);
    setInput('');
    // Add API logic here for processing messages
  };

  return (
    <div className="chat-container">
      <div className="chat-message bot">
        <p>{messages[0].content}</p>
      </div>
      {messages.slice(1).map((msg, index) => (
        <div key={index} className={`chat-message ${msg.sender}`}>
          <p>{msg.content}</p>
        </div>
      ))}
      <div className="chat-input-container">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatInterface;
