import logo from "../../assets/logo_lg.png"
import { useAuth } from "../../Auth";

function LoginHeader(props) {
  const {setToken } = useAuth();
  const handleLogout = ()=>{
    setToken('');
  }

  return (
    <nav>
      <a href="/#"><img className="logoImg" src={logo} alt="" /></a>
      <ul>
      <li className="todo_sm"><span>{props.use && props.use.nickname}</span></li>
        <li>
          <p className="formControls_btnLink" onClick={handleLogout}>登出</p>
        </li>
      </ul>
    </nav>
  );
}
export default LoginHeader