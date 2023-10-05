import { otp } from '../constant/string'
import { Button, InputNumber } from 'antd'
import { Link } from 'react-router-dom'

const OtpScreen = () => {
  return (
    <>
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
    </>
  )
}

export default OtpScreen