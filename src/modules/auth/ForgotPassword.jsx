import { Button, Input, message } from "antd"
import AuthScreen from "../../common/components/auth/authScreen"
import { Link } from "react-router-dom"
import TICK from '../../common/assets/svgs/rightTick.svg'
import { forgot_password } from "./constant/string"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from "react-redux"
import { useState } from "react"
import { forgotPassword } from "./store/actions/auth"

const ForgotPassword = () => {

    const dispatch = useDispatch()
    const [successComponent, setSuccessComponent] = useState(false)
    const [messageApi, contextHolder] = message.useMessage();


    //==> Success and error callbacks <==
    const successCallback = () => {
        setSuccessComponent(true)
    }

    const errorCallback = (message) => {
        messageApi.open({
            type: 'error',
            content: message,
            duration: 5,
        });
    }


    //==> Yup-formik validation <==
    const formSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email").required('Email required'),
    })

    const initialValues = {
        email: '',
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: formSchema,
        onSubmit: (values) => {
            let payload = {
                email: values.email,
            }
            dispatch(forgotPassword(payload, successCallback, errorCallback))
        }
    })

    const { values, handleChange, handleBlur, touched, errors, submitForm } = formik


    return (
        <>
            <AuthScreen>
                <div className="fields">
                    <div className="fields-container">
                        {
                            !successComponent ? (<>
                                <div className="header">
                                    <span>{forgot_password.welcomeMsg}</span>
                                    <h2>{forgot_password.title}</h2>
                                </div>
                                <div className="auth-form">
                                    <form>
                                        <p className="input-label">{forgot_password.fields.email}</p>
                                        <Input
                                            name="email"
                                            className="input-field"
                                            placeholder="Enter your email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                        />
                                        {touched.email && errors.email && <span className='error'>{errors.email}</span>}
                                        <Button type="primary" className="signin-btn" onClick={() => submitForm()}>{forgot_password.btn_text}</Button>
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
            {contextHolder}
        </>
    )
}

export default ForgotPassword