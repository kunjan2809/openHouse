import { Button, Col, Input, InputNumber, Row, Select } from "antd"
import AuthScreen from "../../common/components/auth/authScreen"
import { Link } from "react-router-dom"

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
                                    <span>Welcome to Open House!</span>
                                    <h1>Sign up</h1>
                                </div>
                                <div className="auth-form">
                                    <form>
                                        <p className="input-label">Name</p>
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
                                        <p className="input-label">Company</p>
                                        <Input
                                            className="input-field"
                                            placeholder="Enter Company’s Name"
                                        />
                                        <p className="input-label">Phone Number</p>
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
                                        <p className="input-label">Email</p>
                                        <Input
                                            className="input-field"
                                            placeholder="Enter Email"
                                        />
                                        <p className="input-label">Password</p>
                                        <Input.Password
                                            className="input-field input-field-password"
                                            placeholder="Enter password"
                                            autocomplete="new-password"
                                        />
                                        <p className="input-label">Confirm Password</p>
                                        <Input.Password
                                            className="input-field input-field-password"
                                            placeholder="Re-enter password"
                                            autocomplete="new-password"
                                        />
                                        <Button type="primary" className="signin-btn">Sign up</Button>
                                    </form>
                                </div>
                                <div className="footer">
                                    <p>Already a User? <Link to='/login'>Sign in</Link></p>
                                </div>
                            </>) : (<>
                                <div className="otp-container">
                                    <div className="header">
                                        <span>Welcome to Open House!</span>
                                        <p>We have sent you one time password to your mobile no.</p>
                                    </div>
                                    <div className="otp-verification">
                                        <p className="title">Please Enter OTP</p>
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

                                        <Button type="primary" className="verify-otp-btn">Verify OTP</Button>
                                        <p className="resend-otp">Resend OTP</p>
                                    </div>
                                    <div className="footer">
                                        <p>Already a User? <Link to='/login'>Sign in</Link></p>
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