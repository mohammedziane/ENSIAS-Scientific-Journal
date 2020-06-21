import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import PostForm from './PostForm';
import getPost from '../../actions-services/posts/getpost';
import getPosts from '../../actions-services/posts/getposts';
import store from '../../store';

const Posts = ({ getPosts, posts: { postes } }) => {
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
            {postes &&
              postes.map((post) => <PostItem key={post._id} post={post} />)}
          </div>
        </section>
      </div>
    </Fragment>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  getPost: PropTypes.func.isRequired,
  posts: PropTypes.object.isRequired,
  idPosts: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
  idPosts: state.posts.idPosts,
});

export default connect(mapStateToProps, { getPosts, getPost })(Posts);
