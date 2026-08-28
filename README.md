# 💼 Job Tracker Dashboard

<p align="center">
  <strong>Track applications • Monitor progress • Analyze your job search</strong>
</p>

<p align="center">
  A modern, responsive job application tracking dashboard built with React and Vite.
</p>

---

## 🌐 Live Demo

🚀 **[Launch Job Tracker Dashboard](YOUR_VERCEL_URL)**

> A fully deployed client-side application for managing and analyzing job applications directly from the browser.

---

## 📌 Overview

Managing multiple job applications across different companies can quickly become difficult. Important details such as application dates, current status, deadlines, interview stages, and job links can easily get scattered across notes and spreadsheets.

**Job Tracker Dashboard** provides a centralized workspace where users can record, manage, search, filter, and analyze their job applications.

The application is built as a **client-side Single Page Application (SPA)** using **React and Vite**, with application data persisted using the browser's **Local Storage**.

No backend or database is required.

### 🎯 The application allows users to:

- Add and manage job applications
- Track application progress
- Update application statuses
- Record application dates and deadlines
- Store job links and notes
- Search applications quickly
- Filter applications by status
- Sort applications
- Navigate through applications using pagination
- Analyze job-search activity through interactive charts
- Persist application data across browser refreshes

---

## ✨ Key Features

### 📋 Application Management

Create and manage job applications from a centralized dashboard.

- ➕ Add new applications
- ✏️ Edit existing applications
- 🗑️ Delete applications
- 🏢 Track company names
- 💼 Track job roles
- 🔗 Store application/job links
- 📝 Add notes and additional information
- 📅 Record application dates
- ⏰ Set application deadlines

---

### 🔎 Search & Filtering

Quickly find relevant applications using smart controls.

- Search by **company name**
- Search by **job role**
- Filter by application status
- Combine search and filtering for faster navigation

Supported statuses:

- 🟦 Applied
- 🟨 Interview
- 🟩 Offer
- 🟥 Rejected

---

### ↕️ Sorting

Applications can be organized using multiple sorting options:

- Newest First
- Oldest First
- Company A–Z

This makes it easier to prioritize recent applications and locate companies quickly.

---

### 📄 Pagination

The application uses client-side pagination to keep the dashboard clean and manageable.

- 10 applications per page
- Previous/Next navigation
- Automatically adapts to filtered results

---

## 📊 Analytics Dashboard

The application includes a dedicated analytics dashboard that transforms application data into useful visual insights.

### 📈 Interactive Visualizations

Built using **Recharts**.

#### 🥧 Status Distribution

A pie chart showing the proportion of applications across different statuses.

#### 📊 Status Comparison

A bar chart comparing the number of applications in each stage.

#### 📈 Monthly Application Trend

A line chart showing application activity over time.

#### 🏢 Top Companies

Highlights companies receiving the highest number of applications.

#### 🎯 Offer Success Rate

Calculates the percentage of applications that resulted in an offer.

---

## 💾 Data Persistence

The application uses the browser's **Local Storage API** for client-side data persistence.

This means:

- Application data survives browser refreshes
- No backend server is required
- No external database is required
- The application can work entirely offline after loading
- User data remains stored within the browser

### Data Flow

```text
User Action
     ↓
React State
     ↓
Application Data
     ↓
Local Storage
     ↓
Persisted Browser Data
```

When the application loads, stored data is retrieved from Local Storage and restored into the application state.

---

## 🖥️ Application Workflow

```text
                    ┌─────────────────────┐
                    │   Job Tracker       │
                    │     Dashboard       │
                    └──────────┬──────────┘
                               │
             ┌─────────────────┼─────────────────┐
             │                 │                 │
             ▼                 ▼                 ▼
      ┌─────────────┐   ┌─────────────┐   ┌─────────────┐
      │ Add / Edit  │   │ Search &    │   │ Filter &    │
      │ Applications│   │ Sort        │   │ Organize    │
      └──────┬──────┘   └──────┬──────┘   └──────┬──────┘
             │                 │                 │
             └─────────────────┼─────────────────┘
                               ▼
                    ┌─────────────────────┐
                    │ Application         │
                    │ Tracking            │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │ Analytics Dashboard │
                    └─────────────────────┘
```

---

