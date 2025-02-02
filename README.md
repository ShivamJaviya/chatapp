# **Chatapp - Real-Time Group Chat with File Sharing 🚀**  

Welcome to **Connecto**, a feature-rich real-time chat application built using the **MERN** stack. This project enables seamless communication with real-time messaging, media sharing, and group chat capabilities, ensuring a smooth and interactive user experience.

## 🛠️ **Tech Stack**  

### **Frontend**  
- ⚛️ React + Redux  
- 🎨 Material-UI  
- ⚡ Socket.io-client  

### **Backend**  
- 🏗️ Node.js + Express  
- 🔒 JWT Authentication (jsonwebtoken, bcrypt)  
- 🔄 Socket.io (Real-time WebSockets)  

### **Database & Storage**  
- 🛢️ MongoDB + Mongoose  
- 📂 GridFS for file storage  

---

## 📖 **Features**  

✅ **User Authentication** – Secure signup & login using JWT authentication.  
✅ **Real-Time Messaging** – One-on-one & group chat powered by **WebSockets (Socket.io)**.  
✅ **Media Sharing** – Upload and share images/videos in chat.  
✅ **Online Status Tracking** – Displays "Online" & "Last Seen" status updates.  
✅ **Typing Indicators** – Know when someone is typing in real-time.  
✅ **Infinite Scrolling in Chat** – Seamless message loading via pagination.  
✅ **Admin Dashboard** – Manage users, media, and data visualization with **Chart.js**.  

---
## **Must Watch** 

📽️ Must Watch Video – Check out this video where I explore all features of Connecto in detail! 🎬 Watch Now
---

## 🔐 **User Stories**  

### **Admin User Stories**  
👨‍💼 **Receive Real-Time Notifications** for messages, media uploads, and critical events.  
📊 **Data Visualization Dashboard** – Analyze user activity with charts.  
🗂️ **Manage Media Uploads** – Review, approve, or delete images/videos.  

### **Regular User Stories**  
💬 **Send & Receive Messages** instantly.  
📷 **Upload & Share Media** with Cloudinary integration.  
🟢 **See Live User Status** – Know who’s online in real time.  
⌨️ **Typing Indicators** – See when someone is typing.  
👥 **Group Chat Support** – Create and manage group conversations.  

---

## 🗂 **Database Schema**  

### **Users Collection (`users`)**  
```json
{
  "_id": "ObjectId",
  "name": "Shivam Javiya",
  "email": "shivam@example.com",
  "password": "hashed_password",
  "profilePicture": "image_url",
  "isOnline": true,
  "lastSeen": "2024-02-02T10:30:00Z"
}
```

### **Messages Collection (`messages`)**  
```json
{
  "_id": "ObjectId",
  "senderId": "ObjectId",
  "receiverId": "ObjectId",
  "groupId": "ObjectId | null",
  "message": "Hello, how are you?",
  "media": "file_url",
  "timestamp": "2024-02-02T10:35:00Z"
}
```

### **Groups Collection (`groups`)**  
```json
{
  "_id": "ObjectId",
  "groupName": "Developers Chat",
  "members": ["ObjectId1", "ObjectId2"],
  "createdAt": "2024-02-02T10:30:00Z"
}
```

---

## 🔧 **Setup & Installation**  

### **Prerequisites**  
- 📌 **Node.js** (v16 or higher)  
- 📌 **MongoDB** installed locally or **MongoDB Atlas**  

### **Installation Steps**  

```sh
# Clone the repository
https://github.com/ShivamJaviya/chatapp.git
cd Connecto

# Install dependencies for backend
cd server
npm install

# Install dependencies for frontend
cd ../client
npm install

# Start backend server
cd ../server
npm run dev

# Start frontend server
cd ../client
npm start
```

---

## 🖼 **Application Screenshots**  

### **Login & Signup Page**  
![Screenshot (144)](https://github.com/user-attachments/assets/d7c703ac-66cf-4070-9787-0653e918df79)
  

### **Chat Interface**  
![Screenshot (150)](https://github.com/user-attachments/assets/a9df5218-3857-414c-ba4b-43882fc6c842)

### **finding People**  
![Screenshot (149)](https://github.com/user-attachments/assets/1b407462-35b0-4a63-82ef-1dbe6f360a41)

### **File Sharing**  
![Screenshot (148)](https://github.com/user-attachments/assets/0982681c-ae38-4936-8276-ed68e42ac20a)

### **People Request**  
![Screenshot (151)](https://github.com/user-attachments/assets/ab76b010-cc9a-4542-ac9e-dbb7eda82dda)


---

## 📌 **API Endpoints**  

### **User Authentication**  
| Method | Endpoint          | Description                  |
|--------|------------------|------------------------------|
| POST   | `/api/auth/signup` | Register a new user         |
| POST   | `/api/auth/login`  | Login & get JWT token       |

### **Messages & Chat**  
| Method | Endpoint           | Description                     |
|--------|-------------------|---------------------------------|
| POST   | `/api/messages`    | Send a new message             |
| GET    | `/api/messages/:id` | Get chat messages for a user   |

---

## **Acknowledgements**  
Made with ❤️ by **Shivam Javiya** for **VMukti Solutions**. 🚀  
