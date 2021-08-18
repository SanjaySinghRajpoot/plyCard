import { STATES } from "mongoose";
import {
  FETCH_ALL,
  CREATE,
  FETCH_POST,
  UPDATE,
  DELETE,
  LIKE,
  FETCH_BY_SEARCH,
} from "../constants/actionTypes";

export default (posts = [], action) => {
  // for multiple calls
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case FETCH_POST:
      return { ...STATES, post: action.payload };
    case FETCH_BY_SEARCH:
        return { ...STATES, posts: action.payload.data };
    case LIKE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case CREATE:
      return [...posts, action.payload];
    case UPDATE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};
