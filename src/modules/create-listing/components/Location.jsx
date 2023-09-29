import { Button, Col, Input, Row, Select } from "antd"
import PropTypes from "prop-types"
import { add_listing } from "../constant/string";

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
            <h1 className='title'>{add_listing.steps.step3.title}</h1 >

            <Row>
                <Col span={18}>
                    <Row gutter={20}>
                        <Col span={12}>
                            <label>{add_listing.steps.step2.fields.country}</label>
                            <Select
                                popupClassName="step-select-opt"
                                placeholder='Select country'
                                options={BEDROOMS}
                            />
                        </Col>
                        <Col span={12}>
                            <label>{add_listing.steps.step2.fields.state}</label>
                            <Select
                                popupClassName="step-select-opt"
                                placeholder='Select state'
                            />
                        </Col>
                        <Col span={24}>
                            <label>{add_listing.steps.step2.fields.street}</label>
                            <Input
                                placeholder="Street name"
                            />
                        </Col>
                        <Col span={12}>
                            <label>{add_listing.steps.step2.fields.city}</label>
                            <Select
                                popupClassName="step-select-opt"
                                placeholder='Select city'
                                options={BEDROOMS}
                            />
                        </Col>
                        <Col span={12}>
                            <label>{add_listing.steps.step2.fields.zip}</label>
                            <Input
                                className="input-field-labeled"
                                placeholder="zip"
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


Location.propTypes = {
    handleNext: PropTypes.func,
    handlePrev: PropTypes.func
}

export default Location