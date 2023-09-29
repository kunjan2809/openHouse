import { Button, Input } from "antd"
import AuthScreen from "../../common/components/auth/authScreen"
import { Link } from "react-router-dom"
import TICK from '../../common/assets/svgs/rightTick.svg'
import { reset_password } from "./constant/string"

const ResetPassword = () => {
  return (
    <>
      <AuthScreen>
        <div className="fields">
          <div className="fields-container">
            {
              true ? (<>
                <div className="header">
                  <span>{reset_password.welcomeMsg}</span>
                  <h2>{reset_password.title}</h2>
                </div>
                <div className="auth-form">
                  <form>
                    <p className="input-label">{reset_password.fields.new_pass}</p>
                    <Input.Password
                      className="input-field input-field-password"
                      placeholder="Enter password"
                    />
                    <p className="input-label">{reset_password.fields.confirm_pass}</p>
                    <Input.Password
                      className="input-field input-field-password"
                      placeholder="Enter password again"
                    />
                    <Button type="primary" className="signin-btn">{reset_password.btn_text}</Button>
                  </form>
                </div>
                <div className="footer">
                  <p>{reset_password.option} <Link to='/signup'>{reset_password.option_link}</Link></p>
                </div>
              </>) : (
                <>
                  <div className="email-sent-message">
                    <img src={TICK} alt="Tick" />
                    <h2>{reset_password.reset}</h2>
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

export default ResetPassword