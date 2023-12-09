import { Button, Col, Image, Row, Spin } from 'antd'
import './assets/scss/propertyDetails.scss'
import PropertyType from './components/PropertyType'
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
import 'react-multi-carousel/lib/styles.css';
import { property_details } from './constant/string';

import default_home from '../../common/assets/images/default-home.png'

import house_type from './assets/svgs/house_type.svg'
import bedroom from './assets/svgs/bedroom.svg'
import bathroom from './assets/svgs/bathroom.svg'
import floor from './assets/svgs/floor.svg'
import basement from './assets/svgs/basement.svg'
import area from './assets/svgs/area.svg'
import car_parking from './assets/svgs/car_parking.svg'
import { useCallback, useEffect, useState } from 'react'
import PropertyCard from '../../common/components/card/PropertyCard';
import Carousel from 'react-multi-carousel';
import PropTypes from "prop-types"
import RealtorInfo from './RealtorInfo';
import { useDispatch, useSelector } from 'react-redux';
import { getPropertyDetails, getSimilarProperty } from './store/actions/propertyDetails';
import { useParams } from 'react-router-dom';
import { propertyType } from '../../common/constant/enums';
import { useScrollToTop } from '../../common/hooks/general';
import moment from 'moment';


// const imgArr = [ThumbImg, property2, property3, property4, property5, property6, property3, property4, property5]

const AnyReactComponent = ({ text }) => <div>{text}</div>;
AnyReactComponent.propTypes = {
  text: PropTypes.string
}

