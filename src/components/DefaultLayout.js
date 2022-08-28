import img from "../assets/img.png"
import logo from "../assets/logo_lg.png"
import { Outlet } from "react-router-dom";

function DefaultLayout() {
  return (
    <div id="loginPage" className="bg-yellow">
        <div className="conatiner loginPage vhContainer ">
            <div className="side">
                <a href="/#"><img className="logoImg" src={logo} alt="" /></a>
                <img className="d-m-n" src={img} alt="workImg" />
            </div>
            <Outlet />
        </div>
    </div>

  );
}
export default DefaultLayout