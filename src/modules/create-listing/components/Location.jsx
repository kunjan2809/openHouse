import { Button, Col, Input, Row, Select } from "antd"
import PropTypes from "prop-types"
import { add_listing } from "../constant/string";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { storeStepData } from "../store/actions/createListing";
import { useEffect } from "react";
import { COUNTRIES, STATES } from "../constant/options";


const Location = ({ handleNext, handlePrev }) => {

    const dispatch = useDispatch()
    const { listingData } = useSelector((state) => state.createListing)


    //==> Yup-formik validation <==
    const formSchema = Yup.object().shape({
        country: Yup.string().trim().required('Please select country'),
        state: Yup.string().trim().required('Please select state'),
        address: Yup.string().trim().required('Please enter address'),
        city: Yup.string().trim().required('Please enter city name'),
        zip: Yup.string().trim().required('Please enter zip code'),
    })

    const initialValues = {
        country: 'canada',
        state: null,
        address: '',
        city: '',
        zip: ''
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: formSchema,
        onSubmit: (values) => {
            let data = {
                country: values.country,
                state: values.state,
                address: values.address,
                city: values.city,
                zip: values.zip
            }
            dispatch(storeStepData('S1', data))
            handleNext()
        }
    })
    const { values, handleChange, handleBlur, touched, errors, submitForm, setFieldValue, setValues } = formik

    //Set field values on load
    useEffect(() => {
        if (listingData?.S1) {
            setValues(listingData?.S1)
        }
    }, [listingData])


    return (
        <div className="location-form">
            <h1 className='title'>{add_listing.steps.step3.title}</h1 >

            <Row>
                <Col span={18}>
                    <Row gutter={20}>
                        <Col span={12}>
                            <label>{add_listing.steps.step2.fields.country}</label>
                            <Select
                                popupClassName="step-select-opt"
                                placeholder='Select country'
                                options={COUNTRIES}
                                onChange={(value) => setFieldValue('country', value)}
                                onBlur={handleBlur}
                                value={values.country}
                            />
                            {touched.country && errors.country && <span className='error'>{errors.country}</span>}
                        </Col>
                        <Col span={12}>
                            <label>{add_listing.steps.step2.fields.state}</label>
                            <Select
                                popupClassName="step-select-opt"
                                placeholder='Select state'
                                options={STATES}
                                onChange={(value) => setFieldValue('state', value)}
                                onBlur={handleBlur}
                                value={values.state}
                            />
                            {touched.state && errors.state && <span className='error'>{errors.state}</span>}
                        </Col>
                        <Col span={24}>
                            <label>{add_listing.steps.step2.fields.address}</label>
                            <Input
                                name="address"
                                placeholder="Address"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.address}
                            />
                            {touched.address && errors.address && <span className='error'>{errors.address}</span>}
                        </Col>
                        <Col span={12}>
                            <label>{add_listing.steps.step2.fields.city}</label>
                            <Input
                                name="city"
                                placeholder="City name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.city}
                            />
                            {touched.city && errors.city && <span className='error'>{errors.city}</span>}
                        </Col>
                        <Col span={12}>
                            <label>{add_listing.steps.step2.fields.zip}</label>
                            <Input
                                name="zip"
                                placeholder="zip code"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.zip}
                            />
                            {touched.zip && errors.zip && <span className='error'>{errors.zip}</span>}
                        </Col>
                    </Row>
                </Col>
                <Col span={6}>

                </Col>
            </Row>

            <div className='page-ctrl'>
                <Button type="primary" className="btn" onClick={() => handlePrev()}>{add_listing.prev_btn}</Button>
                <Button type="primary" className="btn" onClick={() => submitForm()}>{add_listing.next_btn}</Button>
            </div>
        </div>
    )
}


Location.propTypes = {
    handleNext: PropTypes.func,
    handlePrev: PropTypes.func
}

export default Location