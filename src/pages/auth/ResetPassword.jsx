import { Button, Input } from "antd"
import AuthScreen from "../../components/auth/authScreen"
import { Link } from "react-router-dom"
import TICK from '../../assets/svgs/rightTick.svg'

const ResetPassword = () => {
  return (
    <>
      <AuthScreen>
        <div className="fields">
          <div className="fields-container">
            {
              true ? (<>
                <div className="header">
                  <span>Welcome back!</span>
                  <h2>Reset your password</h2>
                </div>
                <div className="auth-form">
                  <form>
                    <p className="input-label">New Password</p>
                    <Input.Password
                      className="input-field input-field-password"
                      placeholder="Enter password"
                    />
                    <p className="input-label">Confirm Password</p>
                    <Input.Password
                      className="input-field input-field-password"
                      placeholder="Enter password again"
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
                    <h2>{`Your password has been updated successfully`}.</h2>
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