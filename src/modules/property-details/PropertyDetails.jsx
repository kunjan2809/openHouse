import { Button, Col, Image, Modal, Row } from 'antd'
import './assets/scss/propertyDetails.scss'
import PropertyType from './components/PropertyType'
import GoogleMapReact from 'google-map-react';
import 'react-multi-carousel/lib/styles.css';
import { property_details } from './constant/string';

import cardImg2 from '../../common/assets/images/property.png'

import ThumbImg from './assets/images/thumb.png'
import property2 from './assets/images/property-details-2.png'
import property3 from './assets/images/property-details-3.png'
import property4 from './assets/images/property-details-4.png'
import property5 from './assets/images/property-details-5.png'
import property6 from './assets/images/property-details-5.png'

import phone_svg from "../../common/assets/svgs/phone.svg"
import mail_svg from "../../common/assets/svgs/email.svg"
import instagram from "../../common/assets/svgs/instagram.svg"
import facebook from "../../common/assets/svgs/facebook.svg"
import twitter from "../../common/assets/svgs/twitter.svg"
import profile_img from '../profile/assets/images/profile-img.png'

import house_type from './assets/svgs/house_type.svg'
import bedroom from './assets/svgs/bedroom.svg'
import bathroom from './assets/svgs/bathroom.svg'
import floor from './assets/svgs/floor.svg'
import basement from './assets/svgs/basement.svg'
import area from './assets/svgs/area.svg'
import car_parking from './assets/svgs/car_parking.svg'
import { useState } from 'react'
import PropertyCard from '../../common/components/card/PropertyCard';
import Carousel from 'react-multi-carousel';
import PropTypes from "prop-types"


const imgArr = [ThumbImg, property2, property3, property4, property5, property6, property3, property4, property5]

const AnyReactComponent = ({ text }) => <div>{text}</div>;
AnyReactComponent.propTypes = {
  text: PropTypes.string
}

