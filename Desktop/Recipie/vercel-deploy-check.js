/**
 * Vercel Deployment Configuration Check
 * 
 * This script checks if your project is properly configured for Vercel deployment.
 * Run with: node vercel-deploy-check.js
 */

const fs = require('fs');
const path = require('path');

const requiredFiles = [
  { path: 'vercel.json', type: 'file' },
  { path: 'frontend/vercel.json', type: 'file' },
  { path: 'backend/vercel.json', type: 'file' },
  { path: 'frontend/.env.production', type: 'file' },
  { path: 'backend/.env.production', type: 'file' },
  { path: 'frontend/src/services/api.js', type: 'file' },
  { path: 'backend/server.js', type: 'file' },
];

const checkFile = (filePath) => {
  try {
    const fullPath = path.join(__dirname, filePath);
    const stats = fs.statSync(fullPath);
    return stats.isFile();
  } catch (error) {
    return false;
  }
};

const checkDirectory = (dirPath) => {
  try {
    const fullPath = path.join(__dirname, dirPath);
    const stats = fs.statSync(fullPath);
    return stats.isDirectory();
  } catch (error) {
    return false;
  }
};

const checkServerJsExport = () => {
  try {
    const serverJsPath = path.join(__dirname, 'backend/server.js');
    const content = fs.readFileSync(serverJsPath, 'utf8');
    return content.includes('module.exports = app');
  } catch (error) {
    return false;
  }
};

const checkApiService = () => {
  try {
    const apiServicePath = path.join(__dirname, 'frontend/src/services/api.js');
    const content = fs.readFileSync(apiServicePath, 'utf8');
    return content.includes('import.meta.env.VITE_API_URL');
  } catch (error) {
    return false;
  }
};

console.log('\n🔍 Checking Vercel deployment configuration...\n');

let allPassed = true;

// Check required files
console.log('📁 Checking required files and directories:');
requiredFiles.forEach(item => {
  const exists = item.type === 'file' ? checkFile(item.path) : checkDirectory(item.path);
  console.log(`  ${exists ? '✅' : '❌'} ${item.path}`);
  if (!exists) allPassed = false;
});

// Check server.js exports app
console.log('\n📄 Checking server.js configuration:');
const serverExportsApp = checkServerJsExport();
console.log(`  ${serverExportsApp ? '✅' : '❌'} server.js exports app for serverless functions`);
if (!serverExportsApp) allPassed = false;

// Check API service uses environment variables
console.log('\n🔌 Checking API service configuration:');
const apiUsesEnvVars = checkApiService();
console.log(`  ${apiUsesEnvVars ? '✅' : '❌'} API service uses environment variables`);
if (!apiUsesEnvVars) allPassed = false;

// Final result
console.log('\n📊 Result:');
if (allPassed) {
  console.log('✅ All checks passed! Your project is ready for Vercel deployment.');
} else {
  console.log('❌ Some checks failed. Please fix the issues above before deploying to Vercel.');
}
console.log('');
