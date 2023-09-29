import { Button, Input } from "antd"
import AuthScreen from "../../common/components/auth/authScreen"
import { Link } from "react-router-dom"
import TICK from '../../common/assets/svgs/rightTick.svg'
import { forgot_password } from "./constant/string"

const ForgotPassword = () => {
    return (
        <>
            <AuthScreen>
                <div className="fields">
                    <div className="fields-container">
                        {
                            true ? (<>
                                <div className="header">
                                    <span>{forgot_password.welcomeMsg}</span>
                                    <h2>{forgot_password.title}</h2>
                                </div>
                                <div className="auth-form">
                                    <form>
                                        <p className="input-label">{forgot_password.fields.email}</p>
                                        <Input
                                            className="input-field"
                                            placeholder="Enter your email id"
                                        />
                                        <Button type="primary" className="signin-btn">{forgot_password.btn_text}</Button>
                                    </form>
                                </div>
                                <div className="footer">
                                    <p>{forgot_password.option} <Link to='/signup'>{forgot_password.option_link}</Link></p>
                                </div>
                            </>) : (
                                <>
                                    <div className="email-sent-message">
                                        <img src={TICK} alt="Tick" />
                                        <h2>{forgot_password.mail_sent}</h2>
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