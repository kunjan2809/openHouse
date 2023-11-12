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
                    <Col xm={24} sm={24} md={24} lg={10} xl={10} className='header'>
                        <h1>{layout.title}</h1>
                        {/* <Link to='/'><img className='logo' src={logo} alt="" /></Link> */}
                        <span>{layout.sub_title}</span>
                    </Col>
                    <Col xm={24} sm={24} md={24} lg={14} xl={14}>
                        <Row gutter={20} className='links-menu'>
                            <Col xm={24} sm={24} md={24} lg={6} xl={6}>
                                <div className="quick_links">
                                    <h3>{layout.links_nav.title}</h3>
                                    <ul>
                                        <li><Link to='/'>{layout.links_nav.home}</Link></li>
                                        <li><Link to='/about'>{layout.links_nav.about}</Link></li>
                                        <li><Link to='/blog'>{layout.links_nav.blog}</Link></li>
                                        <li><Link to='/contact'>{layout.links_nav.contact}</Link></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col xm={24} sm={24} md={24} lg={6} xl={6}>
                                <div className="quick_links">
                                    <h3>{layout.links_support.title}</h3>
                                    <ul>
                                        <li><Link to='/'>{layout.links_support.privacy}</Link></li>
                                        <li><Link to='/'>{layout.links_support.tos}</Link></li>
                                        <li><Link to='/'>{layout.links_support.data}</Link></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col xm={24} sm={24} md={24} lg={6} xl={6}>
                                <div className="quick_links">
                                    <h3>{layout.links_get_in_touch.title}</h3>
                                    <div className="get_in_touch">
                                        <Link to='/'><img src={instagram} alt="" /></Link>
                                        <Link to='/'><img src={facebook} alt="" /></Link>
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