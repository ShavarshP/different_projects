import React from "react";
import FormComponet from "../componet/formComponet";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isValidForm: {
        nameIsValid: true,
        surnameIsValid: true,
        emailIsValid: true,
        usernameIsValid: true,
        passwordIsValid: true,
      },
    };
  }

  isValid = (form) => {
    const name = /^([A-Za-zéàë]{2,40} ?)+$/;
    const email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const password = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    console.log(form);
    this.setState({
      isValidForm: {
        nameIsValid: name.test(form.name) || form.name === "",
        surnameIsValid: name.test(form.surname) || form.surname === "",
        emailIsValid: email.test(form.email) || form.email === "",
        usernameIsValid: name.test(form.username) || form.username === "",
        passwordIsValid: password.test(form.password) || form.password === "",
      },
    });
  };

  render() {
    const form = (
      <FormComponet isValid={this.isValid} valid={this.state.isValidForm} />
    );
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>

            {form}
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
