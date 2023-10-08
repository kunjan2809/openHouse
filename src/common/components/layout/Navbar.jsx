
import { Avatar, Button, Col, Row } from 'antd'
import logo from '../../assets/logo.svg'
import profile from '../../assets/images/avatar-demo.png'
import './navbar.scss'
import { Link, NavLink } from 'react-router-dom'
import { layout } from './constant/string'

const Navbar = () => {
    return (
        <div className="navbar">
            <Row justify="space-between" align="middle" className='nabvar-row'>
                <Col span={12}>
                    <Link to='/'><img className='logo' src={logo} alt="" /></Link>
                </Col>
                <Col span={12}>
                    <Row align="middle" gutter={2}>
                        <Col span={18}>
                            <ul className='links'>
                                <li><NavLink exact to='/'>{layout.links_nav.home}</NavLink></li>
                                <li><NavLink exact to='/about'>{layout.links_nav.about}</NavLink></li>
                                <li><NavLink exact to='/blog'>{layout.links_nav.blog}</NavLink></li>
                                <li><NavLink exact to='/contact'>{layout.links_nav.contact}</NavLink></li>
                            </ul>
                        </Col>
                        <Col span={6}>
                            {true ?
                                <Link to='/profile'>
                                    <Avatar src={<img src={profile} alt="avatar" />} />
                                </Link> :
                                <Link to='/login'>
                                    <Button type="primary" className='primary-button'>{layout.btn_text}</Button>
                                </Link>}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Navbar