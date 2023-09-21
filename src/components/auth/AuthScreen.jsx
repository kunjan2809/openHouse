import PropTypes from "prop-types";
import Navbar from "../layout/Navbar";
import { Col, Row } from "antd";
import HOMEIMG from '../../assets/images/home-auth-full.png'
import './authScreen.scss'

const AuthScreen = (props) => {
    const children = props.children

    return (
        <>
            <Navbar />
            <div className="auth-container">
                <Row className="container">
                    <Col span={12}>
                        <div className="home-img">
                            <img src={HOMEIMG} alt="Home"/>
                        </div>
                    </Col>
                    <Col span={12}>
                        {children}
                    </Col>
                </Row>
            </div>
        </>
    )
}
AuthScreen.propTypes = {
    children: PropTypes.node
}

export default AuthScreen