import { CircleUserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    navigate("/profile");
  };

  return (
    <div className="login_wrapper">
      <div className="login_wrapper_title">
        <CircleUserRound />
        <h1>Sign in</h1>
      </div>
      <form onSubmit={e => handleSubmit(e)} className="login_wrapper_form">
        <div className="login_wrapper_form_group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="login_wrapper_form_group">
          <label htmlFor="email">Password</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="login_wrapper_form_check">
          <input type="checkbox" id="remember" name="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>
        <button className="login_wrapper_form_btn" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
