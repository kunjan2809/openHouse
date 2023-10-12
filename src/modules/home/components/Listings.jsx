import { Col, Pagination, Row, Select } from 'antd'
import cardImg from '../../../common/assets/images/property.png'
import cardImg2 from '../../../common/assets/images/property-thumb-2.png'
import PropertyCard from '../../../common/components/card/PropertyCard'
import { home } from '../constant/string'

const Listings = () => {

    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const handleChange = (value) => {
        console.log('value :>> ', value);
    };

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
                            defaultValue="any"
                            bordered={false}
                            onChange={handleChange}
                            popupClassName={'property-filter-select'}
                            options={[
                                { value: 'any', label: 'Any Price' },
                                { value: '<300000', label: '<300000' },
                                { value: '<500000', label: '<500000' },
                                { value: '<700000', label: '<700000' },
                                { value: '<1000000', label: '<1000000' },
                                { value: '>1000000', label: '>1000000' },
                            ]}
                        />
                        <Select
                            className='filter-dropdown'
                            defaultValue="any"
                            bordered={false}
                            onChange={handleChange}
                            popupClassName={'property-filter-select'}
                            options={[
                                { value: 'any', label: 'Any Type' },
                                { value: 'house', label: 'House' },
                                { value: 'apartment', label: 'Apartment' },
                                { value: 'guest_house', label: 'Guest House' },
                                { value: 'hotel', label: 'Hotel' },
                            ]}
                        />
                        <Select
                            className='filter-dropdown'
                            defaultValue="any"
                            bordered={false}
                            onChange={handleChange}
                            popupClassName={'property-filter-select'}
                            options={[
                                { value: 'any', label: 'Any Beds' },
                                { value: '1', label: '1' },
                                { value: '2', label: '2' },
                                { value: '3', label: '3' },
                                { value: '4+', label: '4+' },
                            ]}
                        />
                        <Select
                            className='filter-dropdown'
                            defaultValue="any"
                            bordered={false}
                            onChange={handleChange}
                            popupClassName={'property-filter-select'}
                            options={[
                                { value: 'any', label: 'Recommended' },
                                { value: 'ascending', label: 'Ascending' },
                            ]}
                        />
                    </div>
                </div>
                <div className='featured-property-wrapper'>
                    <Row gutter={[16, 24]}>
                        {arr.map((val, i) => {
                            return <Col span={6} key={val}>
                                {
                                    (i % 2 === 1) ? (
                                        <PropertyCard
                                            image={cardImg2}
                                            price='3,75,000'
                                            date='15th Feb’2023'
                                            time='10:30 p.m.'
                                            address='603, Borinson street, Texas, USA'
                                            isSold={false}
                                            isLikeable={true}
                                            isLiked={false}
                                        />) : (<PropertyCard
                                            image={cardImg}
                                            price='3,75,000'
                                            date='15th Feb’2023'
                                            time='10:30 p.m.'
                                            address='603, Borinson street, Texas, USA'
                                            isSold={false}
                                            isLikeable={true}
                                            isLiked={true}
                                        />)
                                }
                            </Col>
                        })}

                    </Row>
                    <div className='home-pagination'><Pagination defaultCurrent={1} total={50} /></div>
                </div>
            </div>
        </>
    )
}

export default Listings