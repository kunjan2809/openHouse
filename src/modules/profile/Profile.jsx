import { Avatar, Button, Col, Result, Row, Spin } from "antd"
// import cardImg from '../../common/assets/images/property.png'
import error_img from '../../common/assets/images/error.png'
import phone_svg from "../../common/assets/svgs/phone.svg"
import mail_svg from "../../common/assets/svgs/email.svg"
import instagram from "../../common/assets/svgs/instagram.svg"
import facebook from "../../common/assets/svgs/facebook.svg"
import twitter from "../../common/assets/svgs/twitter.svg"
import edit_icon from "./assets/svgs/edit-icon.svg"
import './assets/scss/profile.scss'
import PropertyCard from "../../common/components/card/PropertyCard"
import { useNavigate } from "react-router-dom"
import { profile } from "./constant/string"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getProfile } from "./store/actions/profile"
import { UserOutlined } from "@ant-design/icons"
import { getOwnProperties } from "./store/actions/properties"
import moment from "moment"
import { useScrollToTop } from "../../common/hooks/general"

const Profile = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    useScrollToTop()


    const { profileDetails } = useSelector((state) => state.profile)
    const profileImg = profileDetails?.profilePicture

    const { own_properties, loading: propertyLoading } = useSelector((state) => state.ownProperties)

    useEffect(() => {
        dispatch(getProfile())
        dispatch(getOwnProperties())
    }, [])


    return (
        <>
            <div className="profile-container">
                <Row gutter={[30, 30]}>
                    <Col xm={24} sm={24} md={24} lg={6} xl={6}>
                        <div className="user-profile-wrapper">
                            <div className="user-details-wrapper">
                                {profileImg ?
                                    <img
                                        src={`${import.meta.env.VITE_API_URL}${profileImg}`}
                                        alt=""
                                        className="user-profile"
                                        onError={({ currentTarget }) => {
                                            currentTarget.onerror = null;
                                            currentTarget.src = error_img;
                                        }}
                                    /> :
                                    <Avatar
                                        icon={<UserOutlined />}
                                        size={150}
                                        className="user-profile" />}
                                <div className="profile-description">
                                    <h4>{`${profileDetails?.firstName} ${profileDetails?.lastName}`}</h4>
                                    <span>{(!profileDetails?.description || profileDetails?.description === 'undefined') ? '' : profileDetails?.description}</span>
                                </div>
                                <div className="contact-info-wrapper">
                                    <h5>{profile.profile.contact}</h5>
                                    <div className="contact-info">
                                        <span><img src={phone_svg} alt="" /> {`${profileDetails?.phoneNumber?.substring(0, 2)} ${profileDetails?.phoneNumber?.substring(2)}`}</span>
                                        <span><img src={mail_svg} alt="" /> {profileDetails?.email}</span>
                                    </div>
                                </div>
                                <div className="follow-icons">
                                    <h5>{profile.profile.follow}</h5>
                                    <div className="icons">
                                        <a href={profileDetails?.socialLinks?.instagram} target="_blank" rel="noreferrer"><img src={instagram} alt="" /></a>
                                        <a href={profileDetails?.socialLinks?.facebook} target="_blank" rel="noreferrer"><img src={facebook} alt="" /></a>
                                        <a href={profileDetails?.socialLinks?.twitter} target="_blank" rel="noreferrer"><img src={twitter} alt="" /></a>
                                    </div>
                                </div>
                                <Button className="edit-profile" onClick={() => navigate('/profile/edit')}><span><img src={edit_icon} alt="" /> {profile.profile.btn_text}</span></Button>
                            </div>
                        </div>
                    </Col>
                    <Col xm={24} sm={24} md={24} lg={18} xl={18}>
                        <div className="my-listing">
                            <div className="heading">
                                <h1 className="title">{profile.listings.title}</h1>
                                <Button type="primary" className='add-listing-btn' onClick={() => navigate('/create-listing')}>
                                    {profile.listings.add_btn}
                                </Button>
                            </div>
                            <Row gutter={[16, 24]}>
                                {
                                    !propertyLoading ? (<>
                                        {
                                            own_properties.length > 0 ? (<>
                                                {own_properties?.map((property) => {
                                                    return <Col xm={24} sm={24} md={12} lg={8} xl={8} key={property._id}>
                                                        <PropertyCard
                                                            id={property._id}
                                                            image={`${import.meta.env.VITE_API_URL}${property.images[0]}`}
                                                            price={property.price}
                                                            date={moment(property.date).format("Do MMM, YYYY")}
                                                            time={moment(property.startTime).format('h.mmA')}
                                                            address={`${property.location?.address}, ${property.location?.city}, ${property.location?.country}`}
                                                            isSold={property.isSold}
                                                        />
                                                    </Col>
                                                })}
                                            </>) : (<>
                                                <div className="no-properties-found">
                                                    <Result
                                                        status="404"
                                                        title="No properties found"
                                                    />
                                                </div>

                                            </>)
                                        }
                                    </>) : (<>
                                        <div className='spinner'><Spin size="large" /></div>
                                    </>)
                                }
                            </Row>
                            {/* <div className="view">
                                {own_properties.length > 6 && <Button className="view-btn">{profile.listings.view}</Button>}
                            </div> */}
                        </div>

                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Profile