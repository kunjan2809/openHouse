import { Button, Col, Input, Row, Select } from "antd"
import PropTypes from "prop-types"
const { Option } = Select;


const Pricing = ({ handleNext, handlePrev }) => {

    return (
        <div className="pricing-form">
            <h1 className='title'>PRICE</h1 >

            <Row>
                <Col span={18}>
                    <Row gutter={20}>
                        <Col span={12}>
                            <label>Price*</label>
                            <Input
                                className="input-field-labeled"
                                placeholder=" "
                                addonBefore={
                                    <Select
                                        defaultValue="cad"
                                        className="select-country-money"
                                        popupClassName="money-filter-select"
                                    >
                                        <Option value="cad">CAD</Option>
                                        <Option value="usd">USD</Option>
                                        <Option value="inr">INR</Option>
                                    </Select>
                                }
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

Pricing.propTypes = {
    handleNext: PropTypes.func,
    handlePrev: PropTypes.func
}


export default Pricing