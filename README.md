# 📁 File Explorer (Fullstack)

A simple full-stack file explorer.

---

## 🧱 Tech Stack

### Backend
- **Bun**
- **Elysia**
- **Drizzle ORM**
- **PostgreSQL**
- **Docker**

### Frontend
- **Vue 3** (script setup)
- **Vite**
- **Tailwind CSS**
- **Axios**

---

## ✨ Features

- Folder tree view
- Lazy-loaded folders
- File listing per folder
- REST API
- Clean architecture (service / repository)
- PostgreSQL via Docker

---

## 📂 Project Structure

```
.
├── backend/
│   ├── src/
│   │   ├── application/
│   │   ├── infrastructure/
│   │   └── index.ts
│   ├── drizzle.config.ts
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── component/
│   │   ├── pages/
│   │   └── main.ts
│   ├── tailwind.config.js
│   └── vite.config.ts
│
└── docker-compose.yml
```

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/danzevo/explorer.git
cd explorer
```

---

### 2️⃣ Start PostgreSQL (Docker)

```bash
docker compose up -d
```

Database runs on:
```
localhost:5433
```

---

### 3️⃣ Backend setup

```bash
cd backend
bun install
bun drizzle-kit push
bun run src/index.ts
```

Backend API:
```
http://localhost:3000
```

---

### 4️⃣ Frontend setup

```bash
cd frontend
bun install
bun run dev
```

Frontend:
```
http://localhost:5173
```

---

## 🔗 API Endpoints

```http
GET /api/v1/folders/tree
GET /api/v1/folders?parentId=:id
GET /api/v1/files/folder/:id
```

---

## ⚙️ Environment Variables

Create `.env` in `backend/`:

```env
DATABASE_URL=postgresql://postgres:12345@localhost:5433/explorer
```

---

## 📝 Notes

- Tailwind CSS v3 is used
- Folder tree supports eager and lazy loading
- Emojis are used for folders 📁 and files 📄

---

## 📜 License

MIT
