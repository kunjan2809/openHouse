
import { Avatar, Button, Col, Row } from 'antd'
import logo from '../../assets/logo.svg'
import profile from '../../assets/images/avatar-demo.png'
import './navbar.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <Row justify="space-between" align="middle" className='nabvar-row'>
                <Col span={3}>
                    <Link to='/'><img className='logo' src={logo} alt="" /></Link>
                </Col>
                <Col span={9}>
                    <Row align="middle" gutter={2}>
                        <Col span={18}>
                            <ul className='links'>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/about'>About</Link></li>
                                <li><Link to='/blog'>Blog</Link></li>
                                <li><Link to='/contact'>Contact Us</Link></li>
                            </ul>
                        </Col>
                        <Col span={6}>
                            <Link to='/login'>
                                {true ? <Avatar src={<img src={profile} alt="avatar" />} /> : <Button type="primary" className='primary-button'>Sign in</Button>}
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Navbar