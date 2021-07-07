import api from '../api/posts';

 // Action Creators is a function which returns actions which has a type and payload

 export const getPosts = () => async(dispatch) => {       
     
    try {
       const {data} = await api.fetchPosts();
      
       dispatch({ type: 'FETCH_ALL', payload: data});
    }
    catch (error){
       console.log(error.message);
    }
 }