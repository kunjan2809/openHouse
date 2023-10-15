import { Button, Col, Input, Row, Select } from "antd"
import PropTypes from "prop-types"
const { Option } = Select;
import { add_listing } from "../constant/string";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { storeStepData } from "../store/actions/createListing";
import { useEffect } from "react";

const Pricing = ({ handleNext, handlePrev }) => {

    const dispatch = useDispatch()
    const { listingData } = useSelector((state) => state.createListing)


    //==> Yup-formik validation <==
    const formSchema = Yup.object().shape({
        currency: Yup.string().trim().required('Currency required'),
        price: Yup.string().trim().required('Please enter price'),
    })

    const initialValues = {
        currency: 'cad',
        price: null,
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: formSchema,
        onSubmit: (values) => {
            let data = {
                currency: values.currency,
                price: values.price,
            }
            dispatch(storeStepData('S2', data))
            handleNext()
        }
    })
    const { values, handleChange, handleBlur, touched, errors, submitForm, setFieldValue, setValues } = formik

    //Set field values on load
    useEffect(() => {
        if (listingData?.S2) {
            setValues(listingData?.S2)
        }
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [listingData])


    return (
        <div className="pricing-form">
            <h1 className='title'>{add_listing.steps.step3.title}</h1 >

            <Row>
                <Col span={18}>
                    <Row gutter={20}>
                        <Col span={12}>
                            <label>{add_listing.steps.step3.fields.price}</label>
                            <Input
                                type="number"
                                name="price"
                                className="input-field-labeled"
                                placeholder="Price"
                                addonBefore={
                                    <Select
                                        defaultValue="cad"
                                        className="select-country-money"
                                        popupClassName="money-filter-select"
                                        onChange={(value) => setFieldValue('currency', value)}
                                        onBlur={handleBlur}
                                        value={values.currency}
                                    >
                                        <Option value="cad">CAD</Option>
                                    </Select>
                                }
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.price}
                            />
                            {touched.currency && errors.currency && <span className='error'>{errors.currency}</span>}
                            <br />
                            {touched.price && errors.price && <span className='error'>{errors.price}</span>}
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

Pricing.propTypes = {
    handleNext: PropTypes.func,
    handlePrev: PropTypes.func
}


export default Pricing