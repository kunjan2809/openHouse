import { Button, Col, Image, Input, Row, Select } from "antd"
import './assets/scss/editProfile.scss'
import { edit_profile } from './constant/string.js'
import { useEffect, useState } from "react";
import instagram from "../../common/assets/svgs/instagram.svg"
import facebook from "../../common/assets/svgs/facebook.svg"
import twitter from "../../common/assets/svgs/twitter.svg"
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import { updateProfile } from "./store/actions/profile";

const { TextArea } = Input;
const { Option } = Select;

const EditProfile = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [file, setFile] = useState()
    const { profile_details } = useSelector((state) => state.profile)


    //Getting uploaded file
    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            setFile(file);
        }
    }


    //==> Success and error callbacks <==
    const successCallback = () => {
        navigate('/profile')
    }


    //==> Yup-formik validation <==
    const formSchema = Yup.object().shape({
        first_name: Yup.string().trim().required('First name required'),
        last_name: Yup.string().trim().required('Last name required'),
        country_code: Yup.string().trim().required('Country code required'),
        phone: Yup.string().matches(/^[0-9]+$/, 'Phone number must contain only numbers').min(4, 'Phone number must be at least 4 characters').max(13, 'Phone number must be at most 13 characters').required('Phone number is required'),
        email: Yup.string().trim().email("Invalid email").required('Email required'),
    })

    const initialValues = {
        first_name: '',
        last_name: '',
        profile: null,
        description: '',
        country_code: '',
        phone: '',
        email: '',
        instagram: '',
        facebook: '',
        twitter: '',
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: formSchema,
        onSubmit: (values) => {
            let payload = {
                firstName: values.first_name,
                lastName: values.last_name,
                profilePicture: file,
                description: values.description,
                phoneNumber: values.country_code + values.phone,
                email: values.email,
                instagram: values.instagram,
                facebook: values.facebook,
                twitter: values.twitter
            }
            dispatch(updateProfile(payload, successCallback))
        }
    })

    const { values, handleChange, handleBlur, touched, errors, submitForm, setFieldValue, setValues } = formik

    useEffect(() => {
        if (profile_details) {
            setValues({
                first_name: profile_details?.firstName,
                last_name: profile_details?.lastName,
                profile: `${import.meta.env.VITE_API_URL}${profile_details?.profilePicture}`,
                description: (!profile_details?.description || profile_details?.description=== 'undefined') ? '' : profile_details?.description,
                country_code: '+1',
                phone: profile_details?.phoneNumber?.substring(2),
                email: profile_details?.email,
                instagram: (!profile_details?.socialLinks?.instagram || profile_details?.socialLinks?.instagram === 'undefined') ? '' : profile_details?.socialLinks?.instagram,
                facebook: (!profile_details?.socialLinks?.facebook || profile_details?.socialLinks?.facebook === 'undefined') ? '' : profile_details?.socialLinks?.facebook,
                twitter: (!profile_details?.socialLinks?.twitter || profile_details?.socialLinks?.twitter === 'undefined') ? '' : profile_details?.socialLinks?.twitter
            })
        }
    }, [profile_details])


    console.log('profile', values.profile)

    return (
        <>
            <div className="edit-profile-container">
                <h1 className="title">{edit_profile.title}</h1>
                <form>
                    <Row className="fields-wrapper" >
                        <Col span={15} className="edit-profile-header">
                            <h1 className="about-title">{edit_profile.about.title}</h1>
                            <h4>{edit_profile.about.sub_title}</h4>
                        </Col>

                        <Col span={15}>
                            <Row gutter={20}>
                                <Col span={12}>
                                    <label className="input-label">{edit_profile.about.fields.first_name}</label>
                                    <Input
                                        name="first_name"
                                        className="input-field"
                                        placeholder="First name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.first_name}
                                    />
                                    {touched.first_name && errors.first_name && <span className='error'>{errors.first_name}</span>}
                                </Col>

                                <Col span={12}>
                                    <label className="input-label">{edit_profile.about.fields.last_name}</label>
                                    <Input
                                        name="last_name"
                                        className="input-field"
                                        placeholder="Last name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.last_name}
                                    />
                                    {touched.last_name && errors.last_name && <span className='error'>{errors.last_name}</span>}
                                </Col>
                            </Row>
                        </Col>

                        <Col span={15}>

                            {file && <Image className="profile-img" src={URL.createObjectURL(file)} />}

                            <label htmlFor="imageInput" className="input-label">
                                <div className="custom-button">{edit_profile.about.fields.pic}</div>
                            </label>
                            <Input
                                name="profile"
                                type="file"
                                accept="image/*"
                                id="imageInput"
                                onChange={handleFileChange}
                                className="input-img"
                            />
                        </Col>

                        <Col span={15}>
                            <label className="input-label">{edit_profile.about.fields.description}</label>
                            <TextArea
                                name="description"
                                rows={4}
                                placeholder="Enter description"
                                maxLength={200}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.description}
                            />
                            {touched.description && errors.description && <span className='error'>{errors.description}</span>}
                        </Col>

                        <Col span={15}>
                            <label className="input-label">{edit_profile.about.fields.phone}</label>
                            <Input
                                disabled
                                name="phone"
                                className="input-field-labeled"
                                placeholder="Phone number"
                                addonBefore={
                                    <Select
                                        defaultValue="+1"
                                        className="select-country-code"
                                        popupClassName="country-code-selector"
                                        onChange={(value) => setFieldValue('country_code', value)}
                                        onBlur={handleBlur}
                                        value={values.country_code}
                                    >
                                        <Option value="+1">+1</Option>
                                    </Select>
                                }
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.phone}
                            />
                            {touched.country_code && errors.country_code && <span className='error'>{errors.country_code}</span>}
                            <br />
                            {touched.phone && errors.phone && <span className='error'>{errors.phone}</span>}
                        </Col>

                        <Col span={15}>
                            <label className="input-label">{edit_profile.about.fields.email}</label>
                            <Input
                                disabled
                                name="email"
                                className="input-field"
                                placeholder="Enter email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {touched.email && errors.email && <span className='error'>{errors.email}</span>}
                        </Col>

                        <Col span={15}>
                            <h1 className="links-title">{edit_profile.links.title}</h1>
                            <h4>{edit_profile.links.sub_title}</h4>
                        </Col>

                        <Col span={15}>
                            <label className="input-label"><img src={instagram} alt="" className="custom-svg" /> {edit_profile.links.fields.instagram}</label>
                            <Input
                                name="instagram"
                                className="input-field"
                                placeholder="Instagram link"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.instagram}
                            />
                            {touched.instagram && errors.instagram && <span className='error'>{errors.instagram}</span>}
                        </Col>

                        <Col span={15}>
                            <label className="input-label"><img src={facebook} alt="" className="custom-svg" /> {edit_profile.links.fields.facebook}</label>
                            <Input
                                name="facebook"
                                className="input-field"
                                placeholder="Facebook link"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.facebook}
                            />
                            {touched.facebook && errors.facebook && <span className='error'>{errors.facebook}</span>}
                        </Col>

                        <Col span={15}>
                            <label className="input-label"><img src={twitter} alt="" className="custom-svg" /> {edit_profile.links.fields.twitter}</label>
                            <Input
                                name="twitter"
                                className="input-field"
                                placeholder="Twitter link"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.twitter}
                            />
                            {touched.twitter && errors.twitter && <span className='error'>{errors.twitter}</span>}
                        </Col>

                        <Col span={24}>
                            <Button type="primary" className="save-btn" onClick={() => submitForm()}>{edit_profile.btn_text}</Button>
                        </Col>
                    </Row>
                </form>
            </div>
        </>
    )
}

export default EditProfile