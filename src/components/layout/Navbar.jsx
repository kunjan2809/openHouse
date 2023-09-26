
import { Avatar, Button, Col, Row } from 'antd'
import logo from '../../assets/logo.svg'
import profile from '../../assets/images/avatar-demo.png'
import './navbar.scss'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <Row justify="space-between" align="middle" className='nabvar-row'>
                <Col span={12}>
                    <Link to='/'><img className='logo' src={logo} alt="" /></Link>
                </Col>
                <Col span={12}>
                    <Row align="middle" gutter={2}>
                        <Col span={20}>
                            <ul className='links'>
                                <li><NavLink exact to='/'>Home</NavLink></li>
                                <li><NavLink exact to='/about'>About</NavLink></li>
                                <li><NavLink exact to='/blog'>Blog</NavLink></li>
                                <li><NavLink exact to='/contact'>Contact Us</NavLink></li>
                            </ul>
                        </Col>
                        <Col span={4}>
                            {true ?
                                <Link to='/profile'>
                                    <Avatar src={<img src={profile} alt="avatar" />} />
                                </Link> :
                            <Link to='/login'>
                                <Button type="primary" className='primary-button'>Sign in</Button>
                            </Link>}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Navbar