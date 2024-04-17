// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    showErrorOnBlur: false,
    submitError: '',
    registrationSuccess: false,
    isEmpty: '',
  }

  submitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state

    if (firstName.trim() === '' || lastName.trim() === '') {
      this.setState({submitError: 'Required'})
    } else {
      // Submission successful
      this.setState({submitError: '', registrationSuccess: true})
    }
  }

  submitAnotherResponse = () => {
    this.setState({
      firstName: '',
      lastName: '',
      submitError: '',
      registrationSuccess: false,
    })
  }

  handleFirstNameChange = event => {
    this.setState({firstName: event.target.value})
  }

  handleLastNameChange = event => {
    this.setState({lastName: event.target.value})
  }

  handleBlur = () => {
    const {firstName, lastName} = this.state
    if (firstName.trim() === '' || lastName.trim() === '') {
      this.setState({
        showErrorOnBlur: true,
        submitError: 'Required',
        isEmpty: 'changeTheme',
      })
    } else {
      this.setState({showErrorOnBlur: false, isEmpty: ''})
    }
  }

  render() {
    const {
      firstName,
      lastName,
      showErrorOnBlur,
      submitError,
      registrationSuccess,
      isEmpty,
    } = this.state

    if (registrationSuccess) {
      return (
        <div className="registration-success">
          <h1>Registration</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
            className="success-img"
            alt="success"
          />
          <p>Submitted Successfully</p>
          <button
            type="button"
            className="submit-but"
            onClick={this.submitAnotherResponse}
          >
            Submit Another Response
          </button>
        </div>
      )
    }

    return (
      <div className="bg-container">
        <form onSubmit={this.submitForm}>
          <h1 className="title">Registration</h1>
          <label htmlFor="firstname">FIRST NAME</label>
          <br />
          <input
            type="text"
            id="firstname"
            placeholder="First name"
            value={firstName}
            onChange={this.handleFirstNameChange}
            onBlur={this.handleBlur}
            className={isEmpty}
          />
          {showErrorOnBlur && firstName.trim() === '' && submitError && (
            <p className="error-msg">Required</p>
          )}
          <br />
          <label htmlFor="lastname">LAST NAME</label>
          <br />
          <input
            type="text"
            id="lastname"
            placeholder="Last name"
            value={lastName}
            onChange={this.handleLastNameChange}
            onBlur={this.handleBlur}
            className={isEmpty}
          />
          {showErrorOnBlur && lastName.trim() === '' && submitError && (
            <p className="error-msg">Required</p>
          )}
          <br />
          <button type="submit" className="submit-but">
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default RegistrationForm
