import { Col, Row } from 'antd'
import './footer.scss'
import { Link } from 'react-router-dom'
import instagram from "../../assets/svgs/footer-instagram.svg"
import facebook from "../../assets/svgs/footer-facebook.svg"
import { layout } from './constant/string'

const Footer = () => {
    return (
        <div className="page-footer-container">
            <div className="footer-info">
                <Row gutter={100}>
                    <Col span={10} className='header'>
                        <h1>{layout.title}</h1>
                        {/* <Link to='/'><img className='logo' src={logo} alt="" /></Link> */}
                        <span>{layout.sub_title}</span>
                    </Col>
                    <Col span={14}>
                        <Row gutter={20}>
                            <Col span={6}>
                                <div className="quick_links">
                                    <h3>{layout.links_nav.title}</h3>
                                    <ul>
                                        <li><Link exact to='/'>{layout.links_nav.home}</Link></li>
                                        <li><Link exact to='/about'>{layout.links_nav.about}</Link></li>
                                        <li><Link exact to='/blog'>{layout.links_nav.blog}</Link></li>
                                        <li><Link exact to='/contact'>{layout.links_nav.contact}</Link></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col span={6}>
                                <div className="quick_links">
                                    <h3>{layout.links_support.title}</h3>
                                    <ul>
                                        <li><Link exact to='/'>{layout.links_support.privacy}</Link></li>
                                        <li><Link exact to='/'>{layout.links_support.tos}</Link></li>
                                        <li><Link exact to='/'>{layout.links_support.data}</Link></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col span={6}>
                                <div className="quick_links">
                                    <h3>{layout.links_get_in_touch.title}</h3>
                                    <div className="get_in_touch">
                                        <Link exact to='/'><img src={instagram} alt="" /></Link>
                                        <Link exact to='/'><img src={facebook} alt="" /></Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className='bottom-copyright' >
                    <Col>
                        <span>{layout.copy}</span>
                    </Col>
                </Row>
            </div >
        </div >
    )
}

export default Footer