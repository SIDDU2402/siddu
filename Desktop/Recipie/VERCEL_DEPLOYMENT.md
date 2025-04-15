# Vercel Deployment Guide for Recipe Sharing Application

This guide explains how to deploy your Recipe Sharing application to Vercel.

## Prerequisites

1. A Vercel account (sign up at https://vercel.com if you don't have one)
2. Vercel CLI installed (optional, but helpful for testing)
   ```
   npm install -g vercel
   ```

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Log in to your Vercel account
3. Click "New Project"
4. Import your Git repository
5. Configure the project:
   - Root Directory: Leave as `/`
   - Build Command: Will be automatically detected from vercel.json
   - Output Directory: Will be automatically detected from vercel.json
6. Add the following environment variables in the Vercel dashboard:
   - `MONGODB_URI`: Your MongoDB connection string
   - `JWT_SECRET`: Your JWT secret key
   - `NODE_ENV`: Set to `production`
7. Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. Navigate to your project root directory
2. Run `vercel login` and follow the authentication steps
3. Run `vercel` to deploy
4. Follow the prompts to configure your project
5. When asked about environment variables, add the ones listed above

## Project Structure

This project has been configured with the following Vercel-specific files:

- `/vercel.json` - Main configuration for the monorepo deployment
- `/frontend/vercel.json` - Frontend-specific configuration
- `/backend/vercel.json` - Backend-specific configuration
- `/frontend/.env.production` - Production environment variables for frontend
- `/backend/.env.production` - Production environment variables for backend

## Important Notes

1. **Environment Variables**: Sensitive information like database credentials and JWT secrets should be added through the Vercel dashboard and not committed to your repository.

2. **MongoDB Connection**: Ensure your MongoDB Atlas cluster is configured to accept connections from any IP address, or specifically whitelist Vercel's IP ranges.

3. **API Routes**: All backend routes will be accessible under the `/api` path.

4. **Frontend Routing**: The frontend uses client-side routing, which is handled by the rewrite rules in the Vercel configuration.

## Troubleshooting

- **Deployment Fails**: Check the build logs in the Vercel dashboard for specific errors.
- **API Not Accessible**: Verify that your API routes are correctly prefixed with `/api`.
- **Database Connection Issues**: Ensure your MongoDB Atlas connection string is correct and the IP is whitelisted.

## Local Development

You can continue to use your existing development setup locally:

- Frontend: `cd frontend && npm run dev`
- Backend: `cd backend && npm run dev`

The Vercel configuration only affects the production deployment, not your local development environment.
