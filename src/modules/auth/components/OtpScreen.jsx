import { otp } from '../constant/string'
import { Button, InputNumber, Statistic, message } from 'antd'
import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from "prop-types";
import { resendOtp, verifyOtp } from '../store/actions/auth'

const OtpScreen = ({ phone, successCallback }) => {

    const targets = useRef([])
    const dispatch = useDispatch()
    const { Countdown } = Statistic;

    const [OTP, setOTP] = useState(['', '', '', '', '', ''])
    const [time, setTime] = useState(Date.now())
    const [isResendEnable, setIsResendEnable] = useState(false)
    const [messageApi, contextHolder] = message.useMessage();


    //==> Otp input change handlers <==
    const handleOtpChange = (e, index) => {
        let value = targets.current[index].value

        if (value.length > 0 && index < OTP.length - 1) {
            targets.current[index + 1].focus()
        } else if (value.length === 0 && index !== 0) {
            targets.current[index - 1].focus()
        }

        if (value.length === 1 || value === '') {
            setOTP((old) => {
                old[index] = value
                return [...old]
            })
        }

        if (index === OTP.length - 1) {
            targets.current[index].blur()
        }
    }

    const handleKeyUp = (e, index) => {
        if (e.code === 'Backspace' && e.target.value === '') {
            if (index !== 0) {
                targets.current[index - 1].focus()
            }
        }
    }


    //==> Api call and event handling <==
    const successCallbackResend = () => {
        setOTP(['', '', '', '', '', ''])
        setTime((Date.now() + 1000 * 60))
        setIsResendEnable(false)
        messageApi.open({
            type: 'success',
            content: 'OTP sent successfully',
            duration: 5,
        });
    }

    const errorCallback = (message) => {
        messageApi.open({
            type: 'error',
            content: message,
            duration: 5,
        });
    }

    const handleOtpVerify = () => {
        let payload = {
            phoneNumber: phone,
            otp: OTP.join('')
        }
        dispatch(verifyOtp(payload, successCallbackVerifyOtp, errorCallback))
    }

    const handleResendOtp = () => {
        let payload = {
            phoneNumber: phone,
        }
        dispatch(resendOtp(payload, successCallbackResend))
    }

    const successCallbackVerifyOtp = () => {
        setOTP(['', '', '', '', '', ''])
        successCallback()
    }


    //Running timer on initial render
    useEffect(() => {
        setTime((Date.now() + 1000 * 60))
    }, [])


    return (
        <>
            <div className="otp-container">
                <div className="header">
                    <span>{otp.welcomeMsg}</span>
                    <p>{otp.sub_text}</p>
                </div>
                <div className="otp-verification">
                    <p className="title">{otp.title}</p>

                    <div className="otp-fields">
                        {
                            OTP.map((value, index) => {
                                return (
                                    <InputNumber
                                        type='number'
                                        ref={(inputRef) => (targets.current[index] = inputRef)}
                                        key={index}
                                        value={value}
                                        onChange={(e) => handleOtpChange(e, index)}
                                        onKeyUp={(e) => handleKeyUp(e, index)}
                                        bordered={false}
                                        controls={false}
                                        maxLength={1}
                                    />
                                )
                            })
                        }
                    </div>

                    <Button type="primary" className="verify-otp-btn" onClick={handleOtpVerify}>{otp.btn_text}</Button>

                    {
                        isResendEnable ?
                            <p className="resend-otp" onClick={handleResendOtp}>{otp.resend}</p>
                            :
                            <div className="timer">{otp.resend_in} <Countdown className='otp-countdown' key={isResendEnable} format='mm:ss' value={time} onFinish={() => { setIsResendEnable(true); setTime(Date.now()) }} />
                            </div>
                    }

                </div>
            </div>
            {contextHolder}
        </>
    )
}

OtpScreen.propTypes = {
    phone: PropTypes.string,
    type: PropTypes.string,
    successCallback: PropTypes.func
}

export default OtpScreen