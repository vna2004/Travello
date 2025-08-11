# ✈️Travello

Welcome to **Travello**, a travel booking and management web application that helps users explore destinations, book accommodations, and plan their trips effortlessly.

## 🔗Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

---

## ⭐Features
- User authentication and authorization (JWT-based).
- Explore travel destinations and accommodations.
- Book trips and manage bookings.
- Review and rate destinations.
- Real-time updates using WebSockets.
- Responsive and user-friendly UI.

---

## 💻Technologies Used
Travello is built using the MERN stack:

- **Frontend**: React.js, Redux, TailwindCSS/Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Other Tools**:
  - Axios for API calls
  - JWT for authentication
  - WebSocket for real-time updates
  - Cloudinary (or similar) for image management

---

## 📍Installation

To get started with Travello, follow these steps:

### 🔎Prerequisites
- Node.js and npm installed
- MongoDB instance running

### 🤖Clone the Repository
```bash
git clone https://github.com/yourusername/travello.git
cd travello
```

### 📍Install Dependencies
#### Backend
```bash
cd backend
npm install
```

#### Frontend
```bash
cd ../frontend
npm install
```

### Environment Variables
Create a `.env` file in the `backend` directory with the following variables:
```env
PORT=5000
MONGO_URI=<Your MongoDB URI>
JWT_SECRET=<Your JWT Secret>
CLOUDINARY_URL=<Your Cloudinary API URL>
```

### Run the Application
#### Backend
```bash
cd backend
npm run dev
```

#### Frontend
```bash
cd frontend
npm start
```

---

## 🔮Usage
1. Open your browser and navigate to `http://localhost:3000`.
2. Sign up or log in to your account.
3. Explore destinations, make bookings, and enjoy!

---

# 🪄Project Demo



![Image](https://github.com/user-attachments/assets/3a71d599-bb15-4a4d-88e9-6213d59f66e0)

Here is a video walkthrough of the project flow: [![Project Demo](![Image](https://github.com/user-attachments/assets/3a71d599-bb15-4a4d-88e9-6213d59f66e0))](https://drive.google.com/file/d/1WYjCjMqRREbPm7TXLvtgQvoJlELL33XH/view?usp=sharing)




---

## 🤝Contributing
We welcome contributions! Please follow these steps:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

---
