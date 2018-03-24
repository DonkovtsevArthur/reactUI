import React from "react";

import Input from "./Input.jsx";
import { CSSTransition } from "react-transition-group";
import "./Form.css";

const Form = ({ onSubmit, ...props }) => {
  return <CSSTransition {...props} classNames="fade" timeout={500}  unmountOnExit={true}>
      <form className="signup-form" onSubmit={onSubmit}>
        <Input type="text" name="firstname" placeholder="Имя" />
        <Input type="text" name="lastname" placeholder="Фамилия" />
        <Input type="email" name="email" placeholder="Email" />
        <Input type="password" name="pasword" placeholder="Пароль" />
        <button type="submit" className="signup-form-div-button">
          Зарегистрироваться
        </button>
      </form>
    </CSSTransition>;
};

export default Form;
