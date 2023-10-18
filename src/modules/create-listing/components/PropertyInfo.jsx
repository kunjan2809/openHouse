import { Button, Col, Input, Radio, Row, Select } from "antd"
import PropTypes from "prop-types"
import { add_listing } from "../constant/string";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { storeStepData } from "../store/actions/createListing";
import { useEffect } from "react";
import { BATHROOMS, BEDROOMS, FLOORS, PARKING, PROPERTYTYPE } from '../constant/options'

const { TextArea } = Input;

const PropertyInfo = ({ handleNext }) => {

    const dispatch = useDispatch()
    const { listingData } = useSelector((state) => state.createListing)

    //==> Yup-formik validation <==
    const formSchema = Yup.object().shape({
        type: Yup.string().trim().required('Please select property type'),
        bedroom: Yup.string().trim().required('Please select bedrooms'),
        bathroom: Yup.string().trim().required('Please select bathrooms'),
        floor: Yup.string().trim().required('Please select floors'),
        parking: Yup.string().trim().required('Please select parking'),
        basement: Yup.string().trim().required('Please choose basement'),
        area: Yup.string().trim().required('Please enter area'),
        description: Yup.string().trim().required('Please enter description'),
    })

    const initialValues = {
        type: null,
        bedroom: null,
        bathroom: null,
        floor: null,
        parking: null,
        basement: null,
        area: '',
        description: ''
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: formSchema,
        onSubmit: (values) => {
            let data = {
                type: values.type,
                bedroom: values.bedroom,
                bathroom: values.bathroom,
                floor: values.floor,
                parking: values.parking,
                basement: values.basement,
                area: values.area,
                description: values.description
            }
            dispatch(storeStepData('S0', data))
            handleNext()
        }
    })
    const { values, handleChange, handleBlur, touched, errors, submitForm, setFieldValue, setValues } = formik

    //Set field values on load
    useEffect(() => {
        if (listingData?.S0) {
            setValues(listingData?.S0)
        }
    }, [listingData])


    return (
        <div className="property-details-form">
            <h1 className='title'>{add_listing.steps.step1.title}</h1 >
            <Row>
                <Col span={18}>
                    <Row gutter={20}>
                        <Col span={24}>
                            <label>{add_listing.steps.step1.fields.type}</label>
                            <Select
                                popupClassName="step-select-opt"
                                placeholder='Select property type'
                                options={PROPERTYTYPE}
                                onChange={(value) => setFieldValue('type', value)}
                                onBlur={handleBlur}
                                value={values.type}
                            />
                            {touched.type && errors.type && <span className='error'>{errors.type}</span>}
                        </Col>
                        <Col span={12}>
                            <label>{add_listing.steps.step1.fields.bedroom}</label>
                            <Select
                                popupClassName="step-select-opt"
                                placeholder='Select bedrooms'
                                options={BEDROOMS}
                                onChange={(value) => setFieldValue('bedroom', value)}
                                onBlur={handleBlur}
                                value={values.bedroom}
                            />
                            {touched.bedroom && errors.bedroom && <span className='error'>{errors.bedroom}</span>}
                        </Col>
                        <Col span={12}>
                            <label>{add_listing.steps.step1.fields.bathroom}</label>
                            <Select
                                popupClassName="step-select-opt"
                                placeholder='Select bathrooms'
                                options={BATHROOMS}
                                onChange={(value) => setFieldValue('bathroom', value)}
                                onBlur={handleBlur}
                                value={values.bathroom}
                            />
                            {touched.bathroom && errors.bathroom && <span className='error'>{errors.bathroom}</span>}
                        </Col>
                        <Col span={12}>
                            <label>{add_listing.steps.step1.fields.floor}</label>
                            <Select
                                popupClassName="step-select-opt"
                                placeholder='Select floors'
                                options={FLOORS}
                                onChange={(value) => setFieldValue('floor', value)}
                                onBlur={handleBlur}
                                value={values.floor}
                            />
                            {touched.floor && errors.floor && <span className='error'>{errors.floor}</span>}
                        </Col>
                        <Col span={12}>
                            <label>{add_listing.steps.step1.fields.parking}</label>
                            <Select
                                popupClassName="step-select-opt"
                                placeholder='Select car parking'
                                options={PARKING}
                                onChange={(value) => setFieldValue('parking', value)}
                                onBlur={handleBlur}
                                value={values.parking}
                            />
                            {touched.parking && errors.parking && <span className='error'>{errors.parking}</span>}
                        </Col>
                        <Col span={24}>
                            <label>{add_listing.steps.step1.fields.basement}</label>
                            <Radio.Group
                                name="basement"
                                className="radio"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.basement}
                            >
                                <Radio value={true}>Yes</Radio>
                                <Radio value={false}>No</Radio>
                            </Radio.Group>
                            {touched.basement && errors.basement && <span className='error'>{errors.basement}</span>}
                        </Col>
                        <Col span={12}>
                            <label>{add_listing.steps.step1.fields.area}</label>
                            <Input
                                name="area"
                                placeholder="Area (Sq. Ft.)"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.area}
                            />
                            {touched.area && errors.area && <span className='error'>{errors.area}</span>}
                        </Col>
                        <Col span={24}>
                            <label>{add_listing.steps.step1.fields.description}</label>
                            <TextArea
                                name="description"
                                rows={4}
                                placeholder="Enter description"
                                maxLength={1500}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.description}
                            />
                            {touched.description && errors.description && <span className='error'>{errors.description}</span>}
                        </Col>
                    </Row>
                </Col>
                <Col span={6}></Col>
            </Row>
            <div className='page-ctrl next-only'>
                <Button type="primary" className="btn" onClick={() => submitForm()}>{add_listing.next_btn}</Button>
            </div>
        </div>
    )
}

PropertyInfo.propTypes = {
    handleNext: PropTypes.func,
}

export default PropertyInfo