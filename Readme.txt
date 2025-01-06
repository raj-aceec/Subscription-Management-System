# Subscription Management System

This is a **Subscription Management System** built using **Node.js** and **Express.js** with a fully interactive frontend. The application allows authenticated users to manage subscriber details through a clean and intuitive user interface.

---

## Features

### Frontend
- **User Authentication:**
  - Implemented a login page for users.
  - Authenticated users are redirected to their personalized dashboard.
- **Dashboard Functionalities:**
  - Fetch and display a list of all subscribers.
  - Add details of new subscribers.
  - Edit details of existing subscribers.
  - Delete subscriber records.

### Backend
- **User Authentication:**
  - Secure login system to verify user credentials.
- **Subscriber CRUD Operations:**
  - **GET:** Fetch all subscriber details.
  - **GET by ID:** Retrieve details of a specific subscriber using their unique ID.
  - **POST:** Add new subscriber details.
  - **PUT:** Update existing subscriber details using their ID.
  - **DELETE:** Remove subscriber details from the system using their ID.

---

## Prerequisites

- **Node.js** installed on your system.
- A database (e.g., **MySQL**, **MongoDB**, or **PostgreSQL**) configured for storing subscriber data.
- A modern web browser for accessing the application.

---

## Installation and Setup

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/subscription-management-system.git
cd subscription-management-system
