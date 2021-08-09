import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import Form from "./components/form";

const SignUp = () => {
  const [usernameIsValid, setusernameIsValid] = useState(true);
  const [passwordIsValid, setpasswordIsValid] = useState(true);
  const [form, setForm] = useState({
    logEmail: "",
    logPassword: "",
    email: "",
    userName: "",
    password: "",
  });

  const history = useHistory();
  //   const onSubmit = (data) => {
  //     return data.username && data.password && passwordIsValid && usernameIsValid
  //       ? Valid(data)
  //       : noValid();
  //   };

  const noValid = () => {
    setpasswordIsValid(false);
    setusernameIsValid(false);
    alert("krkin pordir");
    return false;
  };

  const isValid = (form) => {
    console.log("maladec");
    const name = /^([A-Za-zéàë]{2,40} ?)+$/;
    const password = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    setusernameIsValid(name.test(form.username) || form.username === "");
    setpasswordIsValid(password.test(form.password) || form.password === "");
  };
  const onSubmit = (data) => {
    console.log(form.logEmail, form.logPassword);
  };
  const onCreate = (data) => {
    console.log(form.email, form.userName, form.password);
    fetch("https://shavarshgame.herokuapp.com/api/register/", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify({
        email: "shavrshss177@gmmai.com",
        userName: "Shampain",
        password: "shavarsh222",
      }),
    })
      .then(function (res) {
        console.log(res);
      })
      .catch(function (res) {
        console.log("res");
      });
  };
  const onChangeData = (data) => {
    setForm({
      logEmail: data.logEmail,
      logPassword: data.logPassword,
      email: data.email,
      userName: data.userName,
      password: data.password,
    });
  };
  //   const form = (
  //     <FormComponet
  //       isValid={isValid}
  //       valid={{
  //         passwordIsValid: passwordIsValid,
  //         usernameIsValid: usernameIsValid,
  //       }}
  //       onSubmit={onSubmit}
  //       type={"Sign up"}
  //     />
  //   );
  return (
    <div className="row">
      <Form
        onSubmit={onSubmit}
        onCreate={onCreate}
        form={form}
        onChangeData={onChangeData}
      />
    </div>
  );
};
export default SignUp;
