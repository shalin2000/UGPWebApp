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
    - Heroku login
    - Go inside UGPWebApp directory
    - git init
    - git add .
    - git commit -m "initial commit"
    - heroku create <name>
    - git push heroku master
  
  - Heroku redeployment 
    - Go inside UGPWebApp directory
    - git add .
    - git commit -m "initial commit"
    - git push heroku master
   
# Firebase Deployment/redeployment steps
  - Firebase deployment (FrontEnd)
    - Firebase login
    - Go inside client directory
    - Firebase init 
      - Choose hosting
      - What do you want to use as your public directory? build
      - Configure as a single-page app (rewrite all urls to /index.html)? Yes
      - File build/index.html already exists. Overwrite? Yes
    - GENERATE_SOURCEMAP=false npm run build (used to hide your code so it can't be visible when using dev tools) 
    - Firebase deploy
