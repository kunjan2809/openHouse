import TICK from '../../assets/svgs/rightTick.svg'
import './listingSuccess.scss'

const listingSuccess = () => {
  return (
    <>
      <div className="listing-success">
        <img src={TICK} alt="Tick" />
        <h2>{`Thankyou for submitting listing details!`}</h2>
        <h2>{`You’ll be notified once your post is being reviewed`}.</h2>
      </div>
    </>
  )
}

export default listingSuccess