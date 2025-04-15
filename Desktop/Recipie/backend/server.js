const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const authRoutes = require('./routes/auth');
const recipeRoutes = require('./routes/recipes');

// Load environment variables
dotenv.config({ path: './.env.local' });

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

console.log('Connecting to MongoDB Atlas at:', MONGODB_URI);

// Attempt to connect to MongoDB Atlas
mongoose.connect(MONGODB_URI, MONGODB_OPTIONS)
.then(() => {
    console.log('Connected to MongoDB Atlas successfully');
})
.catch((err) => {
    console.error('MongoDB Atlas connection error:', err);
    console.error('Connection details:', {
        uri: MONGODB_URI.replace(/:[^:]*@/, ':****@'), // Hide password in logs
        error_code: err.code,
        error_name: err.name,
        error_message: err.message
    });
    
    // Continue running the application even if MongoDB connection fails
    console.warn('WARNING: Running without database connection. Some features may not work.');
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/recipes', recipeRoutes);

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
    res.status(404).json({ message: 'Route not found' });
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