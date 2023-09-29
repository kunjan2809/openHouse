import { Button, Col, Input, InputNumber, Row, Select } from "antd"
import AuthScreen from "../../common/components/auth/authScreen"
import { Link } from "react-router-dom"
import { signup,otp } from "./constant/string";

const { Option } = Select;

const Signup = () => {

    return (
        <>
            <AuthScreen>
                <div className="fields">
                    <div className="fields-container">
                        {
                            true ? (<>
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
                                                    className="input-field"
                                                    placeholder="First Name"
                                                />
                                            </Col>
                                            <Col span={12}>
                                                <Input
                                                    className="input-field"
                                                    placeholder="Last Name"
                                                />
                                            </Col>
                                        </Row>
                                        <p className="input-label">{signup.fields.company}</p>
                                        <Input
                                            className="input-field"
                                            placeholder="Enter Company’s Name"
                                        />
                                        <p className="input-label">{signup.fields.phone}</p>
                                        <Input
                                            className="input-field-labeled"
                                            placeholder=" "
                                            addonBefore={
                                                <Select
                                                    defaultValue="+1"
                                                    className="select-country-code"
                                                    popupClassName="country-code-selector"
                                                    >
                                                    <Option value="+1">+1</Option>
                                                    <Option value="+91">+91</Option>
                                                </Select>
                                            }
                                        />
                                        <p className="input-label">{signup.fields.email}</p>
                                        <Input
                                            className="input-field"
                                            placeholder="Enter Email"
                                        />
                                        <p className="input-label">{signup.fields.password}</p>
                                        <Input.Password
                                            className="input-field input-field-password"
                                            placeholder="Enter password"
                                            autocomplete="new-password"
                                        />
                                        <p className="input-label">{signup.fields.confirm_pass}</p>
                                        <Input.Password
                                            className="input-field input-field-password"
                                            placeholder="Re-enter password"
                                            autocomplete="new-password"
                                        />
                                        <Button type="primary" className="signin-btn">{signup.btn_text}</Button>
                                    </form>
                                </div>
                                <div className="footer">
                                    <p>{signup.option} <Link to='/login'>{signup.option_link}</Link></p>
                                </div>
                            </>) : (<>
                                <div className="otp-container">
                                    <div className="header">
                                        <span>{otp.welcomeMsg}</span>
                                        <p>{otp.sub_text}</p>
                                    </div>
                                    <div className="otp-verification">
                                        <p className="title">{otp.title}</p>
                                        <p className="timer">01:00</p>

                                        <div className="otp-fields">
                                            <InputNumber
                                                bordered={false}
                                                controls={false}
                                            />
                                            <InputNumber
                                                bordered={false}
                                                controls={false}
                                            />
                                            <InputNumber
                                                bordered={false}
                                                controls={false}
                                            />
                                            <InputNumber
                                                bordered={false}
                                                controls={false}
                                            />
                                            <InputNumber
                                                bordered={false}
                                                controls={false}
                                            />
                                            <InputNumber
                                                bordered={false}
                                                controls={false}
                                            />
                                        </div>

                                        <Button type="primary" className="verify-otp-btn">{otp.btn_text}</Button>
                                        <p className="resend-otp">{otp.resend}</p>
                                    </div>
                                    <div className="footer">
                                        <p>{otp.option} <Link to='/login'>{otp.option_link}</Link></p>
                                    </div>
                                </div>
                            </>)
                        }
                    </div>
                </div>
            </AuthScreen >
        </>
    )
}

export default Signup