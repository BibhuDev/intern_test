# 🚀 Scalable REST API with Authentication & Role-Based Access

A full-stack application built as part of an internship assessment.
It demonstrates a **secure, scalable backend architecture** with JWT authentication, role-based access control, and a simple frontend UI for testing APIs.

---

# 📌 Features

## 🔐 Authentication & Authorization

* User Registration & Login
* Password hashing using Argon2
* JWT-based authentication
* Role-based access control (User / Admin)

## 📦 Task Management (CRUD)

* Create, Read, Update, Delete tasks
* Users can manage their own tasks
* Admin can access all tasks

## ⚙️ Backend Best Practices

* Modular folder structure
* Centralized error handling
* Input validation using express-validator
* API versioning (`/api/v1`)
* Protected routes with middleware

## 🎯 Frontend (React)

* User registration & login UI
* Dashboard to manage tasks
* JWT token handling
* API integration using Axios

---

# 🧱 Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT Authentication
* Argon2 (password hashing)

### Frontend

* React
* Axios
* React Router

---

# ⚙️ Setup Instructions

## 1️⃣ Clone Repository

```
git clone <your-repo-link>
cd project
```

---

## 2️⃣ Backend Setup

```
cd backend
npm install
```

### Create `.env` file:

```
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
PORT=5000
```

### Run Backend

```
npm run dev
```

---

## 3️⃣ Frontend Setup

```
cd frontend
npm install
npm start
```

---

# 🔗 API Endpoints

## Auth Routes

| Method | Endpoint              | Description   |
| ------ | --------------------- | ------------- |
| POST   | /api/v1/auth/register | Register user |
| POST   | /api/v1/auth/login    | Login user    |

---

## Task Routes (Protected)

| Method | Endpoint          | Description     |
| ------ | ----------------- | --------------- |
| POST   | /api/v1/tasks     | Create task     |
| GET    | /api/v1/tasks     | Get all tasks   |
| GET    | /api/v1/tasks/:id | Get single task |
| PUT    | /api/v1/tasks/:id | Update task     |
| DELETE | /api/v1/tasks/:id | Delete task     |

---

# 🔐 Authentication

Protected routes require JWT token in header:

```
Authorization: Bearer <token>
```

---

# 👥 Role-Based Access

| Role  | Permissions           |
| ----- | --------------------- |
| User  | Access own tasks only |
| Admin | Access all tasks      |

---

# ⚠️ Error Handling

* Centralized error middleware
* Consistent response format:

```
{
  "success": false,
  "message": "Error message"
}
```

---

# 🧪 Testing

Use tools like:

* Thunder Client

Test:

* Auth flow
* Protected routes
* CRUD operations
* Role-based restrictions

---

# 🚀 Scalability & Improvements

This project is designed to be scalable and extensible:

* Modular architecture allows adding new features easily
* Can be split into microservices (Auth, Tasks)
* Add Redis for caching frequent queries
* Use Docker for containerization
* Deploy with load balancing (NGINX)
* Add logging (Winston / Morgan)

---

# 🔒 Security Practices

* Password hashing (Argon2)
* JWT expiration handling
* Input validation & sanitization
* Protected routes using middleware

---

# 🙌 Conclusion

This project demonstrates:

* Strong backend fundamentals
* Secure authentication system
* Clean API design
* Functional frontend integration

---

# 📬 Author

(https://github.com/BibhuDev)