const PropertyDetails = () => {

  const { id } = useParams()
  useScrollToTop(id)

  const dispatch = useDispatch()
  const { propertyDetails, loading: propertyDetailsLoading, similarPRoperties } = useSelector((state) => state.propertyDetails)
  const imgArr = propertyDetails?.images ?? []

  const [map, setMap] = useState(null)
  const [isOpenDesc, setIsOpenDesc] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mainImageSource, setMainImageSource] = useState();
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [center, setCenter] = useState()


  const handleImageError = () => {
    setMainImageSource(default_home);
  };


  //==> Map properties <==
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_MAP_KEY
  })

  const onLoad = useCallback(function callback(map) {
    // const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);
    map.setZoom(10)
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback() {
    setMap(null)
  }, [])


  //==> Modal handling <==
  const showModal = () => {
    setIsModalOpen(true);
  }

  const handleCancel = () => {
    setIsModalOpen(false);
  }


  useEffect(() => {
    dispatch(getPropertyDetails(id))
    dispatch(getSimilarProperty(id))
  }, [id])

  useEffect(() => {
    setMainImageSource(import.meta.env.VITE_API_URL + imgArr[0])
  }, [imgArr])

  useEffect(() => {
    if (propertyDetails?.location && map) {
      setCenter(propertyDetails.location?.latLng)
      setSelectedLocation(propertyDetails.location?.latLng)
    }
  }, [propertyDetails, map])


  return (
    <>
      <div className="property-details-wrapper">
        {
          !propertyDetailsLoading ?
            <>
              <h2 className='property-details-heading'>{`${propertyDetails.location?.address}, ${propertyDetails.location?.city}, ${propertyDetails.location?.state} ${propertyDetails.location?.zip}`}</h2>
              <div className="property-images-wrapper">
                <Image.PreviewGroup
                  preview={{
                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                  }}
                >
                  <Row className="property-images" gutter={[10, 10]}>
                    <Col xm={24} sm={24} md={24} lg={16} xl={16} className='outer-col'>
                      <div className="property-main-image-container">
                        <Image
                          src={mainImageSource}
                          className="property-main-image"
                          onError={handleImageError}
                        />
                      </div>
                    </Col>
                    <Col xm={24} sm={24} md={24} lg={8} xl={8} className='outer-col'>
                      <Row gutter={[10, 10]} className='remaining-imgs' >
                        {imgArr?.map((img, index, arr) => {
                          if (index !== 0) {
                            if (index === 6 && arr.length >= 7) {
                              return <Col key={index} xm={8} sm={8} md={4} lg={12} xl={12} className='last-image'>
                                <div className='last-image-preview'>+{arr.length - 6}</div>
                                <Image
                                  className="property-side-image"
                                  src={import.meta.env.VITE_API_URL + img}
                                  key={index}
                                  onError={handleImageError}
                                />
                              </Col>
                            } else {
                              return <Col key={index} xm={8} sm={8} md={4} lg={12} xl={12}>
                                <Image
                                  className="property-side-image"
                                  src={import.meta.env.VITE_API_URL + img}
                                  onError={handleImageError}
                                  key={index} />
                              </Col>
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
                <Row className="property-details-row">
                  <Col lg={8} xs={12} sm={8} md={8}>
                    <PropertyType svg={house_type} title={property_details.details.type} info={propertyType[propertyDetails.type]} />
                  </Col>
                  <Col lg={8} xs={12} sm={8} md={8}>
                    <PropertyType svg={bedroom} title={property_details.details.bed} info={propertyDetails.bedroom} />
                  </Col>
                  <Col lg={8} xs={12} sm={8} md={8}>
                    <PropertyType svg={bathroom} title={property_details.details.bath} info={propertyDetails.bathroom} />
                  </Col>
                  <Col lg={8} xs={12} sm={8} md={8}>
                    <PropertyType svg={floor} title={property_details.details.floor} info={propertyDetails.floor} />
                  </Col>
                  <Col lg={8} xs={12} sm={8} md={8}>
                    <PropertyType svg={basement} title={property_details.details.basement} info={propertyDetails.basement === true ? 'Yes' : 'No'} />
                  </Col>
                  <Col lg={8} xs={12} sm={8} md={8}>
                    <PropertyType svg={area} title={property_details.details.area} info={propertyDetails.area} />
                  </Col>
                  <Col lg={8} xs={12} sm={8} md={8}>
                    <PropertyType svg={car_parking} title={property_details.details.parking} info={propertyDetails.parking} />
                  </Col>
                </Row>
              </div >
              <div className="description-container">
                <div className='des-header'>
                  <h3 >{property_details.description.title}</h3>
                </div>
                <Row>
                  <Col span={24}>
                    <div className="description-text">
                      <div>
                        <div className={`description ${isOpenDesc ? 'open' : ''}`}>
                          <p>{propertyDetails.description}</p>
                        </div>
                        {propertyDetails?.description?.length > 1200 ? <span className="view-more-btn" onClick={() => setIsOpenDesc(!isOpenDesc)}>{!isOpenDesc ? property_details.description.more : property_details.description.less}</span> : null}
                      </div>
                    </div>
                  </Col>
                  <Col span={24}>
                    <div className='map-container'>
                      {isLoaded && <GoogleMap
                        center={center}
                        options={{ gestureHandling: 'greedy' }}
                        mapContainerStyle={{
                          width: '100%',
                          height: '450px'
                        }}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                      >
                        {
                          selectedLocation && <MarkerF
                            position={selectedLocation}
                          >
                          </MarkerF>
                        }
                      </GoogleMap>}
                    </div>
                  </Col>
                </Row>
              </div>

              <div className="similar-open-houses">
                <h2 className='property-details-heading'>{property_details.similar.title}</h2>
                {
                  similarPRoperties && similarPRoperties.length > 0 && <div className='carousel'>
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
                      {
                        similarPRoperties.map((propertyData, index) => {
                          return (
                            <div className='card-wrapper' key={index} >
                              <PropertyCard
                                id={propertyData._id}
                                image={`${import.meta.env.VITE_API_URL}${propertyData.images[0]}`}
                                price={propertyData.price}
                                date={moment(propertyData.date).format("Do MMM, YYYY")}
                                time={moment(propertyData.date).format('h:mm A')}
                                address={`${propertyData.location?.address}, ${propertyData.location?.city}, ${propertyData.location?.state}, ${propertyData.location?.country}`}
                                isSold={false}
                                isLikeable={false}
                                isLiked={false}
                              />
                            </div>
                          )
                        })
                      }
                    </Carousel>
                  </div>
                }
              </div>
            </>
            : <div className='spinner'><Spin size="large" /></div>
        }
      </div >
      <RealtorInfo isModalOpen={isModalOpen} handleCancel={handleCancel} id={propertyDetails?._id} />
    </>

  )
}

export default PropertyDetails