import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <form className="formControls" onSubmit={handleSubmit(onSubmit)}>
    <h2 className="formControls_txt">最實用的線上代辦事項服務</h2>
    <div>
      <label className="formControls_label" htmlFor="email">Email</label>
      <input className="formControls_input" id="email" type="text" name="email" placeholder="請輸入Email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
      {errors.email && <span>此欄位必填</span>}
    </div>
    <div>
      <label className="formControls_label" htmlFor="pwd">密碼</label>
      <input className="formControls_input" id="pwd" type="password" placeholder="請輸入密碼" {...register("pass", {required: true, min: 6})} />
      {errors.pass && <span>此欄位必填</span>}
    </div>
    <input type="submit" className="formControls_btnSubmit" value="登入" />
    <Link className="formControls_btnLink" to="register">註冊帳號</Link>
  </form>
  )
}

export default Login