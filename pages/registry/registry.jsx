import React from "react";

class Registry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      errors: {},
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // Validate form data
    const errors = {};
    if (!this.state.firstName) {
      errors.firstName = "First name is required";
    }
    if (!this.state.lastName) {
      errors.lastName = "Last name is required";
    }
    if (!this.state.email) {
      errors.email = "Email is required";
    }
    if (!this.state.password) {
      errors.password = "Password is required";
    }
    if (!this.state.confirmPassword) {
      errors.confirmPassword = "Confirm password is required";
    }
    if (this.state.password !== this.state.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
    } else {
      // Submit form data to server
      console.log("Submitting form data:", this.state);
    }
  };

  render() {
    const { errors } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleInputChange}
          />
          {errors.firstName && <span>{errors.firstName}</span>}
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleInputChange}
          />
          {errors.lastName && <span>{errors.lastName}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            onChange={this.handleInputChange}
          />
          {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
        </div>
        <button type="submit">Register</button>
      </form>
    );
  }
}

export default Registry;
