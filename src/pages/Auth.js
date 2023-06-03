import { useRef } from "react";
import s from "./Auth.module.css";

const Auth = () => {
  const textLoginRef = useRef();
  const textPasswordRef = useRef();

  async function Entry() {
    if (
      textPasswordRef.current.value.length !== 0 &&
      textLoginRef.current.value.length !== 0
    ) {
      window.location.href = "/projects";
    } else {
      alert("Пользователь не найден");
    }
  }

  return (
    <div className={s.background_auth}>
      <div className={s.field_back}>
        <div className={s.title}>Авторизация</div>
        <input
          type="text"
          defaultValue="user1"
          ref={textLoginRef}
          placeholder="login or name"
          className={s.input_text}
        ></input>
        <input
          type="text"
          defaultValue="pass1"
          ref={textPasswordRef}
          placeholder="password"
          className={s.input_text}
        ></input>
        <div onClick={Entry} className={s.button}>
          Entry
        </div>
      </div>
    </div>
  );
};
export default Auth;
