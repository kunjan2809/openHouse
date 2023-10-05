import { Button, Input } from "antd"
import AuthScreen from "../../common/components/auth/authScreen"
import { Link, useNavigate } from "react-router-dom"
import { login } from "./constant/string"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { signin } from "./store/actions/auth";

const Login = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const successCallback = () => {
        navigate('/')
    }

    //validation
    const formSchema = Yup.object().shape({
        email: Yup.string().trim().required('Email required').matches(/^(\d{4,13})$|^\S+@\S+\.\S+$/, 'Please enter a valid phone number or email address.'),
        password: Yup.string().trim().required('Password required').min(5, 'Password must be at least 5 characters').matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).*$/, 'Password must contain at least one uppercase, one lowercase, one digit, and one special character'),
    })

    const initialValues = {
        email: '',
        password: ''
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: formSchema,
        onSubmit: (values) => {
            let payload = {
                email: values.email,
                password: values.password
            }
            console.log('payload', payload)
            dispatch(signin(payload, successCallback))
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
                        <div className="header">
                            <span>{login.welcomeMsg}</span>
                            <h1>{login.title}</h1>
                        </div>
                        <div className="auth-form">
                            <form>
                                <p className="input-label">{login.fields.email}</p>
                                <Input
                                    name="email"
                                    className="input-field"
                                    placeholder="Enter your email"
                                    autoComplete="username"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                {touched.email && errors.email && <span className='error'>{errors.email}</span>}

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
                    </div>
                </div>
            </AuthScreen >
        </>
    )
}

export default Login