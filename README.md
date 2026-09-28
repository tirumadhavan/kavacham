# 🛡️ Kavacham V2 — Real-Time Web Security & Phishing Detector

Kavacham V2 is a real-time web security system designed to protect users from phishing websites, lookalike domains, and compromised credentials while browsing the web.

## 🚀 Key Features

- **Phishing & Spoof Detection**  
  The Chrome Extension continuously scans active tabs and checks domains for potential security threats.

- **Instant Browser Alerts**  
  Live security indicators (`OK`, `WARN`, `ALERT`) are displayed directly in the Chrome extension toolbar.

- **Security Command Center**  
  A centralized dashboard provides security tools for monitoring scans, managing threats, and reviewing security activity.

- **Password Breach Audit**  
  Passwords can be checked against breach databases using SHA-1 k-anonymity without sending the complete password to the server.

- **Security Audit History**  
  Previous scans are organized in the dashboard so users can review detected threats and verified safe websites.

---

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- WHOIS lookup
- Axios

### Frontend
- React
- Vite
- React Router
- Lucide Icons
- Custom cybersecurity-themed UI

### Browser Extension
- Chrome Extension Manifest V3
- Background Service Worker
- Chrome Extension APIs
- Popup UI

---

## 📁 Repository Structure

```text
kavacham/
├── backend/       # Node.js + Express REST API + MongoDB
├── frontend/      # React + Vite web dashboard
└── extension/     # Chrome Manifest V3 security extension

## ⚙️ Getting Started

### Prerequisites

- Node.js 18+
- MongoDB running locally or a MongoDB Atlas connection

### 1. Clone the Repository

```bash
git clone https://github.com/tirumadhavan/kavacham.git
cd kavacham
````

### 2. Backend Setup

```bash
cd backend
npm install
npm run dev
```

Create a `.env` file inside `backend/`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_jwt_secret
```

### 3. Frontend Setup

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

### 4. Chrome Extension Setup

1. Open Google Chrome.
2. Navigate to `chrome://extensions/`.
3. Enable **Developer mode**.
4. Select **Load unpacked**.
5. Select the `extension/` folder.
6. Pin the Kavacham extension.
7. Authenticate/configure the extension as required by the application.

---

## 🔐 Security Architecture

```text
User
  ↓
Chrome Extension
  ↓
Real-Time Domain Scan
  ↓
Kavacham Backend
  ↓
Threat Analysis
  ↓
Security Result
  ↓
Browser Alert + Dashboard
```

---

## 👥 Team

### Kavacham Team

* **Madhavan T.R.**
* **Shreyas**
* **Lochan**

Department of Electronics & Telecommunication Engineering
Ramaiah Institute of Technology (MSRIT)

---

## 🎯 Project Goal

Kavacham aims to make everyday web browsing safer by providing users with real-time security intelligence before potentially dangerous websites can compromise their credentials or personal information.

---

## 📌 Hackathon Project

Built as a team project for a hackathon.

**Repository:**
[https://github.com/tirumadhavan/kavacham]