## 🧩 Dashboard Structure

The application is organized into two primary views:

### 🏠 Dashboard

The main application management interface.

Includes:

- Application statistics
- Search
- Filtering
- Sorting
- Add application form
- Application list
- Edit/delete controls
- Pagination

### 📊 Analytics

A dedicated analytics view for understanding job-search performance.

Includes:

- Application status distribution
- Status comparison
- Monthly application trends
- Top companies
- Offer success rate

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React** | Component-based UI development |
| **Vite** | Fast development server and production build tooling |
| **React Router** | SPA navigation and route management |
| **Recharts** | Interactive data visualization |
| **JavaScript (ES6+)** | Application logic |
| **CSS** | Responsive UI styling |
| **Local Storage API** | Client-side data persistence |
| **Git & GitHub** | Version control and source code management |
| **Vercel** | Production deployment |

---

## 🏗️ Architecture

The application follows a modular React component architecture.

```text
                    App.jsx
                       │
          ┌────────────┴────────────┐
          │                         │
       Navbar                    Routing
          │                         │
          │              ┌──────────┴──────────┐
          │              │                     │
          ▼              ▼                     ▼
     Dashboard       Dashboard             Analytics
          │
          │
     ┌────┴─────────────────────────────┐
     │                                  │
     ▼                                  ▼
  JobForm                            JobList
                                         │
                                  ┌──────┴──────┐
                                  │             │
                                  ▼             ▼
                              JobItem        Stats
```

---

## 📁 Project Structure

```text
job-tracker/
│
├── public/
│   └── _redirects
│
├── src/
│   │
│   ├── components/
│   │   ├── JobForm.jsx
│   │   ├── JobItem.jsx
│   │   ├── JobList.jsx
│   │   ├── Navbar.jsx
│   │   └── Stats.jsx
│   │
│   ├── pages/
│   │   └── Analytics.jsx
│   │
│   ├── styles/
│   │   └── app.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

---

## 🧠 Core Concepts Demonstrated

This project demonstrates practical frontend development concepts including:

### React

- Functional components
- React Hooks
- `useState`
- `useEffect`
- Component composition
- Props
- Controlled forms
- Conditional rendering

### Data Management

- CRUD operations
- State management
- Array manipulation
- Data transformation
- Local Storage integration
- Persistent client-side state

### User Interaction

- Search
- Filtering
- Sorting
- Pagination
- Form validation
- Dynamic UI updates

### Data Visualization

- Chart data transformation
- Pie charts
- Bar charts
- Line charts
- Derived statistics
- Dashboard metrics

### Routing

- Single Page Application architecture
- Client-side navigation
- React Router

### UI / UX

- Responsive layout
- Reusable components
- Dashboard-oriented design
- Interactive controls
- Empty-state handling

### Deployment

- Production build using Vite
- Git-based deployment
- Vercel hosting
- SPA routing configuration

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Thejasiva/job-tracker.git
```

### 2. Navigate to the Project

```bash
cd job-tracker
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

---

## 🏭 Build for Production

Create an optimized production build using:

```bash
npm run build
```

The production files will be generated inside:

```text
dist/
```

To preview the production build locally:

```bash
npm run preview
```

---

## 🚀 Deployment

The application is deployed using **Vercel**.

### Deployment Workflow

```text
Local Development
       ↓
Git Repository
       ↓
GitHub
       ↓
Vercel
       ↓
