import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../features/user/userSlice";

import styles from "../../styles/User.module.css";

const UserSignupForm = ({ toggleCurrentFormType, closeForm }) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isNotEmpty = Object.values(values).every((val) => val);

    if (!isNotEmpty) return;

    dispatch(createUser(values));
    closeForm();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.close} onClick={closeForm}>
        <svg className="icon">
          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`} />
        </svg>
      </div>

      <div className={styles.title}>Зарегистрироваться</div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.group}>
          <input
            type="email"
            placeholder="Введите почту"
            name="email"
            value={values.email}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.group}>
          <input
            type="name"
            placeholder="Введите имя"
            name="name"
            value={values.name}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.group}>
          <input
            type="password"
            placeholder="Введите пароль"
            name="password"
            value={values.password}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>

        

        <div
          className={styles.link}
          onClick={() => toggleCurrentFormType("login")}
        >
          Войти в существующий аккаунт
        </div>

        <button type="submit" className={styles.submit}>
          Создать новый аккаунт
        </button>
      </form>
    </div>
  );
};

export default UserSignupForm;
