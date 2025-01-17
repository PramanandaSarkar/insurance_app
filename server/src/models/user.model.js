let users = [
    { id: 1, name: 'Alice', username: 'alice123' },
    { id: 2, name: 'Bob', username: 'bob456' },
  ];

  module.exports = {
    getAllUsers: () => users,
    getUserById: (id) => users.find((user) => user.id === id),
    createUser: (user) => {
      user.id = users.length + 1;
      users.push(user);
      return user;
    },
    deleteUser: (id) => {
      users = users.filter((user) => user.id !== id);
    },
  };