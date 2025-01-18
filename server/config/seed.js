// seed.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');

async function main() {
  // Seed users
  const users = [
    { name: 'Alice', email: 'alice@example.com', role: 'ADMIN' },
    { name: 'Bob', email: 'bob@example.com', role: 'MEMBER' },
    { name: 'Charlie', email: 'charlie@example.com', role: 'GUEST' },
    { name: 'David', email: 'david@example.com', role: 'ADMIN' },
    { name: 'Eve', email: 'eve@example.com', role: 'MEMBER' },
    { name: 'Frank', email: 'frank@example.com', role: 'GUEST' },
    { name: 'Grace', email: 'grace@example.com', role: 'ADMIN' },
    { name: 'Heidi', email: 'heidi@example.com', role: 'MEMBER' },
    { name: 'Ivy', email: 'ivy@example.com', role: 'GUEST' },
    { name: 'Jack', email: 'jack@example.com', role: 'MEMBER' }
  ];

  const createdUsers = [];

  // Create users and hash passwords
  for (const userData of users) {
    const hashedPassword = await bcrypt.hash('password', 10); // use a default password for all users

    const user = await prisma.user.create({
      data: {
        name: userData.name,
        email: userData.email,
        password: hashedPassword,
        role: userData.role,
      },
    });

    createdUsers.push(user);
  }

  // Seed user properties (address and phone)
  for (const user of createdUsers) {
    await prisma.userProperty.create({
      data: {
        userId: user.id,
        key: 'address',
        value: `${user.name}'s Address`,
      },
    });

    await prisma.userProperty.create({
      data: {
        userId: user.id,
        key: 'phone',
        value: `555-555-${user.id}`,
      },
    });
  }

  // Seed messages between users
  for (let i = 0; i < createdUsers.length - 1; i++) {
    await prisma.message.create({
      data: {
        senderId: createdUsers[i].id,
        receiverId: createdUsers[i + 1].id,
        content: `Hello ${createdUsers[i + 1].name}, this is ${createdUsers[i].name}`,
      },
    });
  }

  console.log('Seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
