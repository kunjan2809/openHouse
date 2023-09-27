import { Input } from 'antd';
import { Button, Col, Row, Select } from 'antd'
import './home.scss'
import cardImg from '../../assets/images/property.png'
import cardImg2 from '../../assets/images/preperty-thumb-2.png'
import Feature from './components/Feature'
import dealsSVG from '../../assets/svgs/deals.svg'
import hostSVG from '../../assets/svgs/host.svg'
import quickSVG from '../../assets/svgs/quick.svg'
import { Pagination } from 'antd';
import PropertyCard from '../../components/card/propetyCard';
import { useNavigate } from 'react-router-dom';
const { Search } = Input;

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const Home = () => {
    const navigate = useNavigate()

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    return (
        <>
            <div className="home-page-container">
                <div className="header-container">
                    <div className='header-container-front'>
                        <h1>Let’s Find you a Place of dream. </h1>
                        <h4>A BASE FOR GOOD LIFE.</h4>
                        <div className='search-box'>
                            <Search placeholder="Search by location" enterButton />
                        </div>
                    </div>
                </div>
                <div className='featured-home-container'>
                    <div className='featured-label'>Discover</div>
                    <div className='header-wrapper'>
                        <div className='underlined-heading'>
                            <h1 className='heading'>Featured Listings Near You</h1>
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
                        <Row gutter={[0, 24]}>
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
                <div className='featured-looking-container'>
                    <div className='featured-label'>Learn more</div>
                    <div className='underlined-heading'>
                        <h1 className='heading'>{"Features You're Looking For"}</h1>
                        <div className='line'></div>
                    </div>

                    <div className='features-wrapper'>
                        <Row align="middle" justify="space-evenly">
                            <Col span={8}>
                                <Feature
                                    svgPath={dealsSVG}
                                    title='EXCELLENT DEALS'
                                />
                            </Col>
                            <Col span={8}>
                                <Feature
                                    svgPath={hostSVG}
                                    title='FRIENDLY HOST'
                                />
                            </Col>
                            <Col span={8}>
                                <Feature
                                    svgPath={quickSVG}
                                    title='QUICK PROCESS'
                                />
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className='list-your-property'>
                    <div className='list-your-property-inner'>
                        <div className='list-your-property-header'>
                            <h1>Register your property Free today.</h1>
                        </div>
                        <div className='list-property-btn-container'>
                            <Button type="primary" className="list-property-btn" onClick={() => navigate('/create-listing')}>
                                List Your Property
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home