import { Button, Col, Image, Input, Row } from "antd"
import './assets/scss/editProfile.scss'
import { edit_profile } from './constant/string.js'
import { useState } from "react";
import instagram from "../../common/assets/svgs/instagram.svg"
import facebook from "../../common/assets/svgs/facebook.svg"
import twitter from "../../common/assets/svgs/twitter.svg"


const { TextArea } = Input;


const EditProfile = () => {

    const [file, setFile] = useState();

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            setFile(file);
        }
    };

    return (
        <>
            <div className="edit-profile-container">
                <h1 className="title">{edit_profile.title}</h1>
                <Row className="fields-wrapper" >
                    <Col span={15} className="edit-profile-header">
                        <h1 className="about-title">{edit_profile.about.title}</h1>
                        <h4>{edit_profile.about.sub_title}</h4>
                    </Col>

                    <Col span={15}>
                        <label className="input-label">{edit_profile.about.fields.name}</label>
                        <Input
                            className="input-field"
                            placeholder="Enter Name"
                        />
                    </Col>

                    <Col span={15}>

                        {file && <Image className="profile-img" src={URL.createObjectURL(file)} />}

                        <label htmlFor="imageInput" className="input-label">
                            <div className="custom-button">{edit_profile.about.fields.pic}</div>
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            id="imageInput"
                            onChange={handleFileChange}
                            className="input-img"
                        />
                    </Col>

                    <Col span={15}>
                        <label className="input-label">{edit_profile.about.fields.description}</label>
                        <TextArea rows={4} placeholder="Enter Description" maxLength={5} />
                    </Col>

                    <Col span={15}>
                        <h1 className="links-title">{edit_profile.links.title}</h1>
                        <h4>{edit_profile.links.sub_title}</h4>
                    </Col>

                    <Col span={15}>
                        <label className="input-label"><img src={instagram} alt="" className="custom-svg" /> {edit_profile.links.fields.instagram}</label>
                        <Input
                            className="input-field"
                            placeholder="linkedin link"
                        />
                    </Col>

                    <Col span={15}>
                        <label className="input-label"><img src={facebook} alt="" className="custom-svg" /> {edit_profile.links.fields.facebook}</label>
                        <Input
                            className="input-field"
                            placeholder="Facebook link"
                        />
                    </Col>

                    <Col span={15}>
                        <label className="input-label"><img src={twitter} alt="" className="custom-svg" /> {edit_profile.links.fields.twitter}</label>
                        <Input
                            className="input-field"
                            placeholder="Twitter link"
                        />
                    </Col>

                    <Col span={24}>
                        <Button type="primary" className="save-btn">{edit_profile.btn_text}</Button>
                    </Col>

                </Row>

            </div>

        </>
    )
}

export default EditProfile