
import { Avatar, Button, Col, Row } from 'antd'
import logo from '../../assets/logo.svg'
import './navbar.scss'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { layout } from './constant/string'
import { useDispatch, useSelector } from 'react-redux'
import { UserOutlined, LogoutOutlined } from "@ant-design/icons"
import { Menu } from 'antd';
import error_img from '../../../common/assets/images/error.png'
import { useMemo } from 'react'
import { logoutUser } from '../../../modules/auth/store/actions/auth'

const Navbar = () => {
    //Store access
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { userToken, userDetails } = useSelector((state) => state.auth)
    const profilePicture = userDetails?.profilePicture

    //Menu options
    const userProfileMEnuItems = useMemo(() => {
        return [{
            label: <>
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
            </>,
            key: 'main',
            children: [{
                label: 'Profile',
                key: 'profile',
                icon: <UserOutlined />,
            },
            {
                label: 'Logout',
                key: 'logout',
                icon: <LogoutOutlined />,
            }]
        }]
    }, [profilePicture])

    const handleMenuSelect = (event) => {
        switch (event.key) {
            case 'profile':
                navigate('/profile')
                break
            case 'logout':
                dispatch(logoutUser())
                navigate('/login')
                break
        }
    }


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
                                <Menu
                                    mode='horizontal'
                                    items={userProfileMEnuItems}
                                    className='user-profile-menu'
                                    onClick={handleMenuSelect}
                                    rootClassName='user-profile-popup'
                                />
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