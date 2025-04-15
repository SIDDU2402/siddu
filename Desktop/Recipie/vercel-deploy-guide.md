# Vercel Deployment Guide for Recipe Sharing Platform

## Troubleshooting 404 Errors

If you're experiencing 404 errors when deploying to Vercel, here are some steps to resolve the issue:

### Option 1: Deploy Frontend and Backend Separately

This is often the most reliable approach for beginners:

1. **Deploy Backend First**:
   - Create a new Vercel project specifically for the backend
   - Select only the `backend` directory during import
   - Set the following environment variables:
     - `MONGODB_URI`: Your MongoDB connection string
     - `JWT_SECRET`: Your JWT secret key
     - `NODE_ENV`: `production`
   - Note the deployed URL (e.g., `recipe-api.vercel.app`)

2. **Update Frontend API URL**:
   - Edit `frontend/.env.production`:
     ```
     VITE_API_URL=https://your-backend-url.vercel.app/api
     ```

3. **Deploy Frontend**:
   - Create another Vercel project for the frontend
   - Select only the `frontend` directory during import
   - Vercel will automatically detect it as a Vite/React project

### Option 2: Use Vercel CLI for More Control

The Vercel CLI gives you more control over the deployment process:

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Log in to Vercel:
   ```bash
   vercel login
   ```

3. Deploy from your project directory:
   ```bash
   vercel
   ```

4. Follow the interactive prompts to configure your project

### Option 3: Simplify Your Project Structure

If you're still having issues, you might need to simplify your project structure:

1. **Move Backend to a Separate Repository**:
   - This allows you to deploy the backend as a standalone API
   - Update the frontend to point to this API

2. **Use Vercel's API Routes for Simple Backend Functions**:
   - For simpler applications, you can use Vercel's built-in API routes
   - Create an `api` directory in your frontend project

## Common Issues and Solutions

### 404 Errors

- **Problem**: Vercel can't find your application after deployment
- **Solution**: Make sure your `vercel.json` routing is correct and you have a proper fallback route

### Build Failures

- **Problem**: Vercel fails to build your application
- **Solution**: Check build logs for errors, ensure all dependencies are properly listed in package.json

### API Connection Issues

- **Problem**: Frontend can't connect to backend API
- **Solution**: Ensure your environment variables are correctly set and CORS is properly configured

## Step-by-Step Deployment Guide

### 1. Prepare Your Project

- Ensure all environment variables are properly set in `.env.production` files
- Make sure your `vercel.json` configuration is correct
- Test your application locally before deploying

### 2. Deploy via GitHub Integration

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import your GitHub repository
5. Configure project settings:
   - Framework Preset: Select "Other" for monorepo or the appropriate framework
   - Root Directory: Set to the appropriate directory if not deploying the entire repo
   - Build Command: Leave as default or customize if needed
   - Output Directory: Leave as default or customize if needed
6. Add environment variables
7. Click "Deploy"

### 3. Verify Deployment

- Check the deployment logs for any errors
- Test your application at the provided Vercel URL
- Verify that all features work as expected

## Need More Help?

If you're still experiencing issues, consider:

1. Checking the [Vercel documentation](https://vercel.com/docs)
2. Posting on [Stack Overflow](https://stackoverflow.com/) with the `vercel` tag
3. Contacting Vercel support directly
