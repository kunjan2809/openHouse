import { Button, Col, DatePicker, Row } from "antd"
import PropTypes from "prop-types"
import dayjs from 'dayjs';
import { TimePicker } from 'antd';
import { add_listing } from "../constant/string";

const DateAndTime = ({ handleNext, handlePrev }) => {
    return (
        <div className="date-and-time-form">
            <h1 className='title'>{add_listing.steps.step4.title}</h1 >

            <Row>
                <Col span={18}>
                    <Row gutter={20}>
                        <Col span={12}>
                            <label>{add_listing.steps.step4.fields.date}</label>
                            <DatePicker
                                defaultValue={dayjs()}
                                format={'DD/MM/YYYY'}
                            />
                        </Col>
                        <Col span={24}>
                            <label>{add_listing.steps.step4.fields.time}</label>
                            <TimePicker.RangePicker
                                use12Hours
                                format="h:mm a"
                                // defaultValue={[dayjs(), dayjs()]}
                            />
                        </Col>
                    </Row>
                </Col>
                <Col span={6}>

                </Col>
            </Row>

            <div className='page-ctrl'>
                <Button type="primary" className="btn" onClick={() => handlePrev()}>{add_listing.prev_btn}</Button>
                <Button type="primary" className="btn" onClick={() => handleNext()}>{add_listing.next_btn}</Button>
            </div>
        </div>
    )
}

DateAndTime.propTypes = {
    handleNext: PropTypes.func,
    handlePrev: PropTypes.func
}


export default DateAndTime