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
      <input className="formControls_input" id="email" type="text" name="email" placeholder="請輸入Email"
        {...register("email",
          {
              required: {
                value: true,
                message: '請輸入資料內容!'
              },
              pattern: {
                  value: /^\S+@\S+$/i,
                  message: "格式有誤!"
              }
          }
        )} 
      />
      <span>{errors.email && errors.email.message}</span>
    </div>
    <div>
      <label className="formControls_label" htmlFor="pwd">密碼</label>
      <input className="formControls_input" id="pwd" type="password" placeholder="請輸入密碼"
        {...register("pass",
          {
            required: {
                value: true,
                message: '請輸入資料內容!'
            },
            minLength: {
                value: 6,
                message: "密碼長度至少6位字元"
            }
          }
        )}
      />
      <span>{errors.pass && errors.pass.message}</span>
    </div>
    <input type="submit" className="formControls_btnSubmit" value="登入" />
    <Link className="formControls_btnLink" to="register">註冊帳號</Link>
  </form>
  )
}

export default Login