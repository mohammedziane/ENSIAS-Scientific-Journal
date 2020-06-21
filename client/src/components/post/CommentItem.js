import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import deleteComment from '../../actions-services/posts/deletecomment';

const CommentItem = ({
  postId,
  comment: { id_comment, text, name, date },
  current,
  auth,
}) => (
  <div className='post bg-white p-1 my-1'>
    <div>
      <Link to={`/profile/${name}`}>
        <img className='round-img' alt='' />
        <h4>{name}</h4>
      </Link>
    </div>
    <div>
      <p className='my-1'>{text}</p>
      <p className='post-date'>
        Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
      </p>
      {!auth.loading && name === current.username && (
        <button
          onClick={() => deleteComment(postId, id_comment)}
          type='button'
          className='btn btn-danger'
        >
          <i className='fas fa-times' />
        </button>
      )}
    </div>
  </div>
);

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  current: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  current: state.user,
});

export default connect(mapStateToProps)(CommentItem);
