# UGPWebApp

This website helps in providing UIC students with an intuitive platform to learn more about their instructors, conduct research on prior course records, and gather the information they need to plan their future schedules conveniently.

Link to GradePal - https://gradepal.net/

# To run localhost on the frontend 
  - npm start
  
# To run localhost on the backend
  - VS Code
    - SPRING-BOOT DASHBOARD extension
  - IntelliJ
    - Load the maven dependanciys and run the main program 
    
# Heroku Deployment/redeployment steps
  - Heroku deployment (BackEnd)
    1. Heroku login
    2. Go inside UGPWebApp directory
    3. git init
    4. git add .
    5. git commit -m "initial commit"
    6. heroku create <name>
    7. git push heroku master
  
  - Heroku redeployment 
    1. Go inside UGPWebApp directory
    2. git add .
    4. git commit -m "initial commit"
    5. git push heroku master
   
# Firebase Deployment/redeployment steps
  - Firebase deployment (FrontEnd)
    1. Firebase login
    2. Go inside client directory
    3. Firebase init 
      1. Choose hosting
      2. What do you want to use as your public directory? build
      3. Configure as a single-page app (rewrite all urls to /index.html)? Yes
      4. File build/index.html already exists. Overwrite? Yes
    4. GENERATE_SOURCEMAP=false npm run build (used to hide your code so it can't be visible when using dev tools) 
    5. Firebase deploy
