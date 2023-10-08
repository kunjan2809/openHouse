import { Button, Col, Input, Row, Select, message } from "antd"
import AuthScreen from "../../common/components/auth/authScreen"
import { Link, useNavigate } from "react-router-dom"
import { signup } from "./constant/string";
import OtpScreen from "./components/OtpScreen";
import { useDispatch } from "react-redux";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { signUp } from "./store/actions/auth";
import { useState } from "react";

const { Option } = Select;

const Signup = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [isOtpScreen, setIsOtpScreen] = useState(false)
    const [messageApi, contextHolder] = message.useMessage();


    //==> Success and error callbacks <==
    const successCallback = () => {
        setIsOtpScreen(true)
    }

    const errorCallback = (message) => {
        messageApi.open({
            type: 'error',
            content: message,
            duration: 5,
        });
    }

    const successCallbackVerifyOtp = () => {
        navigate('/')
    }


    //==> Yup-formik validation <==
    const formSchema = Yup.object().shape({
        first_name: Yup.string().trim().required('First name required'),
        last_name: Yup.string().trim().required('Last name required'),
        company: Yup.string().trim().required('Company name required'),
        country_code: Yup.string().trim().required('Country code required'),
        phone: Yup.string().matches(/^[0-9]+$/, 'Phone number must contain only numbers').min(4, 'Phone number must be at least 4 characters').max(13, 'Phone number must be at most 13 characters').required('Phone number is required'),
        email: Yup.string().email("Invalid email").required('Email required'),
        password: Yup.string().trim().required('Password required').min(8, 'Password must be at least 8 characters').matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).*$/, 'Password must contain at least one uppercase, one lowercase, one digit, and one special character'),
        confirm_password: Yup.string().required('Confirm password required').min(8, 'Password must be at least 8 characters').matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).*$/, 'Password must contain at least one uppercase, one lowercase, one digit, and one special character').oneOf([Yup.ref('password'), null], 'Passwords must match')
    })

    const initialValues = {
        first_name: '',
        last_name: '',
        company: '',
        country_code: '+1',
        phone: '',
        email: '',
        password: '',
        confirm_password: ''
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: formSchema,
        onSubmit: (values) => {
            let payload = {
                firstName: values.first_name,
                lastName: values.last_name,
                companyName: values.company,
                // countryCode: values.country_code,
                phoneNumber: values.country_code + values.phone,
                email: values.email,
                password: values.password,
                confirmPassword: values.confirm_password
            }
            dispatch(signUp(payload, successCallback, errorCallback))
        }
    })

    const { values, handleChange, handleBlur, touched, errors, submitForm, setFieldValue } = formik


    return (
        <>
            <AuthScreen>
                <div className="fields">
                    <div className="fields-container">
                        {
                            !isOtpScreen ? (<>
                                <div className="header">
                                    <span>{signup.welcomeMsg}</span>
                                    <h1>{signup.title}</h1>
                                </div>
                                <div className="auth-form">
                                    <form>
                                        <p className="input-label">{signup.fields.name}</p>
                                        <Row gutter={20}>
                                            <Col span={12}>
                                                <Input
                                                    name="first_name"
                                                    className="input-field"
                                                    placeholder="First name"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.first_name}
                                                />
                                                {touched.first_name && errors.first_name && <span className='error'>{errors.first_name}</span>}
                                            </Col>
                                            <Col span={12}>
                                                <Input
                                                    name="last_name"
                                                    className="input-field"
                                                    placeholder="Last name"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.last_name}
                                                />
                                                {touched.last_name && errors.last_name && <span className='error'>{errors.last_name}</span>}
                                            </Col>
                                        </Row>

                                        <p className="input-label">{signup.fields.company}</p>
                                        <Input
                                            name="company"
                                            className="input-field"
                                            placeholder="Enter company’s name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.company}
                                        />
                                        {touched.company && errors.company && <span className='error'>{errors.company}</span>}

                                        <p className="input-label">{signup.fields.phone}</p>
                                        <Input
                                            type="number"
                                            name="phone"
                                            className="input-field-labeled"
                                            placeholder="Phone number"
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

                                        <p className="input-label">{signup.fields.email}</p>
                                        <Input
                                            name="email"
                                            className="input-field"
                                            placeholder="Enter email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                        />
                                        {touched.email && errors.email && <span className='error'>{errors.email}</span>}

                                        <p className="input-label">{signup.fields.password}</p>
                                        <Input.Password
                                            name="password"
                                            className="input-field input-field-password"
                                            placeholder="Enter password"
                                            autoComplete="new-password"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                        />
                                        {touched.password && errors.password && <span className='error'>{errors.password}</span>}

                                        <p className="input-label">{signup.fields.confirm_pass}</p>
                                        <Input.Password
                                            name="confirm_password"
                                            className="input-field input-field-password"
                                            placeholder="Re-enter password"
                                            autoComplete="new-password"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.confirm_password}
                                        />
                                        {touched.confirm_password && errors.confirm_password && <span className='error'>{errors.confirm_password}</span>}

                                        <Button type="primary" className="signin-btn" onClick={() => submitForm()}>{signup.btn_text}</Button>
                                    </form>
                                </div>
                                <div className="footer">
                                    <p>{signup.option} <Link to='/login'>{signup.option_link}</Link></p>
                                </div>
                            </>) : (<>
                                <OtpScreen
                                    phone={values.country_code + values.phone}
                                    successCallback={successCallbackVerifyOtp}
                                />
                            </>)
                        }
                    </div>
                </div>
            </AuthScreen >
            {contextHolder}
        </>
    )
}

export default Signup