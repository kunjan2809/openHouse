const signup = {
    welcomeMsg: "Welcome to Open House!",
    title: "Sign up",
    fields: {
        name: "Name",
        company: "Company",
        phone: "Phone Number",
        email: "Email",
        password: "Password",
        confirm_pass: "Confirm Password"
    },
    btn_text: "Sign up",
    option: "Already a User?",
    option_link:"Sign In"
}

const otp = {
    welcomeMsg: "Welcome to Open House!",
    sub_text: "We have sent you one time password to your mobile no.",
    title: "Please Enter OTP",
    btn_text: "Verify OTP",
    resend: "Resend OTP",
    option: "Already a User?",
    option_link:"Sign In"
}

const login = {
    welcomeMsg: "Welcome to Open House!",
    title: "Sign in to your account",
    fields: {
        email: "Email",
        password: "Password",
    },
    btn_text: "Sign in",
    forgot_pass: "Forgot Password?",
    option: "New to Open House?",
    option_link:"Sign up"
}

const forgot_password = {
    welcomeMsg: "Forgot Your Password?",
    title: "Don’t worry, We’ve got your back!",
    fields: {
        email: "Email"
    },
    btn_text: "Submit",
    forgot_pass: "Forgot Password?",
    option: "New to Open House?",
    option_link:"Sign up",
    mail_sent: "We've sent you an email with instructions to reset your password."
}

const reset_password = {
    welcomeMsg: "Welcome back!",
    title: "Reset your password",
    fields: {
        new_pass: "New Password",
        confirm_pass: "Confirm Password"
    },
    btn_text: "Submit",
    forgot_pass: "Forgot Password?",
    option: "New to Open House?",
    option_link:"Sign up",
    reset: "Your password has been updated successfully."
}

export { signup, otp, login, forgot_password, reset_password }