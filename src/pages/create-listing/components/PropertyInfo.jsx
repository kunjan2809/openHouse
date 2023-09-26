import { Button, Col, Input, Radio, Row, Select } from "antd"
import PropTypes from "prop-types"


const PropertyInfo = ({ handleNext, handlePrev }) => {
    const { TextArea } = Input;

    const PROPERTYTYPE = [
        {
            value: 'house',
            label: 'House'
        },
        {
            value: 'apartment',
            label: 'Apartment'
        },
        {
            value: 'guesthouse',
            label: 'Guesthouse'
        },
        {
            value: 'hotel',
            label: 'Hotel'
        },
    ]

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

    const BATHROOMS = [
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

    const FLOORS = [
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
        }
    ]

    const PARKING = [
        {
            value: 'streets',
            label: 'Streets'
        },
        {
            value: 'garage',
            label: 'Garage'
        },
        {
            value: 'other',
            label: 'Other'
        }
    ]

    return (
        <div className="property-details-form">
            <h1 className='title'>PROPERTY DETAILS</h1 >

            <Row>
                <Col span={18}>
                    <Row gutter={20}>
                        <Col span={24}>
                            <label>Property Type*</label>
                            <Select
                                popupClassName="step-select-opt"
                                placeholder='Select property type'
                                options={PROPERTYTYPE}
                            />
                        </Col>
                        <Col span={12}>
                            <label>Bedrooms*</label>
                            <Select
                                popupClassName="step-select-opt"
                                placeholder='Select bedrooms'
                                options={BEDROOMS}
                            />
                        </Col>
                        <Col span={12}>
                            <label>Bathrooms*</label>
                            <Select
                                popupClassName="step-select-opt"
                                placeholder='Select bathrooms'
                                options={BATHROOMS}
                            />
                        </Col>
                        <Col span={12}>
                            <label>Floors*</label>
                            <Select
                                popupClassName="step-select-opt"
                                placeholder='Select floors'
                                options={FLOORS}
                            />
                        </Col>
                        <Col span={12}>
                            <label>Car Parking*</label>
                            <Select
                                popupClassName="step-select-opt"
                                placeholder='Select car parking'
                                options={PARKING}
                            />
                        </Col>

                        <Col span={24}>
                            <label>Basement*</label>
                            <Radio.Group
                                className="radio"
                            >
                                <Radio value={'Y'}>Yes</Radio>
                                <Radio value={'N'}>No</Radio>
                            </Radio.Group>
                        </Col>
                        <Col span={12}>
                            <label>{`Area*`} </label>
                            <Input
                                placeholder="Area (Sq. Ft.)"
                            />
                        </Col>
                        <Col span={24}>
                            <label>Description*</label>
                            <TextArea rows={4} placeholder="Enter description" maxLength={6} />
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

PropertyInfo.propTypes = {
    handleNext: PropTypes.func,
    handlePrev: PropTypes.func
}

export default PropertyInfo