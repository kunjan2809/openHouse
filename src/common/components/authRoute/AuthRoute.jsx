import PropTypes from "prop-types"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const AuthRoute = ({ children }) => {
    const { userToken } = useSelector((state) => state.auth)

    return (
        <>
            {userToken ? (children) : <Navigate to="/login" />}
        </>
    )
}

AuthRoute.propTypes = {
    children: PropTypes.node
}

export default AuthRoute