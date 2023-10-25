import { Col, Pagination, Row, Select, Spin } from 'antd'
// import cardImg from '../../../common/assets/images/property.png'
// import cardImg2 from '../../../common/assets/images/property-thumb-2.png'
import PropertyCard from '../../../common/components/card/PropertyCard'
import { home } from '../constant/string'
import { useDispatch, useSelector } from 'react-redux'
import { getLisitngs, listingFilter } from '../store/actions/listings'
import moment from 'moment'
import { useEffect } from 'react'
import PropTypes from "prop-types";
import { BEDROOM_OPTIONS, PRICE_OPTIONS, PROPERTY_TYPE_OPTIONS, SORTING_OPTIONS } from '../constant/options'


const Listings = ({ setPage, page }) => {

    const dispatch = useDispatch();
    const { listings, totalListings, filters, loading: propertyLoading } = useSelector((state) => state.listings)

    const handleChange = (key, value) => {
        dispatch(listingFilter({ key, value }))
        setPage(1)
    }

    useEffect(() => {
        dispatch(getLisitngs(filters))
    }, [filters])

    useEffect(() => {
        dispatch(listingFilter({ key: 'page', value: page }))
    }, [page])


    return (
        <>
            <div className='featured-home-container'>

                <div className='featured-label'>{home.featured_listings.head_msg}</div>
                <div className='header-wrapper'>
                    <div className='underlined-heading'>
                        <h1 className='heading'>{home.featured_listings.title}</h1>
                        <div className='line'></div>
                    </div>

                    <div className='header-filter-container'>
                        <Select
                            className='filter-dropdown'
                            bordered={false}
                            value={filters.type}
                            onChange={(value) => handleChange('type', value)}
                            popupClassName={'property-filter-select'}
                            options={PROPERTY_TYPE_OPTIONS}
                        />
                        <Select
                            className='filter-dropdown'
                            bordered={false}
                            value={filters.price}
                            onChange={(value) => handleChange('price', value)}
                            popupClassName={'property-filter-select'}
                            options={PRICE_OPTIONS}
                        />
                        <Select
                            className='filter-dropdown'
                            bordered={false}
                            value={filters.bedroom}
                            onChange={(value) => handleChange('bedroom', value)}
                            popupClassName={'property-filter-select'}
                            options={BEDROOM_OPTIONS}
                        />
                        <Select
                            className='filter-dropdown'
                            bordered={false}
                            value={filters.sort}
                            onChange={(value) => handleChange('sort', value)}
                            popupClassName={'property-filter-select'}
                            options={SORTING_OPTIONS}
                        />
                    </div>
                </div>

                {!propertyLoading ? (
                    <div className='featured-property-wrapper'>
                        <Row gutter={[16, 24]}>
                            {
                                listings.length > 0 ? (<>
                                    {listings?.map((property) => {
                                        return <Col span={6} key={property._id}>
                                            <PropertyCard
                                                id={property._id}
                                                image={`${import.meta.env.VITE_API_URL}${property.images[0]}`}
                                                price={property.price}
                                                date={moment(property.date).format("Do MMM, YYYY")}
                                                time={moment(property.startTime).format('h.mmA')}
                                                address={`${property.location?.address}, ${property.location?.city}, ${property.location?.country}`}
                                                isSold={property.isSold}
                                                isLikeable={true}
                                                isLiked={false}
                                            />
                                        </Col>
                                    })}
                                </>) : (<>
                                    <h1>No properties found</h1>
                                </>)
                            }

                        </Row>
                        <div className='home-pagination'>
                            {
                                totalListings > filters?.pageSize && <Pagination
                                    current={page}
                                    total={totalListings}
                                    pageSize={filters?.pageSize}
                                    showSizeChanger={false}
                                    onChange={(p) => setPage(p)}
                                />
                            }
                        </div>
                    </div>
                )
                    : (
                        <div className='spinner'><Spin size="large" /></div>
                    )
                }

            </div>
        </>
    )
}

Listings.propTypes = {
    setPage: PropTypes.func,
    page: PropTypes.number,
}

export default Listings