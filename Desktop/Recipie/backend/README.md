# Recipe Sharing App - Backend Setup

## MongoDB Connection Setup

### Local Development
By default, the application connects to a local MongoDB instance at:
```
mongodb://localhost:27017/recipe-sharing
```

### Hosting Your Application
When hosting your application, you'll need to set the `MONGODB_URI` environment variable to point to your hosted MongoDB instance.

#### Setting up MongoDB Atlas (Recommended)
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. Create a new cluster
3. Click "Connect" on your cluster
4. Choose "Connect your application"
5. Copy the connection string
6. Replace `<username>`, `<password>`, and `<dbname>` with your actual values

#### Setting the Environment Variable
Depending on your hosting platform, you'll need to set the `MONGODB_URI` environment variable:

- **Heroku**: In the dashboard, go to Settings → Config Vars
- **Vercel**: In the dashboard, go to Settings → Environment Variables
- **Netlify**: In the dashboard, go to Site settings → Build & deploy → Environment
- **Railway/Render**: In the dashboard, find Environment section

#### Connection String Format
```
mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority
```

## Other Environment Variables
See `sample.env` for other environment variables you may need to set when hosting.
