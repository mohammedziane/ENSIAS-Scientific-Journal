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
  comments: [],
  loading: true,
  post: null,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        idPosts: payload,
        posts: [null],
        loading: false,
      };
    case SELECTED_POST:
      return {
        ...state,
        post: payload,
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
        posts: [payload, ...state.posts],
        loading: false,
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id_poste !== payload),
        loading: false,
      };

    case UPDATE_LIKES:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id_poste === payload.id_poste
            ? { ...post, nbr_likes: payload.nbr_likes }
            : post
        ),
        loading: false,
      };
    case ADD_COMMENT:
      return {
        ...state,
        post: { ...state.post, comments: payload },
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
        post: {
          ...state.post,
          comments: state.post.comments.filter(
            (comment) => comment._id !== payload
          ),
        },
        loading: false,
      };
    default:
      return state;
  }
}
