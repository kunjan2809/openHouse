import { Button, Input } from "antd"
import AuthScreen from "../../common/components/auth/authScreen"
import { Link } from "react-router-dom"
import TICK from '../../common/assets/svgs/rightTick.svg'

const ForgotPassword = () => {
    return (
        <>
            <AuthScreen>
                <div className="fields">
                    <div className="fields-container">
                        {
                            true ? (<>
                                <div className="header">
                                    <span>Forgot Your Password?</span>
                                    <h2>Don’t worry, We’ve got your back!</h2>
                                </div>
                                <div className="auth-form">
                                    <form>
                                        <p className="input-label">Email ID</p>
                                        <Input
                                            className="input-field"
                                            placeholder="Enter your email id"
                                        />
                                        <Button type="primary" className="signin-btn">Submit</Button>
                                    </form>
                                </div>
                                <div className="footer">
                                    <p>New to Open House? <Link to='/signup'>Sign up</Link></p>
                                </div>
                            </>) : (
                                <>
                                    <div className="email-sent-message">
                                        <img src={TICK} alt="Tick" />
                                        <h2>{`We've sent you an email with instructions to reset your password.`}</h2>
                                    </div>
                                </>
                            )
                        }
                    </div>
                </div>
            </AuthScreen >
        </>
    )
}

export default ForgotPassword