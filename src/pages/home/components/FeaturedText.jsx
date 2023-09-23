import PropTypes from "prop-types"

const FeaturedText = (props) => {
    const { decorated, text } = props

    return (
        <>
            <div className='heading'>
                <span className='featured-text'>{decorated}</span>{text}
            </div>
        </>
    )
}

FeaturedText.propTypes = {
    decorated: PropTypes.string,
    text: PropTypes.string
}

export default FeaturedText