import PropTypes from "prop-types";
import { realtor_details } from './constant/string'

import phone_svg from "../../common/assets/svgs/phone.svg"
import mail_svg from "../../common/assets/svgs/email.svg"
import instagram from "../../common/assets/svgs/instagram.svg"
import facebook from "../../common/assets/svgs/facebook.svg"
import twitter from "../../common/assets/svgs/twitter.svg"
import profile_img from '../profile/assets/images/profile-img.png'
import { Modal } from 'antd'

const RealtorDetails = ({ isModalOpen, handleCancel }) => {
    return (
        <>
            <Modal
                title={realtor_details.title}
                open={isModalOpen}
                onCancel={handleCancel}
                className='contact-seller-modal'
                footer={null}
            >
                <div className="user-profile-wrapper">
                    <div className="user-details-wrapper">
                        <div className='user-details'>
                            <img src={profile_img} alt="" className="user-profile" />
                            <div className="profile-description">
                                <h4>Prashant Vats</h4>
                                <span>With over a decade of experience and a passion for client satisfaction, John Smith is your go-to real estate professional.</span>
                            </div>
                        </div>
                        <div className="contact-info-wrapper">
                            <h5>{realtor_details.contact}</h5>
                            <div className="contact-info">
                                <span><img src={phone_svg} alt="" /> +91 986476483</span>
                                <span><img src={mail_svg} alt="" /> prashant30@gmail.com</span>
                            </div>
                        </div>
                        <div className="follow-icons">
                            <h5>{realtor_details.media}</h5>
                            <div className="icons">
                                <img src={instagram} alt="" />
                                <img src={facebook} alt="" />
                                <img src={twitter} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

RealtorDetails.propTypes = {
    isModalOpen: PropTypes.bool,
    handleCancel: PropTypes.func
}

export default RealtorDetails