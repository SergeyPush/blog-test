import * as types from "./postTypes";
interface Comment {
  id: string;
  postId: number;
  body: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
  comment?: Array<Comment>;
}

interface Posts {
  posts: Array<Post>;
  selectedPost: object;
  isLoading: boolean;
}
const initialState = {
  posts: [],
  selectedPost: {},
  isLoading: false,
};

export const postReducer = (state: Posts = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_POSTS:
      return { ...state, posts: action.payload };
    case types.GET_POST:
      return { ...state, selectedPost: action.payload };
    case types.CREATE_POST:
      return { ...state, posts: [action.payload, ...state.posts] };
    case types.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
