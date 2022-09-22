import axios from 'axios';


const API = axios.create({ baseURL : 'http://localhost:5000'});

export const host = "http://localhost:5001";

API.interceptors.request.use((req) => {
     if(localStorage.getItem('profile')){
          req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
     }

     return req;
     
});

export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPostsByCreator = (name) => API.get(`/posts/creator?name=${name}`);
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const commentPost = (value, id) => API.post(`/posts/${id}/commentPost`, { value });

export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);

export const sendMessageRoute = `${host}/api/messages/addmsg`;
export const recieveMessageRoute = `${host}/api/messages/getmsg`;
export const allUsersRoute = `${host}/api/auth/allusers`;