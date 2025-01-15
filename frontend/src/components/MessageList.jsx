import React from 'react';

const MessageList = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Messages</h1>
      <ul className="space-y-4">
        <li className="p-4 bg-gray-50 hover:bg-gray-100 shadow rounded cursor-pointer">
          <h2 className="text-lg font-semibold">Message 1</h2>
          <p className="text-sm text-gray-600">Content of message 1...</p>
        </li>
        <li className="p-4 bg-gray-50 hover:bg-gray-100 shadow rounded cursor-pointer">
          <h2 className="text-lg font-semibold">Message 2</h2>
          <p className="text-sm text-gray-600">Content of message 2...</p>
        </li>
        {/* Additional messages */}
      </ul>
    </div>
  );
};

export default MessageList;
