# FULL-STACK-STOCK-TRADING-PLATFORM

![License](https://img.shields.io/badge/license-ISC-green)

## 🚀 Overview

Full-STACK-STOCK-TRADING-PLATFORM is a platform that allows users to trade, analyze market trends, and manage their portfolios with a modern and secure architecture.

The platform integrates Razorpay Payment Gateway for seamless deposits & withdrawals, provides a real-time trading dashboard, and uses Redis caching to boost performance.

It follows a modular structure with three main services:

* Frontend → User trading interface (localhost:5173)

* Dashboard → Admin & analytics dashboard (localhost:5174)

* Backend API → Business logic & data layer (localhost:3000)

FULL-STACK-STOCK-TRADING-PLATFORM provides the tools and resources you need to navigate the complexities of the stock market and achieve your financial goals. Experience the future of stock trading today!

# ✨ Features
## 🎯 Core Trading Functionality

* User Authentication & Authorization – Secure login and registration with JWT

* Buy & Sell Stocks – Execute trades with real-time updates

* Portfolio Management – Track holdings, balance, and profit/loss

* Payment Gateway – Integrated Razorpay for secure deposits & withdrawals

* Order History – Detailed logs of user transactions

## 📊 Dashboard Features

* Admin Controls – Manage users, stocks, and transactions

* Analytics – Track trading volume, revenue, and user engagement

* Real-Time Updates – Cached market data with Redis

## ⚙️ Technical Highlights

* Modular Architecture – Separate frontend, dashboard, and backend services

* Caching with Redis – Faster data retrieval & reduced database load

* Secure APIs – JWT authentication, input validation

* Responsive Design – Modern UI with React & BootStrap

* Scalable Backend – Node.js + Express.js with MongoDB

---

# 🏗 Architecture
```
                   ┌────────────────────────┐
                   │        Frontend         │
                   │ React.js + TailwindCSS  │
                   │ Razorpay Integration    │
                   └───────────┬────────────┘
                               │
                               ▼
                   ┌────────────────────────┐
                   │   Dashboard (Admin)    │
                   │ React.js + Analytics   │
                   │                        │
                   └───────────┬────────────┘
                               │
                               ▼
                   ┌────────────────────────┐
                   │        Backend          │
                   │ Node.js + Express.js    │
                   │ JWT + Razorpay API      │
                   │ Redis + MongoDB         │
                   └────────────────────────┘
```
---
# 🛠️ Tech Stack

## 🎨 Frontend (User + Dashboard)

* React.js 18 – Component-based UI

* React Router v6 – Navigation

* Axios – API requests

* BootStrap – Styling

* Razorpay SDK – Payment integration

## ⚙️ Backend

* Node.js 18+ – JavaScript runtime

* Express.js – API framework

* MongoDB + Mongoose – Database & ODM

* Redis – Caching system

* JWT Authentication – Secure login & sessions

* Razorpay API – Payment handling

## 🛠 Development Tools

* Nodemon – Development server auto-restart

* dotenv – Environment variable management

* ESLint – Code linting

* Git & GitHub – Version control

---

## 📦 Key Dependencies

```
bcrypt: ^5.1.1
body-parser: ^1.20.2
cors: ^2.8.5
dotenv: ^16.4.5
express: ^4.19.2
jsonwebtoken: ^9.0.2
mongoose: ^8.5.0
passport: ^0.7.0
passport-local: ^1.0.0
passport-local-mongoose: ^8.0.0
```

## 📁 Project Structure

```
.
├── BACKEND
│   ├── controllers
│   │   ├── dashboardController.js
│   │   └── userController.js
│   ├── index.js
│   ├── middlewares
│   │   └── AuthMiddleWare.js
│   ├── model
│   │   ├── HoldingsModel.js
│   │   ├── OrdersModel.js
│   │   ├── PositionsModel.js
│   │   ├── UserModel.js
│   │   └── WatchListModel.js
│   ├── package.json
│   ├── routes
│   │   ├── dashboardRouter.js
│   │   └── userRouter.js
│   └── schemas
│       ├── HoldingsSchema.js
│       ├── OrdersSchema.js
│       ├── PositionsSchema.js
│       ├── UserSchema.js
│       └── WatchListSchema.js
├── DASHBOARD
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── public
│   │   ├── logo.png
│   │   └── vite.svg
│   ├── src
│   │   ├── Data
│   │   │   └── data.js
│   │   ├── assets
│   │   │   └── react.svg
│   │   ├── components
│   │   │   ├── Context
│   │   │   │   ├── BuyActionWindow.css
│   │   │   │   ├── BuyActionWindow.jsx
│   │   │   │   └── GeneralContext.jsx
│   │   │   ├── Landing Page
│   │   │   │   ├── Dashboard.jsx
│   │   │   │   ├── Home.css
│   │   │   │   ├── Home.jsx
│   │   │   │   ├── Menu.jsx
│   │   │   │   └── Topbar.jsx
│   │   │   ├── Pages
│   │   │   │   ├── Apps.jsx
│   │   │   │   ├── Funds.jsx
│   │   │   │   ├── Holdings.jsx
│   │   │   │   ├── Orders.jsx
│   │   │   │   ├── Positions.jsx
│   │   │   │   ├── Summary.jsx
│   │   │   │   └── VerticalGraph.jsx
│   │   │   └── WatchList
│   │   │       ├── DoughnutChart.jsx
│   │   │       ├── WatchList.jsx
│   │   │       ├── WatchListActions.jsx
│   │   │       └── WatchListItem.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   └── vite.config.js
└── FRONTEND
    ├── index.html
    ├── package.json
    ├── public
    │   ├── font-awesome
    │   │   └── font-awesome-4.7.0
    │   │       ├── HELP-US-OUT.txt
    │   │       ├── css
    │   │       │   └── font-awesome.css
    │   │       ├── fonts
    │   │       │   ├── FontAwesome.otf
    │   │       │   ├── fontawesome-webfont.eot
    │   │       │   ├── fontawesome-webfont.svg
    │   │       │   ├── fontawesome-webfont.ttf
    │   │       │   ├── fontawesome-webfont.woff
    │   │       │   └── fontawesome-webfont.woff2
    │   │       ├── less
    │   │       │   ├── animated.less
    │   │       │   ├── bordered-pulled.less
    │   │       │   ├── core.less
    │   │       │   ├── fixed-width.less
    │   │       │   ├── font-awesome.less
    │   │       │   ├── icons.less
    │   │       │   ├── larger.less
    │   │       │   ├── list.less
    │   │       │   ├── mixins.less
    │   │       │   ├── path.less
    │   │       │   ├── rotated-flipped.less
    │   │       │   ├── screen-reader.less
    │   │       │   ├── stacked.less
    │   │       │   └── variables.less
    │   │       └── scss
    │   │           ├── _animated.scss
    │   │           ├── _bordered-pulled.scss
    │   │           ├── _core.scss
    │   │           ├── _fixed-width.scss
    │   │           ├── _icons.scss
    │   │           ├── _larger.scss
    │   │           ├── _list.scss
    │   │           ├── _mixins.scss
    │   │           ├── _path.scss
    │   │           ├── _rotated-flipped.scss
    │   │           ├── _screen-reader.scss
    │   │           ├── _stacked.scss
    │   │           ├── _variables.scss
    │   │           └── font-awesome.scss
    │   ├── media
    │   │   └── images
    │   │       ├── Signup.jpg
    │   │       ├── appstoreBadge.svg
    │   │       ├── coin.png
    │   │       ├── console.png
    │   │       ├── dittoLogo.png
    │   │       ├── ecosystem.png
    │   │       ├── education.svg
    │   │       ├── goldenpiLogo.png
    │   │       ├── googlePlayBadge.svg
    │   │       ├── homeHero.png
    │   │       ├── intradayTrades.svg
    │   │       ├── kite.png
    │   │       ├── kiteconnect.png
    │   │       ├── largestBroker.svg
    │   │       ├── logo.svg
    │   │       ├── nithinKamath.jpg
    │   │       ├── pressLogos.png
    │   │       ├── pricing0.svg
    │   │       ├── pricingEquity.svg
    │   │       ├── pricingMF.svg
    │   │       ├── sensibullLogo.svg
    │   │       ├── signup.png
    │   │       ├── smallcaseLogo.png
    │   │       ├── streakLogo.png
    │   │       ├── varsity.png
    │   │       └── zerodhaFundhouse.png
    │   └── vite.svg
    ├── src
    │   ├── NotFound.jsx
    │   ├── assets
    │   │   └── react.svg
    │   ├── index.css
    │   ├── landing_page
    │   │   ├── Footer.jsx
    │   │   ├── Navbar.jsx
    │   │   ├── OpenAccount.jsx
    │   │   ├── about
    │   │   │   ├── AboutPage.jsx
    │   │   │   ├── Hero.jsx
    │   │   │   └── Team.jsx
    │   │   ├── home
    │   │   │   ├── Awards.jsx
    │   │   │   ├── Education.jsx
    │   │   │   ├── Hero.jsx
    │   │   │   ├── HomePage.jsx
    │   │   │   ├── Pricing.jsx
    │   │   │   └── Stats.jsx
    │   │   ├── pricing
    │   │   │   ├── Brokerage.jsx
    │   │   │   ├── Hero.jsx
    │   │   │   └── PricingPage.jsx
    │   │   ├── products
    │   │   │   ├── Hero.jsx
    │   │   │   ├── LeftSection.jsx
    │   │   │   ├── ProductPage.jsx
    │   │   │   ├── RightSection.jsx
    │   │   │   └── Universe.jsx
    │   │   ├── signup
    │   │   │   ├── Hero.jsx
    │   │   │   ├── Login.jsx
    │   │   │   ├── Signmain.jsx
    │   │   │   └── Signup.jsx
    │   │   └── support
    │   │       ├── CreateTicket.jsx
    │   │       ├── Hero.jsx
    │   │       └── SupportPage.jsx
    │   └── main.jsx
    └── vite.config.js
```

---

## ⚙️ Local Setup Instructions  

### 🔑 Prerequisites  
- **Node.js 18+**  
- **Docker & Docker Compose** (recommended)  
- **MongoDB** (local installation or Atlas account)  
- **Google Cloud Console** (for OAuth setup)  
- **Google AI Studio account** (for Gemini API key)  

---

### 🐳1st Way: Docker Development (Recommended)  

1️⃣ Clone the repository  
```bash
git clone <your-repo-url>
cd FULL-STACK-STOCK-TRADING-PLATFORM
```
2️⃣ Set up environment variables
```bash
Create .env file in BACKEND/:

MONGO_URL= <your mongoDB URL>
TOKEN_KEY = <your secert key>
KEY_ID = <your razorpay secret ID>
KEY_SECRET = <your razorpay sceret key>

Create .env file in FRONTEND/:
VITE_COPILOT_API_KEY = <your openai api key>
VITE_API_URL=http://localhost:3000
VITE_DASHBOARD_URL=http://localhost:5174/

Create .env file in /DASHBOARD:
VITE_COPILOT_API_KEY = <your open ai key>
VITE_API_URL = http://localhost:3000
VITE_FRONTEND_URL = http://localhost:5173
```

3️⃣ Run with Docker
```bash
# Update docker-compose.yml with your environment variables
docker-compose up --build
```

4️⃣ Access the application
```bash
Frontend: http://localhost:5173
DASHBAORD : http://localhost:5174
Backend API: http://localhost:3000
```
---

### 🐳2nd Way: Run the app manually
Install dependencies
```bash
# Backend dependencies
cd SERVER
npm install

# Frontend dependencies
cd CLIENT
npm install

#Dashboard dependencies
cs DASHBOARD
npm install
```
Set up environment variables (same as Docker option)

Start services manually

### Terminal 1: Start frontend
```bash
cd FRONTEND
npm run dev
```

### Terminal 2: Start backend
```
cd SERVER
nodemon index.js
```
### Terminal 3: Start Dashbaord
```
cd DASHBOARD
npm run dev 
```

### Access Your Application
```bash
Access the application
Frontend: http://localhost:5173
DASHBOARD: http://localhost:5174
Backend API: http://localhost:3000
```
---
### Required Service Setup

Google AI Setup
Go to Google AI Studio
Create an API key for Gemini
Add the key to your environment variables

### Database Setup

MongoDB Atlas: Create a database and get connection string

---


## 👥 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/ADARSHDUBEY200/FULL-STACK-STOCK-TRADING-PLATFORM.git`
3. **Create** a new branch: `git checkout -b feature/your-feature`
4. **Commit** your changes: `git commit -am 'Add some feature'`
5. **Push** to your branch: `git push origin feature/your-feature`
6. **Open** a pull request

Please ensure your code follows the project's style guidelines and includes tests where applicable.

## 📜 License

This project is licensed under the ISC License.

