import { Card } from "antd";
import PropTypes from "prop-types";
import watch from '../../assets/svgs/watch-card.svg'
import calender from '../../assets/svgs/calender-card.svg'
import './propertyCard.scss'

const PropetyCard = (props) => {
    const { price, date, time, address, image, isSold } = props

    return (
        <Card
            className="custom-property-card"
            hoverable
            bordered={false}
            style={{ width: 340 }}
            cover={<img alt=" " src={image}/>}
        >
            <div className="cardContent">
                <h3>${price}</h3>
                <p>{address}</p>
                <div className="date-time">
                    <div className="dtc"><img alt='' src={calender} /><span>{date}</span></div>
                    <div className="dtc"><img alt='' src={watch} /><span>{time}</span></div>
                </div>
            </div>
        </Card>
    )
}

PropetyCard.propTypes = {
    price: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string,
    address: PropTypes.string,
    image: PropTypes.any,
    isSold: PropTypes.bool
}

export default PropetyCard