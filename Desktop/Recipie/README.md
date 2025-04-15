# Recipe Sharing Platform

## Overview
A full-stack application for sharing and discovering recipes. Users can create accounts, post their favorite recipes, browse recipes from other users, and save favorites.

## Features
- User authentication (register, login, profile management)
- Create, edit, and delete recipes
- Browse recipes with filtering options
- Save favorite recipes
- Responsive design for all devices

## Tech Stack

### Frontend
- React.js with Vite
- Material UI for styling
- React Router for navigation
- Framer Motion for animations
- Axios for API requests

### Backend
- Node.js with Express
- MongoDB with Mongoose for database
- JWT for authentication
- RESTful API architecture

## Deployment Instructions

This project is configured for deployment on Vercel. Follow these steps to deploy:

### Prerequisites
- A Vercel account (sign up at https://vercel.com if you don't have one)
- Git repository with your code (GitHub, GitLab, or Bitbucket)

### Deployment Steps

1. Push your code to your Git repository
2. Log in to your Vercel account
3. Click "New Project"
4. Import your Git repository
5. Configure the project:
   - Root Directory: `/`
   - Build Command: Will be automatically detected from vercel.json
   - Output Directory: Will be automatically detected from vercel.json
6. Add the following environment variables in the Vercel dashboard:
   - `MONGODB_URI`: Your MongoDB connection string
   - `JWT_SECRET`: Your JWT secret key
   - `NODE_ENV`: Set to `production`
7. Click "Deploy"

### Important Notes

- The project uses a monorepo structure with both frontend and backend in the same repository
- Vercel configuration files are already set up in the project
- The API routes will be accessible under the `/api` path
- The frontend uses client-side routing, which is handled by the rewrite rules in the Vercel configuration

## Local Development

### Setup

1. Clone the repository
2. Install dependencies for both frontend and backend:

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Set up environment variables:
   - Copy `backend/sample.env` to `backend/.env.local` and fill in the required values

### Running Locally

```bash
# Start backend server (from the backend directory)
npm run dev

# Start frontend development server (from the frontend directory)
npm run dev
```

## Project Structure

```
/
├── backend/                # Node.js backend
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── server.js          # Express server setup
│   └── .env.local         # Environment variables
├── frontend/              # React frontend
│   ├── public/            # Static assets
│   ├── src/               # Source code
│   │   ├── components/    # Reusable components
│   │   ├── context/       # React context providers
│   │   ├── pages/         # Page components
│   │   ├── services/      # API services
│   │   ├── App.jsx        # Main App component
│   │   └── main.jsx       # Entry point
│   └── index.html         # HTML template
├── vercel.json            # Main Vercel configuration
└── README.md              # Project documentation
```
