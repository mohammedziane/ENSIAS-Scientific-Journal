import React from 'react';
import { Link } from 'react-router-dom';
import { FileUpload } from 'primereact/fileupload';
import { InputTextarea } from 'primereact/inputtextarea';
import { connect } from 'react-redux';
import addPost from '../../actions-services/posts/addpost';
import { Button } from 'primereact/button';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onUpload = this.onUpload.bind(this);
    this.state = {
      text: '',
      date: null,
    };
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  onUpload(event) {
    this.growl.show({
      severity: 'info',
      summary: 'Success',
      detail: 'File Uploaded',
    });
  }
  onSubmit(e) {
    e.preventDefault();
    this.setState({ date: Date.now() });
    this.props.addPost(this.state.text, this.state.date);
    this.setState({ text: '', date: null });
  }
  render() {
    return (
      <div className='post-form' onSubmit={this.onSubmit}>
        <div className='bg-primary p'>
          <h3>Say Something...</h3>
        </div>
        <form className='form my-1'>
          <FileUpload
            name='demo[]'
            onUpload={this.onUpload}
            multiple={true}
            accept='image/*'
            maxFileSize={100000}
          />
          <InputTextarea
            rows={5}
            cols={30}
            name='text'
            value={this.state.text}
            onChange={this.onChange}
          />
          <Button type='submit' className='btn btn-dark my-1' label='Share' />
        </form>
      </div>
    );
  }
}

export default connect(null, { addPost })(PostForm);
