import CustomButtom from "../components/CustomButtom";
import "./Login.scss";
import logo from "../assets/images/logo.png";

const Login = () => {
    return (
        <>
            <div className="login container">
                <img src={logo} alt="Logo Full Stack Club" />

                <div className="button-container">
                    <CustomButtom>Entrar</CustomButtom>
                </div>
            </div>
        </>
    );
};

export default Login;
