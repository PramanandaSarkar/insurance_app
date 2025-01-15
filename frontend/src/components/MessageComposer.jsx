import React, { useState } from 'react';

const MessageComposer = () => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://your-api-endpoint.com/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('authToken')}`, // Use auth token if required
        },
        body: JSON.stringify({ content: message }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      // Optionally reset the message state or refetch the messages
      setMessage('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg rounded">
      <h2 className="text-xl font-bold mb-4">Compose a Message</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={loading}
        className={`px-4 py-2 ${
          loading ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700'
        } text-white font-semibold rounded shadow`}
      >
        {loading ? 'Sending...' : 'Send'}
      </button>
    </form>
  );
};

export default MessageComposer;
