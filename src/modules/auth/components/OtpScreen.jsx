import { otp } from '../constant/string'
import { Button, InputNumber } from 'antd'
import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from "prop-types";
import { resendOtp, verifyOtp } from '../store/actions/auth'

const OtpScreen = ({ phone, successCallback }) => {

    const targets = useRef([])
    const timerClock = useRef()

    const dispatch = useDispatch()

    const [OTP, setOTP] = useState(['', '', '', '', '', ''])
    const [startTimer, setStartTimer] = useState(true)
    const [isResendEnable, setIsResendEnable] = useState(false)

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

    const successCallbackVerifyOtp = () => {
        setOTP(['', '', '', '', '', ''])
        successCallback()
    }

    const successCallbackResend = () => {
        setOTP(['', '', '', '', '', ''])
        setStartTimer(true)
        setIsResendEnable(false)
    }

    const handleOtpVerify = () => {
        let payload = {
            phoneNumber: phone,
            otp: OTP.join('')
        }
        dispatch(verifyOtp(payload, successCallbackVerifyOtp))
    }

    const handleResendOtp = () => {
        let payload = {
            phoneNumber: phone,
        }
        dispatch(resendOtp(payload, successCallbackResend))
    }

    useEffect(() => {
        if (startTimer) {
            let time = 60  //S
            let interval = setInterval(() => {
                time--
                timerClock.current.innerHTML = `00:${time < 10 ? `0${time}` : time}`
                if (time === 0) {
                    clearInterval(interval)
                    setIsResendEnable(true)
                }
            }, 1000)
            setStartTimer(false)
        }
    }, [startTimer])


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
                            <p className="timer">{otp.resend_in} <span ref={timerClock}>{'00:00'}</span></p>
                    }

                </div>
            </div>
        </>
    )
}

OtpScreen.propTypes = {
    phone: PropTypes.string,
    type: PropTypes.string,
    successCallback: PropTypes.func
}

export default OtpScreen