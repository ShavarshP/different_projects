import React from "react";
import FormComponet from "./formComponet";

class Authentication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isValidForm: {
        usernameIsValid: true,
        passwordIsValid: true,
      },
    };
  }
  onSubmit = (data) => {
    data.username &&
    data.password &&
    this.state.isValidForm.usernameIsValid &&
    this.state.isValidForm.passwordIsValid
      ? console.log(
          data.username,
          data.password,
          this.state.isValidForm.usernameIsValid,
          this.state.isValidForm.passwordIsValid
        )
      : this.setState({
          isValidForm: {
            usernameIsValid: false,
            passwordIsValid: false,
          },
        });
    alert("krkin pordir");
  };

  isValid = (form) => {
    const name = /^([A-Za-zéàë]{2,40} ?)+$/;
    const password = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    this.setState({
      isValidForm: {
        usernameIsValid: name.test(form.username) || form.username === "",
        passwordIsValid: password.test(form.password) || form.password === "",
      },
    });
  };

  render() {
    const form = (
      <FormComponet
        isValid={this.isValid}
        valid={this.state.isValidForm}
        onSubmit={this.onSubmit}
      />
    );
    return (
      <div className="min-h-screen flex  justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>{form}</div>
        </div>
      </div>
    );
  }
}

export default Authentication;
