# 📄 Resume Job Tracker

Hey there! 👋  
This is a **Resume Job Tracker** — a full-stack web app where you can register, log in, and upload job applications with your resumes. It stores everything in MongoDB and lets you keep track of what you’ve applied for. Basically, it's your personal job-hunting dashboard!

---

## 🚀 What It Does

This app helps users:

- 📝 **Register & Log In** (with secure JWT auth)
- 📤 **Upload a resume file** for a job role
- 📚 **Track all uploaded resumes** and job roles in one place
- 🔒 **Keep data private** to each logged-in user

---

## 🧠 Tech Stack

- **Frontend**: React + Axios + Vite + TailwindCSS  
- **Backend**: Node.js + Express.js + Mongoose  
- **Database**: MongoDB Atlas  
- **Hosting**:
  - **Client** → [Vercel](https://vercel.com/)
  - **Server** → [Render](https://render.com/)

## Directory structure:
```
└── ganeshkantle-resume-job-tracker/
    ├── README.md
    ├── client/
    │   ├── README.md
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── public/
    │   │   ├── index.html
    │   │   ├── manifest.json
    │   │   └── robots.txt
    │   └── src/
    │       ├── App.css
    │       ├── App.js
    │       ├── App.test.js
    │       ├── index.css
    │       ├── index.js
    │       ├── reportWebVitals.js
    │       ├── setupTests.js
    │       └── pages/
    │           ├── Auth.css
    │           ├── Dashboard.js
    │           ├── Login.js
    │           └── Register.js
    └── server/
        ├── package-lock.json
        ├── package.json
        ├── render.yaml
        ├── server.js
        ├── .env
        ├── models/
        │   ├── Job.js
        │   └── User.js
        └── routes/
            ├── auth.js
            ├── job.js
            └── upload.js
            
```

## 📦 How To Run It

### 1. Clone the Repo
```bash
git clone https://github.com/YourUsername/Resume-Job-Tracker.git
cd Resume-Job-Tracker
```

### 2. Set Up the Server
```bash
cd server
npm install
```

#### Create a .env file and add:
```bash
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

#### Start the server:
```bash
npm start
```

### 3. Set Up the Client
```bash
cd client
npm install
npm run dev
```

#### Create a .env file and add:
```bash
REACT_APP_API_BASE_URL=https://your-render-backend-url.onrender.com
```
### Live Deployment
- **Backend (Render)**: Deploy the server using Render and then connect the frontend 
- **Frontend (Vercel)**: Deploy the client using Vercel and then connect the backend

## 🛡️ Security
- **Note**: .env is added to .gitignore to prevent token exposure.
- Never commit .env or personal tokens publicly.
  
## Contributing
If you'd like to contribute, please fork the repository and submit a pull request. All contributions are welcome!

## Contact
For any queries, feel free to reach out:
- **Email:** ganeshkantle@gmail.com
- **My Portfolio:** (https://ganesh-portfolio-dusky.vercel.app/)
