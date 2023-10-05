import { Button, Input } from "antd"
import AuthScreen from "../../common/components/auth/authScreen"
import { Link } from "react-router-dom"
import TICK from '../../common/assets/svgs/rightTick.svg'
import { reset_password } from "./constant/string"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from "react-redux"
import { useState } from "react"
import { resetPassword } from "./store/actions/auth"

const ResetPassword = () => {
  const token = "8e732c8bef907cd055ee317b922832105215b2ce21bdb0cf9be75fd9f6fb1d34"

  const [successComponent, setSuccessComponent] = useState(false)

  const dispatch = useDispatch()

  const successCallback = () => {
    setSuccessComponent(true)
  }

  //validation
  const formSchema = Yup.object().shape({
    password: Yup.string().trim().required('Password required').min(5, 'Password must be at least 5 characters').matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).*$/,
      'Password must contain at least one uppercase, one lowercase, one digit, and one special character'),
    confirm_password: Yup.string().required('Confirm password required').min(5, 'Password must be at least 5 characters').matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).*$/, 'Password must contain at least one uppercase, one lowercase, one digit, and one special character').oneOf([Yup.ref('password'), null], 'Passwords must match')
  })

  const initialValues = {
    password: '',
    confirm_password: ''
  }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: formSchema,
    onSubmit: (values) => {
      let payload = {
        password: values.password,
        confirm_password: values.confirm_password
      }
      console.log('payload', payload)
      dispatch(resetPassword(payload, successCallback, token))
    }
  })

  const {
    values,
    handleChange,
    handleBlur,
    touched,
    errors,
    submitForm
  } = formik

  return (
    <>
      <AuthScreen>
        <div className="fields">
          <div className="fields-container">
            {
              !successComponent ? (<>
                <div className="header">
                  <span>{reset_password.welcomeMsg}</span>
                  <h2>{reset_password.title}</h2>
                </div>
                <div className="auth-form">
                  <form>
                    <p className="input-label">{reset_password.fields.new_pass}</p>
                    <Input.Password
                      name="password"
                      className="input-field input-field-password"
                      placeholder="Enter password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    {touched.password && errors.password && <span className='error'>{errors.password}</span>}

                    <p className="input-label">{reset_password.fields.confirm_pass}</p>
                    <Input.Password
                      name="confirm_password"
                      className="input-field input-field-password"
                      placeholder="Enter password again"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.confirm_password}
                    />
                    {touched.confirm_password && errors.confirm_password && <span className='error'>{errors.confirm_password}</span>}

                    <Button type="primary" className="signin-btn" onClick={() => submitForm()}>{reset_password.btn_text}</Button>
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