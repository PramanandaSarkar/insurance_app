let messages = [
    { id: 1, sender: 'alice123', receiver: 'bob456', content: 'Hello Bob!' },
    { id: 2, sender: 'bob456', receiver: 'alice123', content: 'Hi Alice!' },
  ];
  
  module.exports = {
    getAllMessages: () => messages,
    getMessageById: (id) => messages.find((message) => message.id === id),
    createMessage: (message) => {
      message.id = messages.length + 1;
      messages.push(message);
      return message;
    },
    deleteMessage: (id) => {
      messages = messages.filter((message) => message.id !== id);
    },
  };