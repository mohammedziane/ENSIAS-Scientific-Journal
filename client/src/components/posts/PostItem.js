import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import AvatarForm from '../layout/avatar';
import addLike from '../../actions-services/posts/putlike';
import removeLike from '../../actions-services/posts/putunlike';
import deletePost from '../../actions-services/posts/deletepost';

const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  current,
  post: { id_poste, text, name, comments, nbr_likes, date },
}) => (
  <div className='post bg-white p-1 my-1'>
    <div>
      <Link to={`/profile/${name}`}>
        <span>
          <AvatarForm current={current} />
        </span>
        <h4>{name}</h4>
      </Link>
    </div>
    <div>
      <p className='my-1'>{text}</p>
      <p className='post-date'>
        Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
      </p>

      <Fragment>
        <button
          onClick={() => addLike(id_poste)}
          type='button'
          className='btn btn-light'
        >
          <i className='fas fa-thumbs-up' />{' '}
          <span>
            {nbr_likes != null && nbr_likes.length > 0 && (
              <span>{nbr_likes.length}</span>
            )}
          </span>
        </button>
        <button
          onClick={() => removeLike(id_poste)}
          type='button'
          className='btn btn-light'
        >
          <i className='fas fa-thumbs-down' />
        </button>
        <Link to={`/posts/${id_poste}`} className='btn btn-primary'>
          Discussion{' '}
          {comments != undefined && comments.length > 0 && (
            <span className='comment-count'>{comments.length}</span>
          )}
        </Link>
        {!auth.loading && name === current.username && (
          <button
            onClick={() => deletePost(id_poste)}
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

PostItem.defaultProps = {
  showActions: true,
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  current: state.user,
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
