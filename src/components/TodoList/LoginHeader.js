import logo from "../../assets/logo_lg.png"
import { Link } from "react-router-dom";

function LoginHeader() {
  return (
    <nav>
      <a href="/#"><img className="logoImg" src={logo} alt="" /></a>
      <ul>
        <li className="todo_sm"><a href="/#"><span>王小明的代辦</span></a></li>
        <li><Link className="formControls_btnLink" to="/">登入</Link></li>
      </ul>
    </nav>
  );
}
export default LoginHeader