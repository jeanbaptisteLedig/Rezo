# Rezo
Social Network React

## Run frontend
```bash
cd frontend
npm install
npm start
```

## Run backend API (mongodb should be started)
```bash
cd backend
npm install
nodemon app
```
You can also use node instead of nodemon if you want

EXPRESS_PORT=5000 MONGODB_URI=mongodb://localhost:27017/db nodemon index.js
