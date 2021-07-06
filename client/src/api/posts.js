import axios from 'axios';

const url = 'https://localhost:5000/posts';

const fetchPosts = () => axios.get(url); 



export default fetchPosts;