Production Deployment
```

The project is configured as a Vite application and can be deployed directly from the GitHub repository.

### SPA Routing

The project includes:

```text
public/_redirects
```

with the following configuration:

```text
/*    /index.html   200
```

This ensures that client-side routes continue to work correctly when deployed.

---

## 🔐 Data & Privacy

This project does not use a backend or external database.

All application data is stored locally in the user's browser using **Local Storage**.

Therefore:

- No account creation is required
- No server-side database is used
- No application data is transmitted to a backend
- Clearing browser storage will remove saved applications
- Data is specific to the browser/device where it was created

---

## 📱 Responsive Design

The dashboard is designed to provide a usable experience across different screen sizes.

The interface adapts to:

- 💻 Desktop screens
- 📱 Mobile devices
- 📟 Tablet layouts

The goal is to keep application management and analytics accessible regardless of device size.

---

## 🎯 Use Cases

The Job Tracker Dashboard can be used by:

- Students applying for internships
- Fresh graduates searching for their first role
- Developers managing multiple applications
- Professionals exploring new opportunities
- Job seekers tracking interview pipelines

---

## 💡 Why I Built This

Job searching often involves applying to multiple companies simultaneously, making it difficult to remember application dates, statuses, deadlines, interview stages, and follow-ups.

I built this project to create a simple centralized system while also practicing real-world frontend engineering concepts.

The project focuses on turning a common real-world problem into a functional, responsive, and data-driven web application.

---

## 🔮 Future Enhancements

Potential improvements include:

- 🔐 User authentication
- ☁️ Cloud database integration
- 🔄 Backend REST API
- 👤 Multi-user support
- 🔔 Application deadline reminders
- 📧 Email notifications
- 📎 Resume/document attachments
- 🏢 Company management
- 📝 Interview notes and history
- 📅 Calendar integration
- 📤 CSV import/export
- 📊 More advanced analytics
- 🌙 Dark mode
- 📱 Progressive Web App (PWA) support

---

## 📚 What I Learned

Building this project helped strengthen my understanding of:

- Building reusable React components
- Managing application state
- Designing CRUD workflows
- Persisting data with browser APIs
- Implementing search and filtering logic
- Building sorting and pagination systems
- Transforming raw data into chart-ready structures
- Creating dashboard-style interfaces
- Implementing client-side routing
- Preparing React applications for production
- Deploying frontend applications using Vercel
- Managing source code with Git and GitHub

---

## 🧪 Testing Checklist

The application can be manually tested using the following workflow:

```text
✓ Add a new application
✓ Edit an application
✓ Delete an application
✓ Search by company
✓ Search by role
✓ Filter by status
✓ Sort applications
✓ Navigate pagination
✓ Open Analytics
✓ Verify charts update
✓ Refresh the browser
✓ Verify Local Storage persistence
✓ Test responsive layouts
```

---

## 📸 Screenshots

### Dashboard

> Add a screenshot of the main Job Tracker dashboard here.

```text
screenshots/dashboard.png
```

### Analytics Dashboard

> Add a screenshot of the analytics page here.

```text
screenshots/analytics.png
```

---

## 🚀 Quick Feature Summary

| Feature | Status |
|---|---|
| Add Applications | ✅ |
| Edit Applications | ✅ |
| Delete Applications | ✅ |
| Search | ✅ |
| Filtering | ✅ |
| Sorting | ✅ |
| Pagination | ✅ |
| Local Storage | ✅ |
| Dashboard Statistics | ✅ |
| Pie Chart | ✅ |
| Bar Chart | ✅ |
| Line Chart | ✅ |
| Analytics Dashboard | ✅ |
| React Router | ✅ |
| Responsive UI | ✅ |
| Production Build | ✅ |
| Vercel Deployment | ✅ |
| Backend API | 🔮 Future Enhancement |
| Authentication | 🔮 Future Enhancement |
| Cloud Database | 🔮 Future Enhancement |

---

## 🌟 Project Highlights

```text
React + Vite
     │
     ├── Component-Based Architecture
     │
     ├── CRUD Application Management
     │
     ├── Search & Filtering
     │
     ├── Sorting & Pagination
     │
     ├── Local Storage Persistence
     │
     ├── Interactive Analytics
     │
     ├── Responsive UI
     │
     ├── SPA Routing
     │
     └── Vercel Deployment
```

---

## 👩‍💻 Author

### Thejasiva

MCA student and aspiring software developer focused on building practical applications using Python, React, AI/NLP, and modern web technologies.

### 🔗 Connect

- 💻 GitHub: [Thejasiva](https://github.com/Thejasiva)
- 💼 LinkedIn: [Thejeshvini Sivakumar](https://www.linkedin.com/in/thejeshvini-sivakumar-905930232/)
- 🌐 Portfolio: [Personal Portfolio](https://thejasiva.github.io/Portfolio/)

---

## 📄 License

This project is open-source and available for educational and personal use.

---

<p align="center">
  ⭐ If you found this project useful, consider giving the repository a star!
</p>

<p align="center">
  Built with ❤️ using React + Vite
</p>
