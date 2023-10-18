import { Button, Col, Image, Row } from 'antd'
import './assets/scss/propertyDetails.scss'
import PropertyType from './components/PropertyType'
import GoogleMapReact from 'google-map-react';
import 'react-multi-carousel/lib/styles.css';
import { property_details } from './constant/string';

import cardImg2 from '../../common/assets/images/property.png'
import default_home from '../../common/assets/images/default-home.png'

// import ThumbImg from './assets/images/thumb.png'
// import property2 from './assets/images/property-details-2.png'
// import property3 from './assets/images/property-details-3.png'
// import property4 from './assets/images/property-details-4.png'
// import property5 from './assets/images/property-details-5.png'
// import property6 from './assets/images/property-details-5.png'

import house_type from './assets/svgs/house_type.svg'
import bedroom from './assets/svgs/bedroom.svg'
import bathroom from './assets/svgs/bathroom.svg'
import floor from './assets/svgs/floor.svg'
import basement from './assets/svgs/basement.svg'
import area from './assets/svgs/area.svg'
import car_parking from './assets/svgs/car_parking.svg'
import React, { useEffect, useState } from 'react'
import PropertyCard from '../../common/components/card/PropertyCard';
import Carousel from 'react-multi-carousel';
import PropTypes from "prop-types"
import RealtorInfo from './RealtorInfo';
import { useDispatch, useSelector } from 'react-redux';
import { getPropertyDetails } from './store/actions/propertyDetails';
import { useParams } from 'react-router-dom';
import { propertyType } from '../../common/constant/enums';


// const imgArr = [ThumbImg, property2, property3, property4, property5, property6, property3, property4, property5]

const AnyReactComponent = ({ text }) => <div>{text}</div>;
AnyReactComponent.propTypes = {
  text: PropTypes.string
}

