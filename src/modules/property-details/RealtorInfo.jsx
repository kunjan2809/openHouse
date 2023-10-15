import PropTypes from "prop-types";
import { realtor_details } from './constant/string'

import phone_svg from "../../common/assets/svgs/phone.svg"
import mail_svg from "../../common/assets/svgs/email.svg"
import instagram from "../../common/assets/svgs/instagram.svg"
import facebook from "../../common/assets/svgs/facebook.svg"
import twitter from "../../common/assets/svgs/twitter.svg"
import profile_img from '../profile/assets/images/profile-img.png'
import { Modal } from 'antd'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRealtorInfo } from "./store/actions/propertyDetails";

const RealtorInfo = ({ id, isModalOpen, handleCancel }) => {
    console.log('id', id)

    const dispatch = useDispatch()
    const { realtorInfo } = useSelector((state) => state.propertyDetails)

    useEffect(() => {
        dispatch(getRealtorInfo(id))
    }, [id])

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
                                <h4>{`${realtorInfo?.firstName} ${realtorInfo?.lastName}`}</h4>
                                <span>{realtorInfo?.description}</span>
                            </div>
                        </div>
                        <div className="contact-info-wrapper">
                            <h5>{realtor_details.contact}</h5>
                            <div className="contact-info">
                                <span><img src={phone_svg} alt="" /> {`${realtorInfo?.phoneNumber?.substring(0, 2)} ${realtorInfo?.phoneNumber?.substring(2)}`}</span>
                                <span><img src={mail_svg} alt="" /> {realtorInfo?.email}</span>
                            </div>
                        </div>
                        <div className="follow-icons">
                            <h5>{realtor_details.media}</h5>
                            <div className="icons">
                                <a href={realtorInfo?.socialLinks?.instagram} target="_blank" rel="noreferrer"><img src={instagram} alt="" /></a>
                                <a href={realtorInfo?.socialLinks?.instagram} target="_blank" rel="noreferrer"><img src={facebook} alt="" /></a>
                                <a href={realtorInfo?.socialLinks?.instagram} target="_blank" rel="noreferrer"><img src={twitter} alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

RealtorInfo.propTypes = {
    id: PropTypes.number,
    isModalOpen: PropTypes.bool,
    handleCancel: PropTypes.func
}

export default RealtorInfo