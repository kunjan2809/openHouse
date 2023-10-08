import { Button, Input, Select, message } from "antd"
import AuthScreen from "../../common/components/auth/authScreen"
import { Link, useNavigate } from "react-router-dom"
import { login } from "./constant/string"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { signin } from "./store/actions/auth";
import OtpScreen from "./components/OtpScreen";
import { useState } from "react";

const { Option } = Select;

const Login = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isMobileVerified, setIsMobileVerified] = useState(true)
    const [messageApi, contextHolder] = message.useMessage();


    //==> Success and error callbacks <==
    const successCallback = (isMobileVerified) => {
        if (!isMobileVerified) {
            setIsMobileVerified(false)
        } else {
            navigate('/')
        }
    }

    const successCallbackVerifyOtp = () => {
        navigate('/')
        resetForm()
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
        country_code: Yup.string().trim().required('Country code required'),
        phone: Yup.string().matches(/^[0-9]+$/, 'Phone number must contain only numbers').min(4, 'Phone number must be at least 4 characters').max(13, 'Phone number must be at most 13 characters').required('Phone number is required'),
        password: Yup.string().trim().required('Password required')
    })

    const initialValues = {
        country_code: '+1',
        phone: '',
        password: ''
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: formSchema,
        onSubmit: (values) => {
            let payload = {
                phoneNumber: values.country_code + values.phone,
                password: values.password
            }
            dispatch(signin(payload, successCallback, errorCallback))
        }
    })

    const { values, handleChange, handleBlur, touched, errors, submitForm, setFieldValue, resetForm } = formik



    return (
        <>
            <AuthScreen>
                <div className="fields">
                    <div className="fields-container">
                        {isMobileVerified === false ?
                            <OtpScreen
                                phone={values.country_code + values.phone}
                                successCallback={successCallbackVerifyOtp}
                            /> :
                            <>
                                <div className="header">
                                    <span>{login.welcomeMsg}</span>
                                    <h1>{login.title}</h1>
                                </div>
                                <div className="auth-form">
                                    <form>
                                        <p className="input-label">{login.fields.phone}</p>
                                        <Input
                                            type="number"
                                            name="phone"
                                            className="input-field-labeled"
                                            placeholder=" "
                                            addonBefore={
                                                <Select
                                                    defaultValue="+1"
                                                    className="select-country-code"
                                                    popupClassName="country-code-selector"
                                                    onChange={(value) => setFieldValue('country_code', value)}
                                                    onBlur={handleBlur}
                                                    value={values.country_code}
                                                >
                                                    <Option value="+1">+1</Option>
                                                </Select>
                                            }
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.phone}
                                        />
                                        {touched.country_code && errors.country_code && <span className='error'>{errors.country_code}</span>}
                                        <br />
                                        {touched.phone && errors.phone && <span className='error'>{errors.phone}</span>}
                                        {/* <Input
                                            name="email"
                                            className="input-field"
                                            placeholder="Enter your email"
                                            autoComplete="username"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                        />
                                        {touched.email && errors.email && <span className='error'>{errors.email}</span>} */}

                                        <p className="input-label">{login.fields.password}</p>
                                        <Input.Password
                                            name="password"
                                            className="input-field input-field-password"
                                            placeholder="Enter password"
                                            autoComplete="current-password"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                        />
                                        {touched.password && errors.password && <span className='error'>{errors.password}</span>}

                                        <Button type="primary" className="signin-btn" onClick={() => submitForm()}>{login.btn_text}</Button>
                                    </form>
                                    <Link to='/forget-password'> <h4 className="forgot-password-title">{login.forgot_pass}</h4></Link>
                                </div>
                                <div className="footer">
                                    <p>{login.option} <Link to='/signup'>{login.option_link}</Link></p>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </AuthScreen >
            {contextHolder}
        </>
    )
}

export default Login