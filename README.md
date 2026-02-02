**Job Tracker Dashboard**

A modern job application tracking system built with React + Vite that helps users organize applications, monitor progress, and analyze job search performance using interactive data visualizations.

This project demonstrates practical frontend engineering skills including CRUD operations, filtering, search, sorting, pagination, state management, data persistence, and dashboard analytics.

**Project Overview**

The Job Tracker Dashboard is a single-page application that allows users to:

Track job applications in one place

Monitor deadlines and progress stages

Visualize application trends

Improve job search efficiency

All data is stored in browser local storage, so the application works without a backend.

**Key Features**
Application Management

Add new job applications

Edit job details

Delete applications

**Track:**

Company name

Role

Application status (Applied / Interview / Offer / Rejected)

Application deadline

Date applied

Smart Controls

Search by company or role

Filter by status

**Sort by:**

Newest first

Oldest first

Company (A–Z)

Pagination (10 jobs per page)

Analytics Dashboard

**Interactive visualizations powered by Recharts:**

Status distribution (Pie chart)

Status comparison (Bar chart)

Monthly application trend (Line chart)

Top companies applied to

Offer success rate

**Data Persistence**

Uses browser local storage

Data remains after refresh

Fully client-side (no backend required)

**Tech Stack**
Technology	Purpose
React	UI development
Vite	Fast build & dev server
React Router	Page navigation
Recharts	Data visualization
CSS	Responsive UI styling
Local Storage	Client-side data persistence

**Project Structure**
src/
│
├── components/
│   ├── JobForm.jsx       # Add new job entries
│   ├── JobItem.jsx       # Individual job row
│   ├── JobList.jsx       # Job table view
│   ├── Navbar.jsx        # Top navigation
│   └── Stats.jsx         # Charts & analytics logic
│
├── pages/
│   └── Analytics.jsx     # Analytics dashboard page
│
├── styles/
│   └── app.css           # Application styles
│
├── App.jsx               # Main app logic
└── main.jsx              # App entry point

**Installation & Setup**
1. Clone the repository
git clone https://github.com/YOUR_USERNAME/job-tracker.git
cd job-tracker

2. Install dependencies
npm install

3. Start development server
npm run dev


**The app will run at:**

http://localhost:5173

**Build for Production**
npm run build

**Core Concepts Demonstrated**

React Hooks (useState, useEffect)

Component-based architecture

Controlled forms

Conditional rendering

Data filtering and sorting

Pagination logic

Chart data transformation

Local storage integration

Responsive UI design

SPA routing with React Router

**Use Cases**

This project is suitable for:

Portfolio demonstration

Frontend interview projects

React learning reference

Job search tracking tool

**Author**

Thejasiva

License

This project is open-source and free to use.
