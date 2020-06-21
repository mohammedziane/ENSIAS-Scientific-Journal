import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import addComment from '../../actions-services/posts/addcomment';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';

const CommentForm = ({ addComment, postId }) => {
  const [text, setText] = useState('');

  return (
    <div className='post-form'>
      <div className='bg-primary p'>
        <h3>Leave a Comment</h3>
      </div>
      <form
        className='form my-1'
        onSubmit={(e) => {
          e.preventDefault();
          const date = Date.now();
          addComment(postId, text, date);
          setText('');
        }}
      >
        <InputTextarea
          name='text'
          rows={5}
          cols={30}
          placeholder='Comment the post'
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <Button type='submit' className='btn btn-dark my-1' label='Comment' />
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default connect(null, { addComment })(CommentForm);
