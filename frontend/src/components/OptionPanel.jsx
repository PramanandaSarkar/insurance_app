import React from 'react';

const OptionsPanel = () => {
  return (
    <div className="bg-white p-6 shadow-lg rounded">
      <h2 className="text-xl font-bold mb-4">Tools & Options</h2>
      <ul className="space-y-3">
        <li className="p-3 bg-gray-50 hover:bg-gray-100 rounded cursor-pointer">
          Send a Reaction
        </li>
        <li className="p-3 bg-gray-50 hover:bg-gray-100 rounded cursor-pointer">
          Rate the Service
        </li>
        <li className="p-3 bg-gray-50 hover:bg-gray-100 rounded cursor-pointer">
          View Analytics
        </li>
      </ul>
    </div>
  );
};

export default OptionsPanel;
