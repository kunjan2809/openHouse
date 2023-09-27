import PropTypes from 'prop-types'

const PropertyType = (props) => {
    const { svg, title, info } = props;
    return (
        <>
            <div className="property-details-item">
                <img src={svg} alt="" />
                <h5 className='title'>{title}</h5>
                <h5>{info}</h5>
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