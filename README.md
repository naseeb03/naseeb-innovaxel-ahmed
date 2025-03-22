# 🚀 URL Shortener API (MERN Stack)
A lightweight and efficient RESTful API for shortening URLs, retrieving original links, updating/deleting short URLs, and tracking access statistics. Built with Node.js, Express, MongoDB, and Nanoid.

## 📌 Features
- 🔗 **Shorten URLs**: Generate a short code for any long URL.
- 🔄 **Retrieve Original URL**: Redirect users from a short link to the original URL.
- ✏️ **Update Short URL**: Modify the original URL associated with a short code.
- ❌ **Delete Short URL**: Remove a short URL from the database.
- 📊 **Track URL Stats**: View access count and metadata for a short URL.

## 🛠 Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ORM)
- **Short Code Generator**: Nanoid
- **Validation**: Express Validator

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/naseeb03/naseeb-innovaxel-ahmed.git
cd naseeb-innovaxel-ahmed
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file in the root directory and add:
```ini
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### 4️⃣ Start the Server
```bash
npm run dev
```
Server will run at [http://localhost:5000](http://localhost:5000).

## 🔥 API Endpoints
| Method | Endpoint | Description |
|--------|---------|-------------|
| **POST** | `/shorten` | Create a short URL |
| **GET** | `/shorten/:shortCode` | Retrieve the original URL |
| **PUT** | `/shorten/:shortCode` | Update the original URL |
| **DELETE** | `/shorten/:shortCode` | Delete a short URL |
| **GET** | `/shorten/:shortCode/stats` | Get URL access stats |

## 📌 Contributing
Feel free to fork, improve, and submit PRs! 🚀