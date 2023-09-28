import { Card } from "antd";
import PropTypes from "prop-types";
import watch from '../../assets/svgs/watch-card.svg'
import calender from '../../assets/svgs/calender-card.svg'
import soldSVG from "../../assets/svgs/sold-tag.svg";
import { HeartSVG } from "../../assets/optimizedSVG/svgs";
import { useNavigate } from "react-router-dom";
import './propertyCard.scss'

const PropertyCard = ({ price, date, time, address, image, isSold = false, isLikeable = false, isLiked = false }) => {
    const navigate = useNavigate()

    return (
        <>
            <Card
                className="custom-property-card"
                hoverable
                bordered={false}
                style={{ minWidth: 300 }}
            cover={<div className={isSold ? 'blur-img' : ''}><div className="filter"></div> <img alt=" " src={image} /></div>}
            onClick={() => navigate('/property/1')}
            >
            <div className="cardContent">
                <h3 className={isSold ? 'disabled' : ''}>${price}</h3>
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
        </>
    )
}

PropertyCard.propTypes = {
    price: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string,
    address: PropTypes.string,
    image: PropTypes.any,
    isSold: PropTypes.bool,
    isLikeable: PropTypes.bool,
    onLikeChange: PropTypes.func,
    isLiked: PropTypes.bool
}

export default PropertyCard