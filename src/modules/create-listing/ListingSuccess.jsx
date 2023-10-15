import { useEffect } from 'react'
import TICK from '../../common/assets/svgs/rightTick.svg'
import './assets/scss/listingSuccess.scss'
import { thank_you } from './constant/string'

const ListingSuccess = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <>
      <div className="listing-success">
        <img src={TICK} alt="Tick" />
        <h2>{thank_you.title}</h2>
        <h2>{thank_you.sub_title}.</h2>
      </div>
    </>
  )
}

export default ListingSuccess