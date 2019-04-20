# Rezo
Social Network React

# Run frontend
cd frontend
npm install
npm start

# Run backend API (mongodb should be started)
cd backend
npm install
nodemon app

EXPRESS_PORT=5000 MONGODB_URI=mongodb://localhost:27017/db nodemon index.js
# Use node instead of nodemon if you want
