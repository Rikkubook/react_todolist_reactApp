import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Register() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <form className="formControls" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="formControls_txt">註冊帳號</h2>
      <div>
        <label className="formControls_label" htmlFor="email">Email</label>
        <input className="formControls_input" type="text" placeholder="請輸入 email"
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
      <div className="">
        <label className="formControls_label" htmlFor="name">您的暱稱</label>
        <input className="formControls_input" id="name" type="text" name="name" placeholder="請輸入您的暱稱" 
          {...register("name", 
            {
              required: {
                value: true,
                message: '請輸入資料內容!'
              },
              minLength: {
                value: 2,
                message: "最少兩個字"
              }
            })
          } 
        />
        <span>{errors.name && errors.name.message}</span>
        {/*<span>{errors.name?.message}</span>*/}
      </div>
      <div>
        <label className="formControls_label" htmlFor="pwd">密碼</label>
        <input
          className="formControls_input" id="pwd" type="password" placeholder="請輸入密碼"
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
      <div>
        <label className="formControls_label" htmlFor="pwdcheck">再次輸入密碼</label>
        <input className="formControls_input" id="pwdcheck" type="password" placeholder="請再次輸入密碼" 
          {...register("pwdcheck",
              {
                  required: {
                      value: true,
                      message: '請輸入資料內容!'
                  },
                  minLength: {
                      value: 6,
                      message: "密碼長度至少6位字元"
                  },validate: (val) => {
                      if (watch('pwd') !== val) {
                        return "密碼不一致";
                      }
                    }
              }
          )}
        />
        <span>{errors.pwdcheck && errors.pwdcheck.message}</span>
      </div>
      <input type="submit" className="formControls_btnSubmit" value="註冊帳號" />
      <Link className="formControls_btnLink" to="/">登入</Link> {/*如果是 admin to="/admin"*/ }
    </form>
  )
}

export default Register