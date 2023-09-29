import { Button, Input } from "antd"
import AuthScreen from "../../common/components/auth/authScreen"
import { Link } from "react-router-dom"
import { login } from "./constant/string"

const Login = () => {
    return (
        <>
            <AuthScreen>
                <div className="fields">
                    <div className="fields-container">
                        <div className="header">
                            <span>{login.welcomeMsg}</span>
                            <h1>{login.title}</h1>
                        </div>
                        <div className="auth-form">
                            <form>
                                <p className="input-label">{login.fields.email}</p>
                                <Input
                                    className="input-field"
                                    placeholder="Enter your phone no."
                                    autoComplete="username"
                                />
                                <p className="input-label">{login.fields.password}</p>
                                <Input.Password
                                    className="input-field input-field-password"
                                    placeholder="Enter password"
                                    autoComplete="current-password"
                                />
                                <Button type="primary" className="signin-btn">{login.btn_text}</Button>
                            </form>
                            <Link to='/forget-password'> <h4 className="forgot-password-title">{login.forgot_pass}</h4></Link>
                        </div>
                        <div className="footer">
                            <p>{login.option} <Link to='/signup'>{login.option_link}</Link></p>
                        </div>
                    </div>
                </div>
            </AuthScreen >
        </>
    )
}

export default Login