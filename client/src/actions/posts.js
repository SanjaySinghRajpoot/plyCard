import { FETCH_ALL, FETCH_BY_SEARCH, CREATE,COMMENT, UPDATE, DELETE, LIKE, FETCH, END_LOADING, START_LOADING, FETCH_POST } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchPost(id);

    dispatch({ type: FETCH_POST, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getPostsBySearch = (searchQuery) => async(dispatch) => {
   try{
    const { data } = await api.fetchPostsBySearch(searchQuery); 
     
    dispatch({ type: FETCH_BY_SEARCH, payload: data });

   } catch (error) {
      console.log(error);
   }
}

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id }); // data along with function 
  } catch (error) {
    console.log(error.message);
  }
};

export const commentPost = (value, id) => async(dispatch) => {
    try{

      const { data } = await api.commentPost(value, id);
      
      dispatch({ type: COMMENT, payload: data });

      return data.comments;
    } catch(error) {
         console.log(error);
    }
};