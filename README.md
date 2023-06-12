# PlyCard
Plycard is a website user can post question on various topics and other users can answer them. Each user has to sign up with a form or Google Auth. Once the user is signed a user can like a post, share a post and comment on any post. Every user has the ability to post new question on the website. While adding a new post to the Plycad has the option to add tags to the post which can later be used to search a specific question on the website. 


# Tech Stack Used

- Frontend - React Js, Material UI, Redux, Redux-thunk, Axios 
- Backend - Node Js, Express, Mongoose
- Tools - Docker, Kubernetes, Heroku CLI
- Database - MongoDB 
- Testing - Jest, Super Tests

# Insallation 

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

# Contribute 
Feel free to raise any issue, once assigned you can send a valid PR. 


