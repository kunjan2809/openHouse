
import { Avatar, Button, Col, Row } from 'antd'
import logo from '../../assets/logo.svg'
import './navbar.scss'
import { Link, NavLink } from 'react-router-dom'
import { layout } from './constant/string'
import { useSelector } from 'react-redux'
import { UserOutlined } from "@ant-design/icons"
import error_img from '../../../common/assets/images/error.png'


const Navbar = () => {
    //Store access
    const { userToken, userDetails } = useSelector((state) => state.auth)
    const profilePicture = userDetails?.profilePicture

    return (
        <div className="navbar">
            <Row justify="space-between" align="middle" className='navbar-row'>
                <Col span={12}>
                    <Link to='/'><img className='logo' src={logo} alt="" /></Link>
                </Col>
                <Col span={12}>
                    <Row align="middle" justify='end' gutter={2}>
                        <Col span={19}>
                            <ul className='links'>
                                <li><NavLink to='/'>{layout.links_nav.home}</NavLink></li>
                                <li><NavLink to='/about'>{layout.links_nav.about}</NavLink></li>
                                <li><NavLink to='/blog'>{layout.links_nav.blog}</NavLink></li>
                                <li><NavLink to='/contact'>{layout.links_nav.contact}</NavLink></li>
                            </ul>
                        </Col>
                        {
                            userToken ? <Col span={3}>
                                <Link to='/profile' className='nav-profile-avatar'>
                                    {profilePicture ? <Avatar
                                        size='large'
                                        src={<img
                                            src={`${import.meta.env.VITE_API_URL}${profilePicture}`}
                                            alt="avatar"
                                            onError={({ currentTarget }) => {
                                                currentTarget.onerror = null;
                                                currentTarget.src = error_img;
                                            }}
                                        />}
                                    >
                                    </Avatar> :
                                        <Avatar icon={<UserOutlined />} />}
                                </Link>
                            </Col> : <Col span={5}>
                                <Link to='/login'>
                                    <Button type="primary" className='primary-button'>{layout.btn_text}</Button>
                                </Link>
                            </Col>
                        }
                    </Row>
                </Col>
            </Row >
        </div >
    )
}

export default Navbar