
import { Card } from "antd";
import PropTypes from "prop-types";
import './blogCard.scss'
import { useNavigate } from "react-router-dom";

const BlogCard = (props) => {
    const { heading, description, date, image, isTranding } = props
    const navigate = useNavigate()

    return (
        <Card
            className="custom-blog-card"
            hoverable
            bordered={false}
            style={{ width: 450 }}
            cover={<div className={isTranding ? 'blur-img' : ''}><div className="filter"></div><img alt=" " src={image} /></div>}
            onClick={() => navigate('/blog/1')}
        >
            <div className="cardContent">
                <h3>{heading}</h3>
                <p>{description}</p>
                <div className="date-footer">
                    <div className="date">{date}</div>
                    <div className="read-more">Read More</div>
                </div>

                {isTranding && <div className={`trending-tag`}>
                    Trending
                </div>}
            </div>
        </Card >
    )
}

BlogCard.propTypes = {
    heading: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    image: PropTypes.any,
    isTranding: PropTypes.bool,
}

export default BlogCard