import PropTypes from 'prop-types'

const PropertyType = (props) => {
    const { svg, title, info } = props;
    return (
        <>
            <div className="property-details-item">
                <div className='card-logo'>
                    <img src={svg} alt="" />
                </div>
                <div className='card-body'>
                    <h5 className='title'>{title}</h5>
                    <h4>{info}</h4>
                </div>
            </div>
        </>
    )
}

PropertyType.propTypes = {
    svg: PropTypes.any,
    title: PropTypes.string,
    info: PropTypes.string
}

export default PropertyType