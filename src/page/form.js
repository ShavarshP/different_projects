import React from "react";
import FormComponet from "../componet/formComponet";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  isValid = () => {
    console.log("maladec");
  };

  render() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>

            <FormComponet isValid={this.isValid} />
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
