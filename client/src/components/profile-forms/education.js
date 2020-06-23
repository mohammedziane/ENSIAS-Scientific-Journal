import React from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import { connect } from 'react-redux';
import addEduc from '../../actions-services/profile/addeduc';

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      school: '',
      degree: '',
      fieldofstudy: '',
      from: '',
      to: '',
      current: null,
      description: '',
    };
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleEdit(e) {
    e.preventDefault();
    this.props.addEduc(
      this.state.school,
      this.state.degree,
      this.state.fieldofstudy,
      this.state.from,
      this.state.to,
      this.state.current,
      this.state.description
    );
  }

  render() {
    return (
      <section className='container'>
        <h1 className='large text-primary'>Add Your Education</h1>
        <p className='lead'>
          <i className='fas fa-graduation-cap'></i> Add any school, bootcamp,
          etc that you have attended
        </p>
        <small>* = required field</small>
        <Form className='form' onSubmit={this.handleEdit}>
          <div className='form-group'>
            <Input
              type='text'
              placeholder='* School or Bootcamp'
              name='school'
              value={this.state.school}
              onChange={this.onChange}
              required
            />
          </div>
          <div className='form-group'>
            <Input
              type='text'
              placeholder='* Degree or Certificate'
              name='degree'
              value={this.state.degree}
              onChange={this.onChange}
              required
            />
          </div>
          <div className='form-group'>
            <Input
              type='text'
              placeholder='Field Of Study'
              name='fieldofstudy'
              value={this.state.fieldofstudy}
              onChange={this.onChange}
            />
          </div>
          <div className='form-group'>
            <h4>From Date</h4>
            <Input
              type='date'
              name='from'
              value={this.state.from}
              onChange={this.onChange}
            />
          </div>
          <div className='form-group'>
            <p>
              <Input
                type='checkbox'
                name='current'
                value={this.state.current}
                onChange={this.onChange}
              />{' '}
              Current School Or Bootcamp
            </p>
          </div>
          <div className='form-group'>
            <h4>To Date</h4>
            <Input
              type='date'
              name='to'
              value={this.state.to}
              onChange={this.onChange}
            />
          </div>
          <div className='form-group'>
            <textarea
              name='description'
              cols='30'
              rows='5'
              placeholder='Program Description'
              value={this.state.description}
              onChange={this.onChange}
            ></textarea>
          </div>
          <button type='submit' className='btn btn-primary'>
            Valider
          </button>
          <Link className='btn btn-light my-1' to='/dashboard'>
            Go Back
          </Link>
        </Form>
      </section>
    );
  }
}

export default connect(null, { addEduc })(Education);
