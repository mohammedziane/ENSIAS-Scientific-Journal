import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import PostForm from './PostForm';
import getPosts from '../../actions-services/posts/getposts';
import store from '../../store';

const Posts = ({ getPosts, post: { posts } }) => {
  useEffect(() => {
    store.dispatch(getPosts);
  }, [getPosts]); // [] :  Cela veut dire que notre Effect ne

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
              posts !== [] &&
              posts.map((post) => <PostItem post={post.split(',')} />)}
          </div>
        </section>
      </div>
    </Fragment>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  posts: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
