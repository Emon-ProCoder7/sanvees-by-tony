# Installation Guide for Sanvees By Tony E-commerce Website

## Quick Start

Since you're in a directory with spaces, follow these steps:

### Method 1: Using Command Prompt
1. Open Command Prompt (cmd)
2. Navigate to the project directory:
   ```cmd
   cd "D:\Rovo Dev testing\san"
   ```
3. Install dependencies:
   ```cmd
   npm install
   ```
4. Start the development server:
   ```cmd
   npm start
   ```

### Method 2: Using the Batch File
1. Double-click on `run.bat` file in the project directory
2. This will automatically install dependencies and start the server

### Method 3: Using PowerShell with Quotes
1. Open PowerShell
2. Navigate to the project directory:
   ```powershell
   cd "D:\Rovo Dev testing\san"
   ```
3. Install dependencies:
   ```powershell
   npm install
   ```
4. Start the development server:
   ```powershell
   npm start
   ```

## What to Expect

After running `npm start`, you should see:
- The development server starting
- A browser window opening automatically at `http://localhost:3000`
- The beautiful Sanvees By Tony website with:
  - Elegant hero section
  - Product categories
  - Featured product sliders
  - Responsive design with smooth animations

## Troubleshooting

If you encounter any issues:

1. **Node.js not found**: Make sure Node.js is installed on your system
2. **npm not found**: Ensure npm is in your system PATH
3. **Port 3000 in use**: The app will automatically try port 3001, 3002, etc.
4. **Dependencies not installing**: Try deleting `node_modules` folder and running `npm install` again

## File Structure Verification

The project should have these files:
- `package.json` - Project configuration
- `public/index.html` - HTML template
- `src/App.js` - Main React component
- `src/index.js` - Entry point
- `src/components/` - Reusable components
- `src/pages/` - Page components
- `src/data/products.js` - Product data
- Various CSS files for styling

## Features Included

✅ Responsive design with elegant color scheme
✅ Product catalog with 30+ items
✅ Category-based navigation
✅ Search and filter functionality
✅ Product detail pages
✅ Smooth animations and transitions
✅ Mobile-friendly interface
✅ Direct purchase links to original store

Enjoy exploring the beautiful Sanvees By Tony e-commerce website!