const PropertyDetails = () => {

  const [isOpenDesc, setIsOpenDesc] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const defaultProps = {
    center: {
      lat: 49.048664,
      lng: -122.337788
    },
    zoom: 11
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (

    <>
      <div className="property-details-wrapper">
        <h2> 603, xyz apartments, Surrey, VIM 3B5</h2>
        <div className="property-images-wrapper">
          <Image.PreviewGroup
            preview={{
              onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
            }}
          >
            <Row className="property-images" gutter={10}>
              <Col span={16} className='outer-col'>
                <div className="property-main-image-container">
                  <Image src={imgArr[0]} className="property-main-image" />
                </div>
              </Col>
              <Col span={8} className='outer-col'>
                <Row gutter={[10, 10]}>
                  {imgArr?.map((img, index, arr) => {
                    if (index !== 0) {
                      if (index === 6 && arr.length >= 7) {
                        return <>
                          <Col span={12} className='last-image'>
                            <div className='last-image-preview'>+{arr.length - 6}</div>
                            <Image className="property-side-image" src={img} key={index} />
                          </Col>
                        </>
                      } else {
                        return <>
                          <Col span={12}>
                            <Image className="property-side-image" src={img} key={index} />
                          </Col>
                        </>
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
          <h1>$ 3,75,000</h1>
          <Button type='primary' className='contact-button' onClick={() => showModal()}>{property_details.btn_text}</Button>
        </div>
        <p className='sub-header'>{property_details.details.title}</p>
        <div className="property-details">
          <Row gutter={[20, 35]}>
            <Col span={6}>
              <PropertyType svg={house_type} title={property_details.details.type} info={'Town House'} />
            </Col>
            <Col span={6}>
              <PropertyType svg={bedroom} title={property_details.details.bed} info={'4'} />
            </Col>
            <Col span={6}>
              <PropertyType svg={bathroom} title={property_details.details.bath} info={'3'} />
            </Col>
            <Col span={6}>
              <PropertyType svg={floor} title={property_details.details.floor} info={'3'} />
            </Col>
            <Col span={6}>
              <PropertyType svg={basement} title={property_details.details.basement} info={'Yes'} />
            </Col>
            <Col span={6}>
              <PropertyType svg={area} title={property_details.details.area} info={'4.152 sqft.'} />
            </Col>
            <Col span={6}>
              <PropertyType svg={car_parking} title={property_details.details.parking} info={'1'} />
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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit soluta ducimus ea repellat, maxime aut aliquid! Vero id consequatur tempore fuga hic quam odit ipsam? Reiciendis, repudiandae eos error laboriosam nisi recusandae ut officiis maiores totam corrupti delectus maxime esse voluptatem, asperiores, temporibus quia modi quis laborum beatae accusantium voluptates enim sunt iste. Voluptas beatae incidunt delectus sapiente, minus eaque sequi ratione, in officia corporis sunt? Inventore quam eius illo ducimus vero temporibus nihil aut ea. Voluptates recusandae tempore assumenda ex placeat praesentium magni numquam quaerat veniam vel laudantium eligendi non tenetur quia saepe ad animi suscipit dolores nisi nihil, quo, quisquam sapiente nemo velit! Unde, officia iusto repellendus animi autem, id beatae modi obcaecati error et expedita, nisi voluptate incidunt ratione eaque pariatur iure recusandae voluptatem. Commodi inventore quod exercitationem doloremque laboriosam quas accusamus, perspiciatis iusto vero ipsum possimus, at quibusdam eveniet iure magni veniam culpa unde maxime consequatur corrupti ducimus sint recusandae, iste nulla. Inventore ullam et repudiandae nobis eum possimus aut! Impedit pariatur asperiores eligendi assumenda, ad libero dolore officia, atque praesentium cupiditate dignissimos minima! Iste, quis? Expedita repellendus laborum laboriosam. Hic esse corporis assumenda natus, consequatur repellendus nihil voluptas eveniet. Eligendi a quos reprehenderit ab impedit atque labore deleniti totam mollitia pariatur eius possimus, sit omnis delectus provident, ea odio! Nobis similique tempore voluptas culpa nemo nulla eaque ea magni enim, natus esse velit dolores officia? Beatae odit explicabo est fugiat amet magni nisi tenetur in cumque! Minima debitis iure dicta deleniti esse. Quaerat vitae modi nisi porro molestias ex maxime cumque, iure sint unde voluptatibus. Porro corrupti temporibus magnam impedit ipsam, excepturi rerum nulla quam! Qui earum magni delectus facilis tempora, porro at nisi reprehenderit, nesciunt perferendis ab voluptates dignissimos consectetur aspernatur ullam assumenda obcaecati. Vitae, inventore, sunt consequatur molestias iusto adipisci quasi nihil nemo provident voluptates omnis repudiandae eaque quia aspernatur nobis cumque molestiae quos? Id blanditiis sequi maiores, esse animi est harum amet? Corporis nemo pariatur aliquam itaque consectetur repudiandae eligendi ab nisi, rerum, vitae numquam deserunt consequuntur quis, aut corrupti! Maiores repellendus adipisci cupiditate illo, est optio amet labore nostrum officiis accusantium totam quae autem cumque, reiciendis quod! Animi eum aspernatur unde, accusantium vel architecto enim soluta corrupti explicabo velit, aut hic nulla atque voluptates saepe. Accusantium dolorum magni temporibus doloribus magnam, sit dolore animi illo nihil eaque, voluptatibus ipsam corporis expedita totam ratione, tenetur culpa numquam ut deserunt mollitia odio nam laudantium? Consectetur, harum! Sed nihil consequatur facilis quis. Aperiam eum repellat odio, libero id maiores eius pariatur ea nostrum dolores et ad quos perspiciatis hic sapiente est dolor deserunt quo! Magni ullam a unde animi optio numquam, reiciendis delectus, incidunt, blanditiis totam nihil doloribus ipsam facilis quae impedit. Consequuntur nisi debitis assumenda ea quis omnis molestiae enim, delectus cumque porro, eligendi dolor nostrum perferendis unde soluta ratione vitae quod! Minima amet praesentium fuga est quam? Dicta eaque beatae nihil incidunt tenetur omnis laudantium vero, illo voluptatem laboriosam sunt dignissimos labore, modi hic rerum necessitatibus mollitia architecto autem perspiciatis iste adipisci?</p>
                  </div>
                  <span className="view-more-btn" onClick={() => setIsOpenDesc(!isOpenDesc)}>{!isOpenDesc ? property_details.description.more : property_details.description.less}</span>
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
          <h2>{property_details.similar.title}</h2>

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

      <Modal
        title="Realtor Details"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className='contact-seller-modal'
        footer={null}
      >
        <div className="user-profile-wrapper">
          <div className="user-details-wrapper">
            <div className='user-details'>
              <img src={profile_img} alt="" className="user-profile" />
              <div className="profile-description">
                <h4>Prashant Vats</h4>
                <span>With over a decade of experience and a passion for client satisfaction, John Smith is your go-to real estate professional.</span>
              </div>
            </div>
            <div className="contact-info-wrapper">
              <h5>Contact Info</h5>
              <div className="contact-info">
                <span><img src={phone_svg} alt="" /> +91 986476483</span>
                <span><img src={mail_svg} alt="" /> prashant30@gmail.com</span>
              </div>
            </div>
            <div className="follow-icons">
              <h5>Social Media</h5>
              <div className="icons">
                <img src={instagram} alt="" />
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>

  )
}

export default PropertyDetails