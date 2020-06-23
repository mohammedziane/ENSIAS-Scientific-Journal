import {
  GET_POSTS,
  POST_ERROR,
  SELECTED_POST,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,
  GET_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
} from '../actions-services/types';

const initialState = {
  idPosts: [],
  posts: [],
  comment: [],
  likes: [],
  comments: [],
  comment_deleted: [],
  loading: true,
  post: null,
  postes: null,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        comments: [],
        posts: payload,
        loading: false,
      };
    case SELECTED_POST:
      return {
        ...state,
        post: payload,
        comments: payload.comments,
        loading: false,
      };
    case GET_POST:
      return {
        ...state,
        poste: state.posts.push(payload),
        loading: false,
      };
    case ADD_POST:
      return {
        ...state,
        new_post: payload.map((str) => state.posts.unshift(str)),
        loading: false,
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.localeCompare(payload)),
        loading: false,
      };

    case UPDATE_LIKES:
      return {
        ...state,
        likes: payload,
        loading: false,
      };
    case ADD_COMMENT:
      return {
        ...state,
        post: payload,
        comments: payload,
        loading: false,
      };
    case POST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case REMOVE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(
          (comment) => comment.split(',')[0] !== payload.message
        ),
      };
    default:
      return state;
  }
}
