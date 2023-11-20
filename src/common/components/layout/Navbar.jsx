
import { Avatar, Button, Col, Row } from 'antd'
import logo from '../../assets/logo.svg'
import './navbar.scss'
import PropTypes from "prop-types";
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { layout } from './constant/string'
import { useDispatch, useSelector } from 'react-redux'
import { UserOutlined, LogoutOutlined, MenuOutlined, CloseOutlined, HomeOutlined, InfoCircleOutlined, PicLeftOutlined, ContactsOutlined, LoginOutlined } from "@ant-design/icons"
import { Menu } from 'antd';
import error_img from '../../../common/assets/images/error.png'
import { useMemo, useState } from 'react'
import { logoutUser } from '../../../modules/auth/store/actions/auth'

const Links = () => (
    <ul className='links'>
        <li><NavLink to='/'>{layout.links_nav.home}</NavLink></li>
        <li><NavLink to='/about'>{layout.links_nav.about}</NavLink></li>
        <li><NavLink to='/blog'>{layout.links_nav.blog}</NavLink></li>
        <li><NavLink to='/contact'>{layout.links_nav.contact}</NavLink></li>
    </ul>
)

const SidebarItem = ({ label, icon, path, ...rest }) => {
    return (
        <li {...rest}>
            <NavLink to={path}>
                {icon}
                <span>{label}</span>
            </NavLink>
        </li>
    )
}

SidebarItem.propTypes = {
    icon: PropTypes.node,
    label: PropTypes.string,
    path: PropTypes.string
}

const Navbar = () => {
    //State management
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { userToken, userDetails } = useSelector((state) => state.auth)
    const profilePicture = userDetails?.profilePicture
    const [navMenu, setNavMenu] = useState(false)

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
                <Col xm={24} sm={24} md={6} lg={10} xl={12} className='navbar-logo'>
                    <div className='open-btn' onClick={() => setNavMenu(true)}>
                        <MenuOutlined />
                    </div>
                    <Link to='/'><img className='logo' src={logo} alt="" /></Link>
                </Col>
                <Col xm={24} sm={24} md={18} lg={14} xl={12} className={`navigation-menu`}>
                    <Row align="middle" justify='end' gutter={2}>
                        <Col span={19}>
                            <Links />
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
            </Row>
            {
                navMenu && <>
                    <div className='sidenav-wrapper'>
                        <div className='sidebar-nav'>
                            <div className='close-icon'>
                                <CloseOutlined className='ico' onClick={() => setNavMenu(false)} />
                            </div>
                            <ul className='links' onClick={() => setNavMenu(false)}>
                                <SidebarItem
                                    path={'/'}
                                    icon={<HomeOutlined />}
                                    label={layout.links_nav.home}
                                />
                                <SidebarItem
                                    path={'/about'}
                                    icon={<InfoCircleOutlined />}
                                    label={layout.links_nav.about}
                                />
                                <SidebarItem
                                    path={'/blog'}
                                    icon={<PicLeftOutlined />}
                                    label={layout.links_nav.blog}
                                />
                                <SidebarItem
                                    path={'/contact'}
                                    icon={<ContactsOutlined />}
                                    label={layout.links_nav.contact}
                                />
                                {
                                    userToken && <>
                                        <SidebarItem
                                            path={'/profile'}
                                            icon={<UserOutlined />}
                                            label={'Profile'}
                                        />
                                    </>
                                }
                                {
                                    userToken && <>
                                        <SidebarItem
                                            path={'/login'}
                                            icon={<LogoutOutlined />}
                                            label={'Logout'}
                                            onClick={() => dispatch(logoutUser())}
                                        />
                                    </>
                                }
                                {
                                    !userToken && <>
                                        <SidebarItem
                                            path={'/login'}
                                            icon={<LoginOutlined />}
                                            label={'Login'}
                                        />
                                    </>
                                }
                            </ul>
                        </div>
                    </div>
                </>
            }
        </div >
    )
}

export default Navbar