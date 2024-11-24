import CustomButtom from "./CustomButtom";

import "./Sidebar.scss";
import logo from "../assets/images/logo.png";

const Sidbar = () => {
    return (
        <div className="sidebar-container">
            <div className="logo">
                <img src={logo} alt="Logo Full Stack Club " />
            </div>

            <div className="sign-out">
                <CustomButtom>Sair</CustomButtom>
            </div>
        </div>
    );
};

export default Sidbar;
