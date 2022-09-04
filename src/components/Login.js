import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../Auth";

function Login(props) {
  const navigate = useNavigate(); // 跳轉路由用
  const { register, handleSubmit, formState: { errors } } = useForm();
  const {setToken } = useAuth();

  const onSubmit = (data) => {
    const _url = "https://todoo.5xcamp.us/users/sign_in";

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
          throw new Error('登入失敗，請重新檢驗！');
      }
      setToken(res.headers.get("authorization"));
      console.log()
      return res.json()
    }).then(result => {
      props.setUser(result)
      navigate('/todoList')
    }).catch((error) => {
      alert(error)
      console.log(`Error: ${error}`);
    })
  }

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
    <input type="submit" className="formControls_btnSubmit" value="登入" />
    <Link className="formControls_btnLink" to="register">註冊帳號</Link>
  </form>
  )
}

export default Login