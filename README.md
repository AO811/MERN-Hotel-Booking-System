# Hotel Booking System

A full-stack application built using the MERN stack to streamline hotel room bookings with a modern, user-friendly interface.

### Technologies Used:

1. Frontend: React.js with Bootstrap for a responsive and intuitive UI
2. Backend: Node.js and Express.js for server-side logic
3. Database: MongoDB for efficient data storage and retrieval

### Key Features:

- Complete CRUD Operations: Create, view, update, and delete room bookings seamlessly
- User Authentication: Secure login and registration system for users
- Elegant Design: Simplified navigation and responsive layout using Bootstrap

### Skills: 
- MERN Stack
- Bootstrap (Framework)
- MongoDB
- Express.js
- React.js
- Node.js

This project demonstrates robust full-stack development, focusing on usability and functionality.

## Local development

Install dependencies and run the backend and frontend in separate terminals:

```powershell
cd backend
npm ci
Copy-Item .env.example .env
npm run dev
```

```powershell
cd frontend
npm ci
Copy-Item .env.example .env
npm start
```

The backend runs with the database disabled by default; API requests return HTTP
503 in this mode. To use database-backed features, make sure MongoDB is running,
then set `DATABASE_ENABLED=true` and configure `MONGO_URI` in `backend/.env`.
The frontend API base URL can be changed with `REACT_APP_API_URL` in
`frontend/.env`.

To grant admin access, first register the account, then promote it directly in
MongoDB with `db.users.updateOne({ email: "admin@example.com" }, { $set: { role: "admin" } })`.
The admin must log in again for the new role to take effect. Booking create,
update, and delete operations remain admin-only.

Run frontend checks from `frontend`:

```powershell
npm test -- --watchAll=false
npm run build
```
