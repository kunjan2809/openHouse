import { Card } from "antd";
import PropTypes from "prop-types";
import watch from '../../assets/svgs/watch-card.svg'
import calender from '../../assets/svgs/calender-card.svg'
import './propertyCard.scss'
import { HeartSVG } from "../../assets/optimizedSVG/svgs";
import soldSVG from "../../assets/svgs/sold-tag.svg";

const PropetyCard = (props) => {
    const { price, date, time, address, image, isSold = false, isLikeable = false, onLikeChaneg = () => { }, isLiked = false } = props

    return (
        <Card
            className="custom-property-card"
            hoverable
            bordered={false}
            style={{ width: 340 }}
            cover={<div className={isSold ? 'blur-img' : ''}><div className="filter"></div> <img alt=" " src={image} /></div>}
        >
            <div className="cardContent">
                <h3>${price}</h3>
                <p>{address}</p>
                <div className="date-time">
                    <div className="dtc"><img alt='' src={calender} /><span>{date}</span></div>
                    <div className="dtc"><img alt='' src={watch} /><span>{time}</span></div>
                </div>

                
                {isSold && <div className={`sold-tag`}>
                    <img className="clip-shape" alt=' ' src={soldSVG} />
                    <div className="sold-txt">Sold</div>
                </div>}
                {isLikeable && <div className={`like-btn ${isLiked ? 'active' : ''}`}>
                    <HeartSVG />
                </div>}
            </div>
        </Card >
    )
}

PropetyCard.propTypes = {
    price: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string,
    address: PropTypes.string,
    image: PropTypes.any,
    isSold: PropTypes.bool,
    isLikeable: PropTypes.bool,
    onLikeChaneg: PropTypes.func,
    isLiked: PropTypes.bool
}

export default PropetyCard