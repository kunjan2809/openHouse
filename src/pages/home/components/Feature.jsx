import PropTypes from 'prop-types'

const Feature = (props) => {
    const { title, svgPath } = props

    return (
        <>
            <div className='feature-container'>
                <div className='circle'>
                    <img src={svgPath} alt=" " />
                    <span>{title}</span>
                </div>
            </div>
        </>
    )
}

Feature.propTypes = {
    title: PropTypes.string,
    svgPath: PropTypes.any
}

export default Feature