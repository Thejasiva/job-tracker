# 💼 Job Tracker Dashboard

> A modern and responsive job application tracking dashboard built with **React and Vite** to help users organize applications, track progress, monitor deadlines, and analyze their job search performance through interactive visualizations.

<p align="center">
  <strong>Track applications • Monitor progress • Analyze your job search</strong>
</p>

---

## 🌐 Live Demo

🚀 **Coming soon — deployment in progress**

---

## 📌 Overview

Managing multiple job applications across different companies can quickly become difficult.

**Job Tracker Dashboard** provides a centralized workspace where users can record job applications, update their application status, search and filter opportunities, monitor deadlines, and analyze their overall job-search activity.

The application is built as a **client-side Single Page Application (SPA)** using React and Vite. Application data is persisted using the browser's **Local Storage**, allowing the application to work without a backend or database.

---

## ✨ Features

### 📋 Application Management

Create and manage job applications from a centralized dashboard.

- Add new job applications
- Edit existing applications
- Delete applications
- Track company and role
- Record application date
- Set application deadlines
- Store job links
- Add notes
- Update application status

### 🔄 Application Status Tracking

Track applications through different stages of the hiring process:

| Status | Description |
|--------|-------------|
| 🟡 **Applied** | Application has been submitted |
| 🔵 **Interview** | Candidate has progressed to an interview |
| 🟢 **Offer** | Company has extended an offer |
| 🔴 **Rejected** | Application was unsuccessful |

---

### 🔎 Search, Filter & Sort

Quickly find and organize applications using:

- 🔍 Search by company or role
- 🎯 Filter applications by status
- 🆕 Sort by newest applications
- 📅 Sort by oldest applications
- 🔤 Sort companies alphabetically
- 📄 Pagination with 10 applications per page

---

### 📊 Analytics Dashboard

The dedicated analytics dashboard transforms application data into meaningful insights.

Interactive visualizations are built using **Recharts** and include:

- 🥧 Application status distribution
- 📊 Status comparison
- 📈 Monthly application trends
- 🏢 Top companies applied to
- 🎯 Offer success rate
- 📋 Overall application statistics

---

### 💾 Local Data Persistence

The application uses the browser's **Local Storage API** for persistence.

This means:

- Data survives browser refreshes
- No backend server is required
- No database configuration is required
- Data is available across browser sessions
- The application can be deployed as a static web application

> **Note:** Since data is stored locally in the browser, it is not synchronized across devices or browsers.

---

## 🖥️ Application Workflow

```text
             ┌─────────────────────┐
             │    Job Dashboard    │
             └──────────┬──────────┘
                        │
          ┌─────────────┼─────────────┐
          ▼             ▼             ▼
     Add / Edit      Search &      Filter &
     Applications     Sort          Organize
          │             │             │
          └─────────────┼─────────────┘
                        ▼
                ┌───────────────┐
                │ Application   │
                │   Tracking    │
                └───────┬───────┘
                        │
                        ▼
                ┌───────────────┐
                │   Analytics   │
                │   Dashboard   │
                └───────────────┘