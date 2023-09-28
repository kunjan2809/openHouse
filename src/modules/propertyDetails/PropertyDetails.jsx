import { Button, Col, Image, Row } from 'antd'
import './propertyDetails.scss'
import PropertyType from './components/PropertyType'

import ThumbImg from '../../common/assets/images/property-detail-thumb.png'
import property2 from '../../common/assets/images/property-details-2.png'
import property3 from '../../common/assets/images/property-details-3.png'
import property4 from '../../common/assets/images/property-details-4.png'
import property5 from '../../common/assets/images/property-details-5.png'
import property6 from '../../common/assets/images/property-details-6.png'

import gmap from '../../common/assets/images/gmap.png'

import house_type from '../../common/assets/svgs/house_type.svg'
import bedroom from '../../common/assets/svgs/bedroom.svg'
import bathroom from '../../common/assets/svgs/bathroom.svg'
import floor from '../../common/assets/svgs/floor.svg'
import basement from '../../common/assets/svgs/basement.svg'
import area from '../../common/assets/svgs/area.svg'
import car_parking from '../../common/assets/svgs/car_parking.svg'

const imgArr = [property2, property3, property4, property5, property6, property2]

const PropertyDetails = () => {
  return (
    <div className="property-details-wrapper">
      <h2>603 xyz apartments, Surrey, VIM 3B5</h2>
      <div className="property-images-wrapper">
        <Image.PreviewGroup
          preview={{
            onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
          }}
        >
          <Row className="property-images" gutter={10}>
            <Col span={16}>
              <div className="property-main-image-container">
                <Image src={ThumbImg} className="property-main-image" />
              </div>
            </Col>
            <Col span={8}>
              <Row gutter={[10, 10]}>
                {imgArr?.map((img, index) => {
                  return <>
                    <Col span={12}>
                      <Image className="property-side-image" src={img} key={index} />
                    </Col>
                  </>
                })}
              </Row>
            </Col>


          </Row>
        </Image.PreviewGroup>
      </div >
      <p className='trending-tag'>Trending</p>
      <div className="price-tag">
        <h1>$ 3,75,000</h1>
        <Button type='primary' className='contact-button'>Contact a realtor</Button>
      </div>
      <p>Property Details</p>
      <div className="property-details">
        <PropertyType svg={house_type} title={'Property Type'} info={'Town House'} />
        <PropertyType svg={bedroom} title={'Bedrooms'} info={'4'} />
        <PropertyType svg={bathroom} title={'Bathrooms'} info={'3'} />
        <PropertyType svg={floor} title={'Floors'} info={'3'} />
        <PropertyType svg={basement} title={'Basement'} info={'Yes'} />
        <PropertyType svg={area} title={'Area'} info={'4.152 sqft.'} />
        <PropertyType svg={car_parking} title={'Car Parking'} info={'1'} />
      </div >
      <div className="descriptipn-container">
        <div className="description-text">
          <p>Description</p>
          <p className='description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt impedit aperiam architecto voluptatum recusandae provident quibusdam molestiae? Alias tenetur velit, unde in quas dolores, sed neque minus provident, consequuntur sint culpa repellat eius dolorum dignissimos dicta! Rerum, harum sunt vitae, sit est possimus eos totam quisquam omnis molestiae aliquid dignissimos.</p>
          <p className="view-more-btn">View More</p>
        </div>
        <img src={gmap} alt="" />
      </div>

      <div className="similar-open-houses">
        <h2>Similar Open Houses</h2>

      </div>
    </div >
  )
}

export default PropertyDetails