import { useNavigate } from "react-router-dom";
import CustomButtom from "../components/CustomButtom";
import "./Login.scss";
import logo from "../assets/images/logo.png";

const Login = () => {
    const navigate = useNavigate();

    const handleSigninInclik = () => {
        navigate("/");
    };
    return (
        <>
            <div className="login-container">
                <img src={logo} alt="Logo Full Stack Club" />

                <div className="button-container">
                    <CustomButtom onClick={handleSigninInclik}>
                        Entrar
                    </CustomButtom>
                </div>
            </div>
        </>
    );
};

export default Login;
