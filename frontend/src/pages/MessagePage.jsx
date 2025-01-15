import React, { useState } from "react";

// Sample demo data
const demoChannels = [
  {
    id: "1",
    name: "Claim Group A",
    members: ["Client: John Doe", "Staff: Alice Johnson", "Admin: Sarah Lee"],
    messages: [
      {
        sender: "Client: John Doe",
        content: "Hi Alice, I need an update on my insurance claim.",
        timestamp: "2025-01-14T10:30:00Z",
      },
      {
        sender: "Staff: Alice Johnson",
        content: "Hello John, your claim is under review. We'll update you soon.",
        timestamp: "2025-01-14T12:00:00Z",
      },
    ],
  },
  {
    id: "2",
    name: "Policy Update Group",
    members: ["Client: Jane Smith", "Staff: Bob Smith"],
    messages: [
      {
        sender: "Client: Jane Smith",
        content: "Hi Bob, can I get details about the new policy?",
        timestamp: "2025-01-15T09:00:00Z",
      },
      {
        sender: "Staff: Bob Smith",
        content: "Sure, I'll send you the details shortly.",
        timestamp: "2025-01-15T09:30:00Z",
      },
    ],
  },
];

const MessagePage = () => {
  const [channels, setChannels] = useState(demoChannels);
  const [selectedChannel, setSelectedChannel] = useState(demoChannels[0]);
  const [newMessage, setNewMessage] = useState("");

  // Handle sending messages to the selected channel
  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const updatedChannels = channels.map((channel) => {
      if (channel.id === selectedChannel.id) {
        return {
          ...channel,
          messages: [
            ...channel.messages,
            {
              sender: "You",
              content: newMessage,
              timestamp: new Date().toISOString(),
            },
          ],
        };
      }
      return channel;
    });

    setChannels(updatedChannels);

    // Update the currently selected channel as well
    setSelectedChannel((prev) => ({
      ...prev,
      messages: [
        ...prev.messages,
        {
          sender: "You",
          content: newMessage,
          timestamp: new Date().toISOString(),
        },
      ],
    }));

    setNewMessage("");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar: Properties (Channels) */}
      <div className="w-1/4 bg-white border-r border-gray-200 overflow-y-auto">
        <h2 className="text-xl font-bold p-4 border-b">Channels</h2>
        <ul>
          {channels.map((channel) => (
            <li
              key={channel.id}
              className={`p-4 border-b cursor-pointer hover:bg-gray-50 ${
                selectedChannel.id === channel.id ? "bg-gray-100 font-bold" : ""
              }`}
              onClick={() => setSelectedChannel(channel)}
            >
              <h3 className="text-lg">{channel.name}</h3>
              <p className="text-sm text-gray-500">
                Members: {channel.members.join(", ")}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side: Messaging Interface */}
      <div className="flex-1 flex flex-col">
        {/* Channel Header */}
        <div className="p-4 bg-white shadow-md border-b">
          <h2 className="text-xl font-bold">{selectedChannel.name}</h2>
          <p className="text-sm text-gray-500">
            Members: {selectedChannel.members.join(", ")}
          </p>
        </div>

        {/* Message Area */}
        <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
          {selectedChannel.messages.map((msg, idx) => (
            <div
              key={idx}
              className={`mb-4 ${
                msg.sender === "You"
                  ? "text-right"
                  : "text-left"
              }`}
            >
              <p
                className={`inline-block p-3 rounded-lg ${
                  msg.sender === "You"
                    ? "bg-indigo-100 text-indigo-800"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                <span className="font-bold">{msg.sender}: </span>
                {msg.content}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                {new Date(msg.timestamp).toLocaleString()}
              </p>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-4 bg-white border-t">
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagePage;
