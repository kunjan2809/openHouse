import { Col, Pagination, Row, Select } from 'antd'
// import cardImg from '../../../common/assets/images/property.png'
// import cardImg2 from '../../../common/assets/images/property-thumb-2.png'
import PropertyCard from '../../../common/components/card/PropertyCard'
import { home } from '../constant/string'
import { useDispatch, useSelector } from 'react-redux'
import { getLisitngs, listingFilter } from '../store/actions/listings'
import moment from 'moment'
import { useEffect } from 'react'
import PropTypes from "prop-types";

const PROPERTY_TYPE_OPTIONS = [
    { value: 'any', label: 'Any Type' },
    { value: 'house', label: 'House' },
    { value: 'apartment', label: 'Apartment' },
    { value: 'guest_house', label: 'Guest House' },
    { value: 'hotel', label: 'Hotel' },
]

const PRICE_OPTIONS = [
    { value: 'any', label: 'Any Price' },
    { value: '<300000', label: '<300000' },
    { value: '<500000', label: '<500000' },
    { value: '<700000', label: '<700000' },
    { value: '<1000000', label: '<1000000' },
    { value: '>1000000', label: '>1000000' },
]

const BEDROOM_OPTIONS = [
    { value: 'any', label: 'Any Beds' },
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4+', label: '4+' },
]

const SORTING_OPTIONS = [
    { value: 'any', label: 'Recommended' },
    { value: 'ascending', label: 'Ascending' },
]

const Listings = ({ setPage, page }) => {

    const dispatch = useDispatch();
    const { listings, totalListings, filters } = useSelector((state) => state.listings)

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
                <div className='featured-property-wrapper'>
                    <Row gutter={[16, 24]}>
                        {listings?.map((property) => {
                            return <Col span={6} key={property._id}>
                                <PropertyCard
                                    image={`${import.meta.env.VITE_API_URL}${property.images[0]}`}
                                    price={property.price}
                                    date={moment(property.date).format("Do MMM, YYYY")}
                                    time={property.startTime}
                                    address={`${property.address?.address}, ${property.address?.city}, ${property.address?.country}`}
                                    isSold={property.isSold}
                                    isLikeable={true}
                                    isLiked={false}
                                />
                            </Col>
                        })}
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
            </div>
        </>
    )
}

Listings.propTypes = {
    setPage: PropTypes.func,
    page: PropTypes.number,
}

export default Listings