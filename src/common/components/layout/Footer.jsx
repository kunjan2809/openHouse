import { Col, Row } from 'antd'
import './footer.scss'
import { Link } from 'react-router-dom'
import instagram from "../../assets/svgs/footer-instagram.svg"
import facebook from "../../assets/svgs/footer-facebook.svg"

const Footer = () => {
    return (
        <div className="page-footer-container">
            <div className="footer-info">
                <Row gutter={100}>
                    <Col span={10}>
                        <h1>Openhouse</h1>
                        <span>Making Real Estate, Real Easy for You.</span>
                    </Col>
                    <Col span={14}>
                        <Row gutter={20}>
                            <Col span={6}>
                                <div className="quick_links">
                                    <h3>Quick Links</h3>
                                    <ul>
                                        <li><Link exact to='/'>Home</Link></li>
                                        <li><Link exact to='/about'>About</Link></li>
                                        <li><Link exact to='/blog'>Blog</Link></li>
                                        <li><Link exact to='/contact'>Contact Us</Link></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col span={6}>
                                <div className="quick_links">
                                    <h3>Support</h3>
                                    <ul>
                                        <li><Link exact to='/'>Privacy Information</Link></li>
                                        <li><Link exact to='/about'>Terms of Service</Link></li>
                                        <li><Link exact to='/blog'>Data Information</Link></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col span={6}>
                                <div className="quick_links">
                                    <h3>Get in Touch</h3>
                                    <div className="get_in_touch">
                                        <Link exact to='/'><img src={instagram} alt="" /></Link>
                                        <Link exact to='/'><img src={facebook} alt="" /></Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div >
        </div >
    )
}

export default Footer