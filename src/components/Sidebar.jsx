import CustomButtom from "./CustomButtom";

import "./Sidebar.scss";
import logo from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

const Sidbar = () => {
    const navigate = useNavigate();

    const handleSignup = () => {
        navigate("/login");
    };
    return (
        <div className="sidebar-container">
            <div className="logo">
                <img src={logo} alt="Logo Full Stack Club " />
            </div>

            <div className="sign-out">
                <CustomButtom onClick={handleSignup}>Sair</CustomButtom>
            </div>
        </div>
    );
};

export default Sidbar;
