import { Card } from "antd";
import PropTypes from "prop-types";
import watch from '../../assets/svgs/watch-card.svg'
import calender from '../../assets/svgs/calender-card.svg'
import soldSVG from "../../assets/svgs/sold-tag.svg";
import defaultHomeImg from "../../assets/images/default-home.png";
import { HeartSVG } from "../../assets/optimizedSVG/svgs";
import { useNavigate } from "react-router-dom";
import './propertyCard.scss'

const PropertyCard = ({ id, price, date, time, address, image, isSold = false, isLikeable = false, isLiked = false }) => {
    const navigate = useNavigate()

    return (
        <>
            <Card
                className="custom-property-card"
                hoverable
                bordered={false}
                cover={
                    <div className={isSold ? 'blur-img' : ''}>
                        <div className="filter"></div>
                        <img
                            alt=" "
                            src={image}
                            onError={({ currentTarget }) => {
                                currentTarget.onerror = null;
                                currentTarget.src = defaultHomeImg;
                                currentTarget.style.objectFit = 'contain'
                            }}
                        />
                    </div>
                }
                onClick={() => navigate(`/property/${id}`)}
            >
                <div className="cardContent">
                    <h2 className={isSold ? 'disabled' : ''}>${price}</h2>
                    <p>{address && address.length > 45 ? `${address.substring(0, 45)}...` : address}</p>
                    <div className="date-time">
                        <div className="dtc"><img alt='' src={calender} /><span>{date}</span></div>
                        <div className="dtc"><img alt='' src={watch} /><span>{time}</span></div>
                    </div>

                    {isSold && <div className={`sold-tag`}>
                        <img className="clip-shape" alt=' ' src={soldSVG} />
                        <div className="sold-txt">Sold</div>
                    </div>}
                    {isLikeable && <div className={`like-btn ${isLiked ? 'active' : ''}`} onClick={(e) => { e.stopPropagation() }}>
                        <HeartSVG />
                    </div>}
                </div>
            </Card >
        </>
    )
}

PropertyCard.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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