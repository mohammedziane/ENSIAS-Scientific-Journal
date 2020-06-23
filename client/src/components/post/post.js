import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import PostItem from './ItemPost';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';
import getSelectedPost from '../../actions-services/posts/getselectedpost';

const Post = ({
  getSelectedPost,
  post: { post, loading, comments },
  match,
}) => {
  useEffect(() => {
    getSelectedPost(match.params.id);
  }, [getSelectedPost, match.params.id]);

  return loading || post === null ? (
    <Spinner />
  ) : (
    <section className='container'>
      <Fragment>
        <Link to='/posts' className='btn'>
          Back To Posts
        </Link>
        <PostItem post={post} showActions={false} />
        <CommentForm postId={post.id_poste} />
        <div className='comments'>
          {comments !== null &&
            comments !== [] &&
            comments.map((comment) => (
              <CommentItem
                comment={comment.split(',')}
                postId={post.id_poste}
              />
            ))}
        </div>
      </Fragment>
    </section>
  );
};

Post.propTypes = {
  getSelectedPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getSelectedPost })(Post);