const PropertyDetails = () => {

  const { id } = useParams()

  const dispatch = useDispatch()
  const { propertyDetails } = useSelector((state) => state.propertyDetails)
  const imgArr = propertyDetails?.images ?? []
  console.log('imgArr :>> ', imgArr);

  const [isOpenDesc, setIsOpenDesc] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mainImageSource, setMainImageSource] = useState(import.meta.env.VITE_API_URL + imgArr[0]);

  const handleImageError = () => {
    setMainImageSource(default_home);
  };

  //Map properties
  const defaultProps = {
    center: {
      lat: 49.048664,
      lng: -122.337788
    },
    zoom: 11
  }


  //==> Modal handling <==
  const showModal = () => {
    setIsModalOpen(true);
  }

  const handleCancel = () => {
    setIsModalOpen(false);
  }

  useEffect(() => {
    dispatch(getPropertyDetails(id))
  }, [id])


  return (
    <>
      <div className="property-details-wrapper">
        <h2 className='property-details-heading'>{`${propertyDetails.location?.address}, ${propertyDetails.location?.city}, ${propertyDetails.location?.state} ${propertyDetails.location?.zip}`}</h2>
        <div className="property-images-wrapper">
          <Image.PreviewGroup
            preview={{
              onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
            }}
          >
            <Row className="property-images" gutter={10}>
              <Col span={16} className='outer-col'>
                <div className="property-main-image-container">
                  <Image
                    src={mainImageSource}
                    className="property-main-image"
                    onError={handleImageError}
                  />
                </div>
              </Col>
              <Col span={8} className='outer-col'>
                <Row gutter={[10, 10]}>
                  {imgArr?.map((img, index, arr) => {
                    if (index !== 0) {
                      if (index === 6 && arr.length >= 7) {
                        return <React.Fragment key={index}>
                          <Col span={12} className='last-image'>
                            <div className='last-image-preview'>+{arr.length - 6}</div>
                            <Image
                              className="property-side-image"
                              src={import.meta.env.VITE_API_URL + img}
                              key={index}
                              onError={handleImageError}
                            />
                          </Col>
                        </React.Fragment>
                      } else {
                        return <React.Fragment key={index}>
                          <Col span={12}>
                            <Image
                              className="property-side-image"
                              src={import.meta.env.VITE_API_URL + img}
                              onError={handleImageError}
                              key={index} />
                          </Col>
                        </React.Fragment>
                      }
                    } else {
                      return ''
                    }
                  })}
                </Row>
              </Col>
            </Row>
          </Image.PreviewGroup>
        </div >
        <p className='trending-tag sub-header'>Trending</p>
        <div className="price-tag">
          <h1>${propertyDetails.price}</h1>
          <Button type='primary' className='contact-button' onClick={() => showModal()}>{property_details.btn_text}</Button>
        </div>
        <p className='sub-header'>{property_details.details.title}</p>
        <div className="property-details">
          <Row gutter={[20, 35]}>
            <Col span={6}>
              <PropertyType svg={house_type} title={property_details.details.type} info={propertyType[propertyDetails.type]} />
            </Col>
            <Col span={6}>
              <PropertyType svg={bedroom} title={property_details.details.bed} info={propertyDetails.bedroom} />
            </Col>
            <Col span={6}>
              <PropertyType svg={bathroom} title={property_details.details.bath} info={propertyDetails.bathroom} />
            </Col>
            <Col span={6}>
              <PropertyType svg={floor} title={property_details.details.floor} info={propertyDetails.floor} />
            </Col>
            <Col span={6}>
              <PropertyType svg={basement} title={property_details.details.basement} info={propertyDetails.basement === true ? 'Yes' : 'No'} />
            </Col>
            <Col span={6}>
              <PropertyType svg={area} title={property_details.details.area} info={propertyDetails.area} />
            </Col>
            <Col span={6}>
              <PropertyType svg={car_parking} title={property_details.details.parking} info={propertyDetails.parking} />
            </Col>
          </Row>
        </div >
        <div className="description-container">
          <div className='des-header'>
            <h3 >{property_details.description.title}</h3>
          </div>
          <Row>
            <Col span={18}>
              <div className="description-text">
                <div>
                  <div className={`description ${isOpenDesc ? 'open' : ''}`}>
                    <p>{propertyDetails.description}</p>
                  </div>
                  {propertyDetails?.description?.length > 1200 ? <span className="view-more-btn" onClick={() => setIsOpenDesc(!isOpenDesc)}>{!isOpenDesc ? property_details.description.more : property_details.description.less}</span> : null}
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className='map-container'>
                <GoogleMapReact
                  bootstrapURLKeys={{ key: "" }}
                  defaultCenter={defaultProps.center}
                  defaultZoom={defaultProps.zoom}
                  options={{ gestureHandling: 'greedy' }}

                >
                  <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                  />
                </GoogleMapReact>
              </div>
            </Col>
          </Row>
        </div>

        <div className="similar-open-houses">
          <h2 className='property-details-heading'>{property_details.similar.title}</h2>

          <div className='carousel'>
            <Carousel
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              className="slick-carousel"
              containerClass="container"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite={false}
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024
                  },
                  items: 3,
                  partialVisibilityGutter: 40
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0
                  },
                  items: 1,
                  partialVisibilityGutter: 30
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464
                  },
                  items: 2,
                  partialVisibilityGutter: 30
                }
              }}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              <div className='card-wrapper'>
                <PropertyCard
                  image={cardImg2}
                  price='3,75,000'
                  date='15th Feb’2023'
                  time='10:30 p.m.'
                  address='603, Borinson street, Texas, USA'
                  isSold={false}
                  isLikeable={false}
                  isLiked={false}
                />
              </div>
              <div className='card-wrapper'>
                <PropertyCard
                  image={cardImg2}
                  price='3,75,000'
                  date='15th Feb’2023'
                  time='10:30 p.m.'
                  address='603, Borinson street, Texas, USA'
                  isSold={false}
                  isLikeable={false}
                  isLiked={false}
                />
              </div>
              <div className='card-wrapper'>
                <PropertyCard
                  image={cardImg2}
                  price='3,75,000'
                  date='15th Feb’2023'
                  time='10:30 p.m.'
                  address='603, Borinson street, Texas, USA'
                  isSold={false}
                  isLikeable={false}
                  isLiked={false}
                />
              </div>
              <div className='card-wrapper'>
                <PropertyCard
                  image={cardImg2}
                  price='3,75,000'
                  date='15th Feb’2023'
                  time='10:30 p.m.'
                  address='603, Borinson street, Texas, USA'
                  isSold={false}
                  isLikeable={false}
                  isLiked={false}
                />
              </div>
              <div className='card-wrapper'>
                <PropertyCard
                  image={cardImg2}
                  price='3,75,000'
                  date='15th Feb’2023'
                  time='10:30 p.m.'
                  address='603, Borinson street, Texas, USA'
                  isSold={false}
                  isLikeable={false}
                  isLiked={false}
                />
              </div>
              <div className='card-wrapper'>
                <PropertyCard
                  image={cardImg2}
                  price='3,75,000'
                  date='15th Feb’2023'
                  time='10:30 p.m.'
                  address='603, Borinson street, Texas, USA'
                  isSold={false}
                  isLikeable={false}
                  isLiked={false}
                />
              </div>
            </Carousel>
          </div>
        </div>
      </div >

      <RealtorInfo isModalOpen={isModalOpen} handleCancel={handleCancel} id={propertyDetails?._id} />
    </>

  )
}

export default PropertyDetails