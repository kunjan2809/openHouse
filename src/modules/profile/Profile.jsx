import { Button, Col, Row } from "antd"
import cardImg from '../../common/assets/images/property.png'
import profile_img from './assets/images/profile-img.png'
import phone_svg from "./assets/svgs/phone.svg"
import mail_svg from "./assets/svgs/email.svg"
import instagram from "./assets/svgs/instagram.svg"
import facebook from "./assets/svgs/facebook.svg"
import twitter from "./assets/svgs/twitter.svg"
import edit_icon from "./assets/svgs/edit-icon.svg"
import './assets/scss/profile.scss'
import PropertyCard from "../../common/components/card/PropertyCard"
import { useNavigate } from "react-router-dom"

const Profile = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="profile-container">
                <Row gutter={30}>
                    <Col span={6}>
                        <div className="user-profile-wrapper">
                            <div className="user-details-wrapper">
                                <img src={profile_img} alt="" className="user-profile" />
                                <div className="profile-description">
                                    <h4>Prashant Vats</h4>
                                    <span>With over a decade of experience and a passion for client satisfaction, John Smith is your go-to real estate professional.</span>
                                </div>
                                <div className="contact-info-wrapper">
                                    <h5>Get in Touch:</h5>
                                    <div className="contact-info">
                                        <span><img src={phone_svg} alt="" /> +91 986476483</span>
                                        <span><img src={mail_svg} alt="" /> prashant30@gmail.com</span>
                                    </div>
                                </div>
                                <div className="follow-icons">
                                    <h5>Follow me on:</h5>
                                    <div className="icons">
                                        <img src={instagram} alt="" />
                                        <img src={facebook} alt="" />
                                        <img src={twitter} alt="" />
                                    </div>
                                </div>
                                <Button className="edit-profile"><span><img src={edit_icon} alt="" /> Edit Profile</span></Button>
                            </div>
                        </div>
                    </Col>
                    <Col span={18}>
                        <div className="my-listing">
                            <div className="heading">
                                <h1 className="title">My Properties</h1>
                                <Button type="primary" className='add-listing-btn' onClick={() => navigate('/create-listing')}>
                                    + Add Property
                                </Button>
                            </div>
                            <Row gutter={[16, 24]}>
                                <Col span={8}>
                                    <PropertyCard
                                        image={cardImg}
                                        price='3,75,000'
                                        date='15th Feb’2023'
                                        time='10:30 p.m.'
                                        address='603, Borinson street, Texas, USA'
                                        isSold={false}
                                    />
                                </Col>
                                <Col span={8}>
                                    <PropertyCard
                                        image={cardImg}
                                        price='3,75,000'
                                        date='15th Feb’2023'
                                        time='10:30 p.m.'
                                        address='603, Borinson street, Texas, USA'
                                        isSold={true}
                                    />
                                </Col>
                                <Col span={8}>
                                    <PropertyCard
                                        image={cardImg}
                                        price='3,75,000'
                                        date='15th Feb’2023'
                                        time='10:30 p.m.'
                                        address='603, Borinson street, Texas, USA'
                                        isSold={false}
                                    />
                                </Col>
                                <Col span={8}>
                                    <PropertyCard
                                        image={cardImg}
                                        price='3,75,000'
                                        date='15th Feb’2023'
                                        time='10:30 p.m.'
                                        address='603, Borinson street, Texas, USA'
                                        isSold={true}
                                    />
                                </Col>
                                <Col span={8}>
                                    <PropertyCard
                                        image={cardImg}
                                        price='3,75,000'
                                        date='15th Feb’2023'
                                        time='10:30 p.m.'
                                        address='603, Borinson street, Texas, USA'
                                        isSold={true}
                                    />
                                </Col>
                            </Row>
                            <div className="view">
                                <Button className="view-btn">View all</Button>
                            </div>
                        </div>

                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Profile