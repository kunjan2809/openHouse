import { Button, Input } from "antd"
import AuthScreen from "../../components/auth/authScreen"
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <>
            <AuthScreen>
                <div className="fields">
                    <div className="fields-container">
                        <div className="header">
                            <span>Welcome to Open House!</span>
                            <h1>Sign in to your account</h1>
                        </div>
                        <div className="auth-form">
                            <form>
                                <p className="input-label">Phone Number</p>
                                <Input
                                    className="input-field"
                                    placeholder="Enter your phone no."
                                />
                                <p className="input-label">Password</p>
                                <Input.Password
                                    className="input-field"
                                    placeholder="Enter password"
                                />
                                <Button type="primary" className="signin-btn">Sign in</Button>
                            </form>
                            <Link to='/forget-password'> <h4 className="forgot-password-title">Forgot Password?</h4></Link>
                        </div>
                        <div className="footer">
                            <p>New to Open House? <Link to='/signup'>Sign up</Link></p>
                        </div>
                    </div>
                </div>
            </AuthScreen >
        </>
    )
}

export default Login