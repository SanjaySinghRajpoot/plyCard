# PlyCard
PlyCard is a web-based question and answer platform that enables users to post questions on various topics and other users can answer them. Every user has the ability to post new questions on the website, and while adding a new post to PlyCard, they have the option to add tags to the post that can later be used to search for a specific question on the website.

This repository contains the code for PlyCard, built using the MERN stack. The frontend is built using React JS with Material UI, Redux, and Axios. The backend is built using Node JS with Express, and the database used is MongoDB. The application is containerized using Docker and deployed on Heroku.


# Tech Stack Used

- Frontend - React Js, Material UI, Redux, Redux-thunk, Axios 
- Backend - Node Js, Express, Mongoose
- Tools - Docker, Kubernetes, Heroku CLI
- Database - MongoDB 
- Testing - Jest, Super Tests

# Features
- Users can sign up using a form or Google Authentication.
- Once the user is signed up, they can like a post, share a post, and comment on any post.
- Users can post new questions on the website.
- Users can add tags to their posts, which can later be used to search for a specific question on the website.

# Installation 

If you have docker installed on your computer then go to the root folder and directly run `docker compose up` in the termial. The entire application is dockerized. You can track the logs in the terminal. If you don't want to use docker then use the below commands to run the applicaion. 

1. Clone the repository:
```
git clone https://github.com/{username}/PlyCard.git
cd PlyCard
```

2. Install dependencies:

```
cd client
npm install 
npm start
```
```
cd server
npm install 
nodemon index.js
```

3. Configure the environment variables:

Create a .env file in the server directory and add the following variables:

```
MONGO_URI=<your-mongodb-uri>
SECRET=<your-secret>
```


# Images 

<img width="959" alt="Screenshot 2021-12-02 225459" src="https://user-images.githubusercontent.com/67458417/144472227-454f2b16-db07-41f5-a0e4-dc742162e822.png">
<img width="959" alt="Screenshot 2021-12-02 225542" src="https://user-images.githubusercontent.com/67458417/144472321-4796ae4d-9a77-4043-b72d-b22647cdbbc6.png">

# Contribution Guidelines
If you wish to contribute to the project, please create a new branch and submit a pull request with your changes. Before submitting the pull request, please ensure that your changes are properly tested and follow the coding standards of the project.

# License
The project is licensed under the MIT License.


