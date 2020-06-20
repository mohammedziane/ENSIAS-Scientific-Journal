import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import PostForm from './PostForm';
import getPosts from '../../actions-services/posts/getposts';
import store from '../../store';

const Posts = ({ post: { posts } }) => {
  useEffect(() => {
    store.dispatch(getPosts());
  });

  return (
    <Fragment>
      <div>
        <section className='container'>
          <h1 className='large text-primary'>Posts</h1>
          <p className='lead'>
            <i className='fas fa-user' /> Welcome to the community
          </p>
          <PostForm />
          <div className='posts'>
            {posts &&
              posts.map((post) => <PostItem key={post.id_poste} post={post} />)}
          </div>
        </section>
      </div>
    </Fragment>
  );
};

Posts.propTypes = {
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.posts.posts,
});

export default connect(mapStateToProps)(Posts);
