
export const samplechats = [
  {
    avatar:
      ["https://www.emrearal.com/wp-content/uploads/2018/10/avatar-logo-old.jpg"],
    name: "avatar",
    _id: "1",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar:
      ["https://www.emrearal.com/wp-content/uploads/2018/10/avatar-logo-old.jpg"],
    name: "aviational",
    _id: "2",
    groupChat: false,
    members: ["1", "2"],
  },
  
];

export const sampleuser = [
  {
    avatar: [
      "https://www.emrearal.com/wp-content/uploads/2018/10/avatar-logo-old.jpg",
    ],
    name: "avatar",
    _id: "1",
  },
  {
    avatar: [
      "https://www.emrearal.com/wp-content/uploads/2018/10/avatar-logo-old.jpg",
    ],
    name: "aviational",
    _id: "2",
  },
];

export const sampleNotification = [
  {
    sender: {
      avatar: "https://www.emrearal.com/wp-content/uploads/2018/10/avatar-logo-old.jpg",
      name: "avatar",
    },
    _id: "1",
  },
  {
    sender: {
      avatar: "https://www.emrearal.com/wp-content/uploads/2018/10/avatar-logo-old.jpg",
      name: "anaconda",
    },
    _id: "2",
  },
];

export const sampleMessage = [
  {
    attachments: [],
    content: "hello world",
    _id: "kcmdsopmdsv",
    sender: {
      _id: "user._id",
      name: "aviational",
    },
    chat: "chatId",
    createdAt: "2001-09-21T00:00:00.000Z",
  },
  {
    attachments: [
      {
        public_id: "asdsad",
        url: "https://www.emrearal.com/wp-content/uploads/2018/10/avatar-logo-old.jpg",
      },
    ],
    content: "dafole su world",
    _id: "kcmdsopmdsv",
    sender: {
      _id: "sfsnfa",
      name: "aviational",
    },
    chat: "chatId",
    createdAt: "2001-09-21T00:00:00.000Z",
  },
];


export const dashboardData = {
  users: [
    {
      name: "John Doe",
      avatar: "https://www.emrearal.com/wp-content/uploads/2018/10/avatar-logo-old.jpg",
      _id: "1",
      username: "john_doe",   
      friends: 20,
      groups: 5,
    },
    {
      name: "John Boi",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      _id: "2",
      username: "john_boi",
      friends: 20,
      groups: 25,
    },
  ],

  chats: [
    {
      name: "second Group",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "1",
      groupChat: false,
      members: [
        { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "John Doe",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
    {
      name: "first Group",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "2",
      groupChat: true,
      members: [
        { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "John Boi",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
  ],

  messages: [
    {
      attachments: [],
      content: "First hai",
      _id: "sfnsdjkfsdnfkjsbnd",
      sender: {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "Chaman ",
      },
      chat: "chatId",
      groupChat: false,
      createdAt: "2024-02-12T10:41:30.630Z",
    },

    {
      attachments: [
        {
          public_id: "asdsad 2",
          url: "https://www.w3schools.com/howto/img_avatar.png",
        },
      ],
      content: "Secondary here...",
      _id: "sfnsdjkfsdnfkdddjsbnd",
      sender: {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "Chaman  2",
      },
      chat: "chatId",
      groupChat: true,
      createdAt: "2024-02-12T10:41:30.630Z",
    },
  ],
};
