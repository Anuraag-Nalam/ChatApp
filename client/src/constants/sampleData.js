export const sampleChats = [
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "John Doe",
    _id: "1",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar: [
      "https://www.w3schools.com/howto/img_avatar.png",
      "https://www.w3schools.com/howto/img_avatar.png",
      "https://www.w3schools.com/howto/img_avatar.png",
    ],
    name: "James",
    _id: "2",
    groupChat: true,
    members: ["1", "2"],
  },
];

export const sampleUsers = [
  {
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
    name: "John Doe",
    _id: "1",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
    name: "James",
    _id: "2",
    groupChat: true,
    members: ["1", "2"],
  },
];

export const sampleNotifications = [
  {
    sender: {
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "John Doe",
    },
    _id: "1",
  },
  {
    sender: {
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "James",
    },
    _id: "2",
  },
];

export const sampleMessage = [
  {
    attachments: [
      {
        public_id: "asdsad",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
    content: "Hi There!",
    _id: "random_user_id",
    sender: {
      _id: "user_id",
      name: "Anuraag",
    },
    chat: "chatId",
    createdAt: "2024-02-12T10:41:30.630Z",
  },
  {
    attachments: [
      {
        public_id: "asdsad 2",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
    content: "Hi There2!",
    _id: "random_user_id2",
    sender: {
      _id: "user_id2",
      name: "Anuraag2",
    },
    chat: "chatId2",
    createdAt: "2024-02-12T10:41:30.630Z",
  },
];

export const dashboardData = {
  users: [
    {
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "John Doe",
      _id: "1",
      username: "john_doe",
      friends: 20,
      groups: 5,
    },
    {
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "James",
      _id: "2",
      username: "@james",
      friends: 10,
      groups: 12,
    },
  ],
  chats: [
    {
      name: "Random Group 1",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "1",
      groupChat: false,
      members: [
        { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
      ],
      totalMembers: 3,
      totalMessages: 60,
      creator: {
        name: "John Doe",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
    {
      name: "Random Group 2",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "2",
      groupChat: false,
      members: [
        { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "James",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
  ],
  messages: [
    {
      attachments: [
        {
          public_id: "asdsad",
          url: "https://www.w3schools.com/howto/img_avatar.png",
        },
      ],
      content: "Hi There!",
      _id: "random_user_id",
      sender: {
        _id: "user_id",
        name: "Anuraag",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
      chat: "chatId",
      createdAt: "2024-02-12T10:41:30.630Z",
      groupChat: true,
    },
    {
      attachments: [
        {
          public_id: "asdsad 2",
          url: "https://www.w3schools.com/howto/img_avatar.png",
        },
      ],
      content: "Hi There2!",
      _id: "random_user_id2",
      sender: {
        _id: "user_id2",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "Anuraag2",
      },
      chat: "chatId2",
      groupChat: false,
      createdAt: "2024-02-12T10:41:30.630Z",
    },
  ],
};
