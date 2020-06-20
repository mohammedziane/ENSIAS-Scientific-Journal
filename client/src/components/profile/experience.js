import React from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import { connect } from 'react-redux';
import addExp from '../../actions-services/profile/addexp';

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      title: '',
      company: '',
      location: '',
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
    this.props.addExp(
      this.state.title,
      this.state.company,
      this.state.location,
      this.state.from,
      this.state.to,
      this.state.current,
      this.state.description
    );
  }

  render() {
    return (
      <section className='container'>
        <h1 className='large text-primary'>Add An Experience</h1>
        <p className='lead'>
          <i className='fas fa-code-branch'></i> Add any experience that you
          have had in the past
        </p>
        <small>* = required field</small>
        <Form className='form' onSubmit={this.handleEdit}>
          <div className='form-group'>
            <Input
              type='text'
              placeholder='* Job Title'
              name='title'
              value={this.state.title}
              onChange={this.onChange}
              required
            />
          </div>
          <div className='form-group'>
            <Input
              type='text'
              placeholder='* Company'
              name='company'
              value={this.state.company}
              onChange={this.onChange}
              required
            />
          </div>
          <div className='form-group'>
            <Input
              type='text'
              placeholder='Location'
              name='location'
              value={this.state.location}
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
              Current Job
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
              placeholder='Job Description'
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

export default connect(null, { addExp })(Experience);
