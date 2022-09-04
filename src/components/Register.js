import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../Auth";

function Register() {
  const navigate = useNavigate(); // 跳轉路由用
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { token, setToken } = useAuth();

  const onSubmit = (data) => {
    const _url = "https://todoo.5xcamp.us/users";

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    fetch(_url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          user: data
      })
    }).then(res => {
      if(res.status===401){
        throw new Error('註冊失敗！');
      }
      if(res.status===422){
        throw new Error('電子信箱 已被使用！');
      }
      setToken(res.headers.get("authorization"));
      return res.json()
    }).then(result => {
        navigate('/todoList')
    }).catch((error) => {
      alert(error)
      console.log(`Error: ${error}`);
    })
  };
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
        <input className="formControls_input" id="name" type="text" name="nickname" placeholder="請輸入您的暱稱" 
          {...register("nickname", 
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
      </div>
      <div>
        <label className="formControls_label" htmlFor="pwd">密碼</label>
        <input
          className="formControls_input" id="pwd" type="password" name="password" placeholder="請輸入密碼"
          {...register("password",
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
        <span>{errors.password && errors.password.message}</span>
      </div>
      <div>
        <label className="formControls_label" htmlFor="pwdCheck">再次輸入密碼</label>
        <input className="formControls_input" id="pwdCheck" type="password" placeholder="請再次輸入密碼" 
          {...register("pwdCheck",
              {
                  required: {
                      value: true,
                      message: '請輸入資料內容!'
                  },
                  minLength: {
                      value: 6,
                      message: "密碼長度至少6位字元"
                  },validate: (val) => {
                      if (watch('password') !== val) {
                        return "密碼不一致";
                      }
                    }
              }
          )}
        />
        <span>{errors.pwdCheck && errors.pwdCheck.message}</span>
      </div>
      <input type="submit" className="formControls_btnSubmit" value="註冊帳號" />
      <Link className="formControls_btnLink" to="/">登入</Link> {/*如果是 admin to="/admin"*/ }
    </form>
  )
}

export default Register