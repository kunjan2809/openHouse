import { Col, Row, Select } from 'antd'
import './assets/scss/home.scss'
import cardImg from '../../common/assets/images/property.png'
import cardImg2 from '../../common/assets/images/property-thumb-2.png'

import { Pagination } from 'antd';
import PropertyCard from '../../common/components/card/PropertyCard';
import Header from './components/header';
import Features from './components/Features';
import ListProperty from './components/ListProperty';
import { home } from './constant/string';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const Home = () => {

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    return (
        <>
            <div className="home-page-container">
                <Header />

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
                                    { value: '<100000', label: '<$100000' },
                                    { value: '<200000', label: '<$200000' },
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
                                    { value: 'basement', label: 'Basement' },
                                    { value: 'apartment', label: 'Apartment' },
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

                <Features />

                <ListProperty />
            </div>
        </>
    )
}

export default Home