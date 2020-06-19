import { Link, Redirect } from 'react-router-dom';
import editProfile from '../../actions-services/editProfile.service';
import React from 'react';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import { connect } from 'react-redux';

class Update extends React.Component {
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      status: '',
      gender: '',
      company: '',
      location: '',
      website: '',
      skills: '',
      github: '',
      bio: '',
    };
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleEdit(e) {
    e.preventDefault();
    this.props.editProfile(
      this.state.gender,
      this.state.company,
      this.state.website,
      this.state.location,
      this.state.status,
      this.state.skills,
      this.state.bio,
      this.state.github
    );
  }
  render() {
    const redirect = this.props.isUpdated;
    if (redirect) {
      return <Redirect to='/dashboard' />;
    }
    return (
      <div>
        <section className='container'>
          <h1 className='large text-primary'>Create Your Profile</h1>
          <p className='lead'>
            <i className='fas fa-user'></i> Let's get some information to make
            your profile stand out
          </p>
          <small>* = required field</small>
          <Form className='form' onSubmit={this.handleEdit}>
            <div className='form-group'>
              <select
                placeholder={this.props.status}
                name='status'
                value={this.state.status}
                onChange={this.onChange}
              >
                <option value='0'>* Select Professional Status</option>
                <option value='Developer'>Developer</option>
                <option value='Junior Developer'>Junior Developer</option>
                <option value='Senior Developer'>Senior Developer</option>
                <option value='Manager'>Manager</option>
                <option value='Student or Learning'>Student or Learning</option>
                <option value='Instructor'>Instructor or Teacher</option>
                <option value='Intern'>Intern</option>
                <option value='Other'>Other</option>
              </select>
              <small className='form-text'>
                Give us an idea of where you are at in your career
              </small>
            </div>
            <div className='form-group'>
              <select
                placeholder={this.props.gender}
                name='gender'
                value={this.state.gender}
                onChange={this.onChange}
              >
                <option value='0'>* Select Your Gender</option>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
              </select>
            </div>

            <div className='form-group'>
              <Input
                type='text'
                placeholder={this.props.company}
                name='company'
                value={this.state.company}
                onChange={this.onChange}
              />
              <small className='form-text'>
                Could be your own company or one you work for
              </small>
            </div>
            <div className='form-group'>
              <Input
                type='text'
                placeholder={this.props.website}
                name='website'
                value={this.state.website}
                onChange={this.onChange}
              />
              <small className='form-text'>
                Could be your own or a company website
              </small>
            </div>
            <div className='form-group'>
              <Input
                type='text'
                placeholder={this.props.location}
                name='location'
                value={this.state.location}
                onChange={this.onChange}
              />
              <small className='form-text'>
                City & state suggested (eg. Boston, MA)
              </small>
            </div>
            <div className='form-group'>
              <Input
                type='text'
                placeholder={this.props.skills}
                name='skills'
                value={this.state.skills}
                onChange={this.onChange}
              />
              <small className='form-text'>
                Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
              </small>
            </div>
            <div className='form-group'>
              <Input
                type='text'
                placeholder={this.props.github}
                name='Github Username'
                value={this.state.github}
                onChange={this.onChange}
              />
              <small className='form-text'>
                If you want your latest repos and a Github link, include your
                username
              </small>
            </div>
            <div className='form-group'>
              <textarea
                placeholder={this.props.bio}
                name='bio'
                value={this.state.bio}
                onChange={this.onChange}
              ></textarea>
              <small class='form-text'>Tell us a little about yourself</small>
            </div>

            <div className='my-2'>
              <button type='button' class='btn btn-light'>
                Add Social Network Links
              </button>
              <span>Optional</span>
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-twitter fa-2x'></i>
              <input type='text' placeholder='Twitter URL' name='twitter' />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-facebook fa-2x'></i>
              <input type='text' placeholder='Facebook URL' name='facebook' />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-youtube fa-2x'></i>
              <input type='text' placeholder='YouTube URL' name='youtube' />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-linkedin fa-2x'></i>
              <input type='text' placeholder='Linkedin URL' name='linkedin' />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-instagram fa-2x'></i>
              <input type='text' placeholder='Instagram URL' name='instagram' />
            </div>
            <button type='submit' className='btn btn-primary'>
              Valider
            </button>
          </Form>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isUpdated: state.profile.isUpdated,
  status: state.profile.status,
  gender: state.profile.gender,
  company: state.profile.company,
  website: state.profile.website,
  location: state.profile.location,
  skills: state.profile.skills,
  github: state.profile.github,
  bio: state.profile.bio,
});
export default connect(mapStateToProps, { editProfile })(Update);
