# API Backend Setup

This is a Node.js RESTful API using Express, Sequelize, PostgreSQL, and JWT authentication.

## 📦 Requirements

- Node.js
- PostgreSQL

## ⚙️ Setup

1. Clone the repository:

```bash
git clone https://github.com/muhFaza/flin-3-5.git
cd flin-3-5/backend
```

### Install dependencies

```bash
npm install
```

### Configure .env variables

```bash
PORT=3000
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
DB_HOST=localhost
JWT_SECRET=your_jwt_secret
```

### Set up the database:

```bash
npx sequelize-cli db:migrate
```

### Start development server

```bash
npm run dev
```

# Frontend Setup

### Clone the repository

```bash
git clone https://github.com/muhFaza/flin-3-5.git
cd flin-3-5/frontend
```

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

This will start the development server at [http://localhost:5173](http://localhost:5173). The page will reload if you make edits to the source files.