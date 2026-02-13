# Employee Management API

## Tech Stack
- Node.js
- Express.js
- Prisma ORM
- PostgreSQL

---

## Setup Instructions

1. Clone repository
2. Install dependencies:

   npm install

3. Create .env file based on .env.example

4. Run migrations:

   npx prisma migrate dev

5. Start server:

   npm run dev

Server runs on:
http://localhost:5000

---

## API Endpoints

### Department

POST /api/departments
GET /api/departments

### Employee

POST /api/employees
GET /api/employees

---
