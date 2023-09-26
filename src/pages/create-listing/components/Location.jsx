import { Button, Col, Input, Row, Select } from "antd"
import PropTypes from "prop-types"

const BEDROOMS = [
    {
        value: '1',
        label: '1'
    },
    {
        value: '2',
        label: '2'
    },
    {
        value: '3',
        label: '3'
    },
    {
        value: '4',
        label: '4'
    },
    {
        value: '5',
        label: '5'
    },
    {
        value: '6',
        label: '6'
    },
]

const Location = ({ handleNext, handlePrev }) => {
    return (
        <div className="location-form">
            <h1 className='title'>LOCATION</h1 >

            <Row>
                <Col span={18}>
                    <Row gutter={20}>
                        <Col span={12}>
                            <label>Country*</label>
                            <Select
                                popupClassName="step-select-opt"
                                placeholder='Select bedrooms'
                                options={BEDROOMS}
                            />
                        </Col>
                        <Col span={12}>
                            <label>State/Province*</label>
                            <Select
                                popupClassName="step-select-opt"
                                placeholder='Select floors'
                            />
                        </Col>
                        <Col span={24}>
                            <label>Street Name*</label>
                            <Input
                                placeholder="Street name"
                            />
                        </Col>
                        <Col span={12}>
                            <label>City*</label>
                            <Select
                                popupClassName="step-select-opt"
                                placeholder='Select bedrooms'
                                options={BEDROOMS}
                            />
                        </Col>
                        <Col span={12}>
                            <label>Zip Code*</label>
                            <Input
                                className="input-field-labeled"
                                placeholder="Area (Sq. Ft.)"
                            />
                        </Col>
                        {/* <Col span={12}>
                            <p className="input-label">Phone Number</p>
                            <Input
                                className="input-field-labeled"
                                placeholder=" "
                                addonBefore={selectBefore}
                            />
                        </Col> */}
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


Location.propTypes = {
    handleNext: PropTypes.func,
    handlePrev: PropTypes.func
}

export default Location