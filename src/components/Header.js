import { useEffect, useState } from "react";
import { LOGO_URL } from "./utils/constants";
const Header = () => {
    const [btnNameReact, setbtnNameReact] = useState("Login");
    
        return (
        <div className="Header" >
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>cart</li>
                </ul>
                <button className="login" onClick={() => {
                    btnNameReact == "Login" ? setbtnNameReact("Logout") :setbtnNameReact("Login")
                    }}>{btnNameReact}</button>
            </div>
        </div>

    );
}
export default Header;