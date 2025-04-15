const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const authRoutes = require('./routes/auth');
const recipeRoutes = require('./routes/recipes');

// Load environment variables
// In production (Vercel), environment variables are automatically loaded
// In development, load from .env.local
if (process.env.NODE_ENV !== 'production') {
    dotenv.config({ path: './.env.local' });
} else {
    // For debugging in production
    console.log('Running in production mode');
}

const app = express();

// Middleware
// Configure CORS to allow requests from any origin in production
app.use(cors({
    origin: process.env.NODE_ENV === 'production' ? '*' : 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add a simple health check route
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Recipe API is running' });
});

// Add a debug route to check environment variables
app.get('/debug', (req, res) => {
    res.status(200).json({
        nodeEnv: process.env.NODE_ENV,
        mongoDbUri: process.env.MONGODB_URI ? 'Set (hidden)' : 'Not set',
        port: process.env.PORT
    });
});

// MongoDB Connection
// Use MongoDB URI from environment variables
const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000, // Increase timeout for Atlas connection
    connectTimeoutMS: 30000,
    socketTimeoutMS: 30000,
    dbName: 'recipe-sharing' // Explicitly set database name
};

console.log('Connecting to MongoDB Atlas...');

// Attempt to connect to MongoDB Atlas
mongoose.connect(MONGODB_URI, MONGODB_OPTIONS)
.then(() => {
    console.log('Connected to MongoDB Atlas successfully');
})
.catch((err) => {
    console.error('MongoDB Atlas connection error:', err);
    console.error('Connection details:', {
        error_code: err.code,
        error_name: err.name,
        error_message: err.message
    });
    
    // Continue running the application even if MongoDB connection fails
    console.warn('WARNING: Running without database connection. Some features may not work.');
});

// Routes - no /api prefix for Vercel serverless functions
app.use('/auth', authRoutes);
app.use('/recipes', recipeRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        message: err.message || 'Something went wrong!',
        error: process.env.NODE_ENV === 'development' ? err : {}
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found', path: req.path });
});

// Use a different port to avoid conflicts
const PORT = process.env.PORT || 3002;

// For local development
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

// Export for Vercel serverless functions
module.exports = app;