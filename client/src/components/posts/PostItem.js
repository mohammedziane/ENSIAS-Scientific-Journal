import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import Avatar from '../layout/avatar';
import getLikes from '../../actions-services/posts/getlikes';
import addLike from '../../actions-services/posts/putlike';
import removeLike from '../../actions-services/posts/putunlike';
import deletePost from '../../actions-services/posts/deletepost';
import store from '../../store';

const PostItem = ({
  getLikes,
  addLike,
  removeLike,
  deletePost,
  auth,
  current,
  post,
  likes,
}) => {
  useEffect(() => {
    getLikes(post[0]);
  }, []);
  return (
    <div className='post bg-white p-1 my-1'>
      <div>
        <Link to={`/profile/${post[2]}`}>
          <span>
            <img alt='' className='round-img' />
            <Avatar current={post[2]} />
          </span>
          <h4>{post[2]}</h4>
        </Link>
      </div>
      <div>
        <p className='my-1'>{post[1]}</p>
        <p className='post-date'>
          Posted on <Moment format='YYYY/MM/DD'>{post[5]}</Moment>
        </p>

        <Fragment>
          <button
            onClick={() => addLike(post[0], post[2])}
            type='button'
            className='btn btn-light'
          >
            <i className='fas fa-thumbs-up' />{' '}
            <span>
              {(likes != null) & (likes.length != null) && likes.length > 0 && (
                <span>{likes.length}</span>
              )}
            </span>
          </button>
          <button
            onClick={() => removeLike(post[0], post[2])}
            type='button'
            className='btn btn-light'
          >
            <i className='fas fa-thumbs-down' />
          </button>
          <Link to={`/posts/${post[0]}`} className='btn btn-primary'>
            Discussion{' '}
          </Link>
          {!auth.loading && post[2] === current.username && (
            <button
              onClick={() => deletePost(post[0])}
              type='button'
              className='btn btn-danger'
            >
              <i className='fas fa-times' />
            </button>
          )}
        </Fragment>
      </div>
    </div>
  );
};
PostItem.defaultProps = {
  showActions: true,
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  likes: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  getLikes: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  current: state.user,
  likes: state.post.likes,
});

export default connect(mapStateToProps, {
  addLike,
  removeLike,
  deletePost,
  getLikes,
})(PostItem);
