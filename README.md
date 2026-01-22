# 📁 File Explorer (Fullstack)

A simple full-stack file explorer.

---

## 🧱 Tech Stack

### Backend
- **Runtime:** Bun
- **Language:** TypeScript
- **Framework:** Elysia
- **Database:** PostgreSQL
- **ORM:** Drizzle ORM
- **Architecture:** Clean / Hexagonal
- **Container:** Docker

### Frontend
- **Framework:** Vue 3
- **API Style:** Composition API
- **Styling:** Tailwind CSS
- **HTTP Client:** Axios
- **Bundler:** Vite (via Bun)

---

## ✨ Features

- Recursive folder structure with unlimited depth
- Lazy-loaded folder tree (scales to millions of records)
- Left panel: expandable folder tree (Explorer-style)
- Right panel: direct subfolders and files
- Backend API with clean architecture (service + repository)
- Tailwind CSS for styling
- Bun runtime (backend + frontend)
- Unit & integration-ready architecture (no Supertest dependency)
- PostgreSQL via Docker

---

## 📂 Project Structure

```
project-root/
├── backend/
│   ├── src/
│   │   ├── application/
│   │   ├── domain/
│   │   ├── infrastructure/
│   │   └── presentation/
│   └── tsconfig.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.vue
│   └── tailwind.config.js
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

### Get root folders (lazy loading)
```
GET /api/v1/folders?parentId=null
```

### Get child folders
```
GET /api/v1/folders?parentId=123
```

### Get folder children (alternative)
```
GET /api/v1/folders/:id/children
```

### Get files in folder
```
GET /api/v1/files/folder/:id
```

---

## 🧪 Testing
Example:
```bash
bun test
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
