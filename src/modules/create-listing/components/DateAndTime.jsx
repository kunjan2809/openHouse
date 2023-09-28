import { Button, Col, DatePicker, Row } from "antd"
import PropTypes from "prop-types"
import dayjs from 'dayjs';
import { TimePicker } from 'antd';


const DateAndTime = ({ handleNext, handlePrev }) => {
    return (
        <div className="date-and-time-form">
            <h1 className='title'>DATE & TIME</h1 >

            <Row>
                <Col span={18}>
                    <Row gutter={20}>
                        <Col span={12}>
                            <label>Date*</label>
                            <DatePicker
                                defaultValue={dayjs()}
                                format={'DD/MM/YYYY'}
                            />
                        </Col>
                        <Col span={24}>
                            <label>Time*</label>
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
                <Button type="primary" className="btn" onClick={() => handlePrev()}>Prev</Button>
                <Button type="primary" className="btn" onClick={() => handleNext()}>Save & Next</Button>
            </div>
        </div>
    )
}

DateAndTime.propTypes = {
    handleNext: PropTypes.func,
    handlePrev: PropTypes.func
}


export default DateAndTime