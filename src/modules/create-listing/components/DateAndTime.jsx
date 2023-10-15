import { Button, Col, DatePicker, Row } from "antd"
import PropTypes from "prop-types"
import { TimePicker } from 'antd';
import { add_listing } from "../constant/string";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { storeStepData } from "../store/actions/createListing";
import { useEffect } from "react";
import dayjs from 'dayjs';

const DateAndTime = ({ handleNext, handlePrev }) => {

    const dispatch = useDispatch()
    const { listingData } = useSelector((state) => state.createListing)


    //==> Yup-formik validation <==
    const formSchema = Yup.object().shape({
        date: Yup.string().trim().required('Please select date'),
        time: Yup.array().min(2, 'Please select time').required('Please select time'),
    })

    const initialValues = {
        date: null,
        time: null,
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: formSchema,
        onSubmit: (values) => {
            let data = {
                date: values.date,
                time: values.time,
            }
            dispatch(storeStepData('S3', data))
            handleNext()
        }
    })

    const { values, touched, errors, submitForm, setValues, setFieldValue } = formik

    //Set field values on load
    useEffect(() => {
        if (listingData?.S3) {
            setValues(listingData?.S3)
        }
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [listingData])


    return (
        <div className="date-and-time-form">
            <h1 className='title'>{add_listing.steps.step4.title}</h1 >

            <Row>
                <Col span={18}>
                    <Row gutter={20}>
                        <Col span={12}>
                            <label>{add_listing.steps.step4.fields.date}</label>
                            <DatePicker
                                name="date"
                                format={'YYYY-MM-DD'}
                                onChange={(date) => {
                                    setFieldValue('date', date.format('YYYY-MM-DD'))
                                }}
                                value={values.date ? dayjs(values.date) : null}
                            />
                            {touched.date && errors.date && <span className='error'>{errors.date}</span>}
                        </Col>
                        {/* <Col span={12}></Col> */}
                        <Col span={12}>
                            <label>{add_listing.steps.step4.fields.time}</label>
                            <TimePicker.RangePicker
                                name="time"
                                use12Hours
                                format="h:mm a"
                                onChange={(time) => {
                                    setFieldValue('time', [time[0].toDate(), time[1].toDate()])
                                }}
                                value={values.time ? [dayjs(values.time[0]), dayjs(values.time[1])] : null}
                            />
                            {touched.time && errors.time && <span className='error'>{errors.time}</span>}
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

DateAndTime.propTypes = {
    handleNext: PropTypes.func,
    handlePrev: PropTypes.func
}


export default DateAndTime