# 🌿 Vikalp — Report. Resolve. Renew.

<div align="center">

![Vikalp Banner](https://img.shields.io/badge/Vikalp-Environmental%20Reporting%20Platform-10b981?style=for-the-badge&logo=leaf&logoColor=white)

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite)](https://vitejs.dev)
[![Node.js](https://img.shields.io/badge/Node.js-20-339933?style=flat-square&logo=node.js)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat-square&logo=mongodb)](https://mongodb.com)
[![Firebase](https://img.shields.io/badge/Firebase-Auth-FFCA28?style=flat-square&logo=firebase)](https://firebase.google.com)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

**Vikalp** is a full-stack civic-tech web platform that empowers citizens to report environmental issues — garbage dumps, animal welfare concerns, hazardous waste — and track their resolution in real time.

[🚀 Live Demo](#) · [📋 Report Issue](https://github.com/MUKESH-KHUSWAHA/Vikalp_life/issues) · [📖 Documentation](#-project-structure)

</div>

---

## 📸 Screenshots

| Home Page | Report Form | Worker Dashboard |
|---|---|---|
| Hero with live map & community reports | Interactive map + fare calculator | Worker task management panel |

---

## ✨ Features

### 👥 Citizen Features
- 🗺️ **Interactive Map** — Click on Leaflet map to pin exact waste location with reverse geocoding
- 📸 **Photo Evidence** — Upload images (JPEG/PNG up to 5MB) with report submission
- 🔐 **Firebase Auth** — Google Sign-In + Email/Password authentication
- 💰 **Fare Calculator** — Real-time cost estimate based on waste weight, material type & urgency
- 📊 **Live Dashboard** — View all submitted reports with status tracking
- 📱 **Fully Responsive** — Optimized for mobile, tablet & desktop

### 👷 Worker Features
- 🔑 **Worker Portal** — Separate sign-in/sign-up for field workers
- 📋 **Task Dashboard** — View assigned reports and update status
- ✅ **Status Updates** — Mark reports as Acknowledged / In Progress / Resolved

### 🛡️ Platform Features
- 🔒 **JWT + Firebase Token Verification** — Secure API authentication
- 🖼️ **Image Storage** — Binary image data stored in MongoDB
- ⚡ **Real-time Stats** — Total report count with type breakdown
- 🌐 **OpenStreetMap Integration** — Free, open-source geocoding via Nominatim

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 19, Vite 7, TailwindCSS 3, React Router 7 |
| **UI Components** | FontAwesome Icons, React-Leaflet, Custom CSS animations |
| **Authentication** | Firebase Auth (Google OAuth + Email/Password) |
| **Backend** | Node.js, Express 4, MongoDB, Mongoose 8 |
| **Database** | MongoDB Atlas (cloud) |
| **File Uploads** | Multer (memory storage → MongoDB binary) |
| **Admin Auth** | Firebase Admin SDK (token verification middleware) |
| **Deployment** | Render (backend) + Vercel/Netlify (frontend) |

---

## 🚀 Quick Start

### Prerequisites
- Node.js ≥ 18
- MongoDB Atlas account (free tier)
- Firebase project (free tier)

### 1. Clone the Repository

```bash
git clone https://github.com/MUKESH-KHUSWAHA/Vikalp_life.git
cd Vikalp_life
```

### 2. Setup Frontend

```bash
# Install dependencies
npm install

# Copy env template and fill in your values
copy .env.example .env
```

Edit `.env`:
```env
VITE_API_BASE_URL=http://localhost:5000
VITE_ADMIN_PASSWORD=your_admin_password

# Firebase Web SDK (from Firebase Console → Project Settings → Your Apps)
VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_project.firebaseapp.com
VITE_projectId=your_project_id
VITE_storageBucket=your_project.appspot.com
VITE_messagingSenderId=123456789
VITE_appId=1:123:web:abc
```

### 3. Setup Backend

```bash
cd backend
npm install

# Copy env template and fill in your values
copy .env.example .env
```

Edit `backend/.env`:
```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/vikalp
CORS_ORIGIN=http://localhost:3000
ADMIN_PASSWORD=your_admin_password

# Firebase Admin SDK (from Firebase Console → Service Accounts → Generate key)
FIREBASE_SERVICE_ACCOUNT={"type":"service_account","project_id":"..."}
```

### 4. Run the Application

```bash
# Terminal 1 — Start backend
cd backend
npm run dev

# Terminal 2 — Start frontend
cd ..
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

---

## 🔑 Environment Variables

### Frontend (`.env`)

| Variable | Required | Description |
|---|---|---|
| `VITE_API_BASE_URL` | ✅ | Backend API URL |
| `VITE_ADMIN_PASSWORD` | ✅ | Admin password to clear reports |
| `VITE_apiKey` | ✅ | Firebase Web API Key |
| `VITE_authDomain` | ✅ | Firebase Auth Domain |
| `VITE_projectId` | ✅ | Firebase Project ID |
| `VITE_storageBucket` | ✅ | Firebase Storage Bucket |
| `VITE_messagingSenderId` | ✅ | Firebase Messaging Sender ID |
| `VITE_appId` | ✅ | Firebase App ID |

### Backend (`backend/.env`)

| Variable | Required | Description |
|---|---|---|
| `PORT` | ✅ | Server port (default: 5000) |
| `NODE_ENV` | ✅ | `development` or `production` |
| `MONGO_URI` | ✅ | MongoDB connection string |
| `CORS_ORIGIN` | ✅ | Frontend URL for CORS |
| `ADMIN_PASSWORD` | ✅ | Admin password to delete all reports |
| `FIREBASE_SERVICE_ACCOUNT` | ✅ | Firebase Admin SDK JSON (single-line string) |

> 📖 See [`.env.example`](.env.example) and [`backend/.env.example`](backend/.env.example) for full details.

---

## 📁 Project Structure

```
Vikalp_life/
├── 📄 index.html                  # App entry with SEO meta tags
├── 📄 vite.config.js              # Vite + proxy config
├── 📄 tailwind.config.js          # Tailwind custom theme
├── 📄 render.yaml                 # Render deployment config
├── 📄 .env.example                # Frontend env template
│
├── 📂 src/
│   ├── 📂 pages/
│   │   ├── Home.jsx               # Landing page + report dashboard
│   │   ├── Report.jsx             # Report submission form + map
│   │   ├── SignIn.jsx             # Citizen sign in
│   │   ├── SignUp.jsx             # Citizen sign up
│   │   ├── WorkerSignIn.jsx       # Worker portal sign in
│   │   ├── WorkerSignUp.jsx       # Worker registration
│   │   ├── WorkerDashboard.jsx    # Worker task management
│   │   └── Payment.jsx            # Fare/payment summary
│   │
│   ├── 📂 components/
│   │   ├── Header.jsx             # Navigation with auth state
│   │   ├── AuthStatus.jsx         # User profile dropdown
│   │   ├── Notification.jsx       # Toast notifications
│   │   ├── LoadingSpinner.jsx     # Loading states
│   │   └── ResponsiveContainer.jsx
│   │
│   ├── 📂 context/
│   │   ├── AuthContext.jsx        # Firebase auth state management
│   │   └── NotificationContext.jsx # Global notification system
│   │
│   └── 📂 utils/
│       └── fare.js                # Fare calculation engine
│
└── 📂 backend/
    ├── 📄 server.js               # Express API server
    ├── 📄 firebase.js             # Firebase Admin + token middleware
    ├── 📄 serviceAccountKey.js    # Firebase service account config
    └── 📄 .env.example            # Backend env template
```

---

## 🌐 API Endpoints

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `GET` | `/health` | None | Health check |
| `GET` | `/api/reports` | None | Fetch all reports |
| `POST` | `/api/reports` | 🔐 Firebase Token | Submit new report |
| `DELETE` | `/api/reports/:id` | Admin Query Param | Delete single report |
| `DELETE` | `/api/reports` | Admin Password | Delete all reports |

---

## 🚢 Deployment

### Backend — Render

1. Push to GitHub
2. Create **New Web Service** on [Render](https://render.com)
3. Connect your GitHub repo, set Root Directory to `backend`
4. Add all environment variables from `backend/.env.example`
5. Build command: `npm install` | Start command: `npm start`

### Frontend — Vercel

```bash
npm run build
# Deploy the dist/ folder to Vercel or Netlify
```

1. Connect GitHub repo to [Vercel](https://vercel.com)
2. Add all `VITE_*` environment variables
3. Set `VITE_API_BASE_URL` to your Render backend URL
4. Deploy!

---

## 🗺️ Report Types Supported

| Type | Icon | Priority |
|---|---|---|
| Garbage / Waste Collection | 🗑️ | Medium |
| Animal Death / Injury | 💔 | High |
| Animal Adoption | 🏠 | High |
| Animal Care / Rescue | 🐾 | High |
| Cleaning Request | 🧹 | Medium |
| Recycling Issue | ♻️ | Medium |
| Hazardous Waste | ⚠️ | Critical |
| Other | 📋 | Medium |

---

## 💰 Fare Calculation Engine

The built-in fare calculator estimates cleanup costs based on:

- ⚖️ **Weight** of waste material (kg)
- 📏 **Size** (small / medium / large / very-large)
- 🛣️ **Accessibility** (easy / moderate / difficult / restricted)
- ⏰ **Urgency** (normal / priority / critical)
- 🧪 **Material Type** (general / organic / recyclable / hazardous / etc.)
- 🔢 **Quantity** (number of units)
- 📊 **GST** (18%) automatically added

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 👨‍💻 Author

**Mukesh Khuswaha**

[![GitHub](https://img.shields.io/badge/GitHub-MUKESH--KHUSWAHA-181717?style=flat-square&logo=github)](https://github.com/MUKESH-KHUSWAHA)

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

Made with ❤️ for cleaner communities and a greener future.

**⭐ Star this repo if you found it helpful!**

</div>
