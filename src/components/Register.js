import { Link } from "react-router-dom";

function Register() {
  return (
    <form class="formControls" action="index.html">
      <h2 class="formControls_txt">註冊帳號</h2>
      <label class="formControls_label" for="email">Email</label>
      <input class="formControls_input" type="text" id="email" name="email" placeholder="請輸入 email" required />
      <label class="formControls_label" for="name">您的暱稱</label>
      <input class="formControls_input" type="text" id="name" name="email" placeholder="請輸入您的暱稱" required />
      <label class="formControls_label" for="pwd">密碼</label>
      <input class="formControls_input" type="password" name="pwd" id="pwd" placeholder="請輸入密碼" required />
      <label class="formControls_label" for="pwdcheck">再次輸入密碼</label>
      <input class="formControls_input" type="password" name="pwdcheck" id="pwdcheck" placeholder="請再次輸入密碼" required />
      <input class="formControls_btnSubmit" type="button" onclick="" value="註冊帳號" />
      <Link class="formControls_btnLink" to="/">登入</Link> {/*如果是 admin to="/admin"*/ }
    </form>
  )
}

export default Register