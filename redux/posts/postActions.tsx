import * as types from "./postTypes";
import axios from "axios";
import { Post } from "./postReducer";
axios.defaults.baseURL = "https://simple-blog-api.crew.red";

export const getAllPosts = () => async (dispatch) => {
  const response = await axios.get("/posts");
  dispatch({
    type: types.GET_ALL_POSTS,
    payload: response.data.reverse(),
  });
};

export const getOnePost = (id: number) => async (dispatch) => {
  try {
    const response = await axios.get(`/posts/${id}?_embed=comments`);
    dispatch({
      type: types.GET_POST,
      payload: response.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
export const createNewPost = (post: Post) => async (dispatch) => {
  try {
    const response = await axios.post(`/posts`, { ...post });
    const responsePost = response.data;
    dispatch({
      type: types.CREATE_POST,
      payload: responsePost,
    });
  } catch (error) {
    console.log(error.message);
  }
};
export const removePost = (id: number) => async (dispatch) => {
  try {
    await axios.delete(`/posts/${id}`);
    dispatch({
      type: types.DELETE_POST,
      payload: id,
    });
  } catch (error) {
    console.log(error.message);
  }
};
