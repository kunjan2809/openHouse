// import { Input } from 'antd';
import { Col, DatePicker, Row, Select } from 'antd'
import './home.scss'
import PropetyCard from '../../components/card/propetyCard'
import cardImg from '../../assets/images/property.png'

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const Home = () => {
    // const { Search } = Input;

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
                            {/* <Search placeholder="Search by location" enterButton /> */}
                        </div>
                    </div>
                </div>
                <div className='featured-home-container'>
                    <div className='featured-label'>Discover</div>
                    <div className='header-wrapper'>
                        <div className='heading'>
                            <span className='featured-text'>Feat</span>ured Listings Near You
                        </div>
                        <div className='header-filter-container'>
                            <Select
                                className='filter-dropdown'
                                defaultValue="any"
                                bordered={false}
                                onChange={handleChange}
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
                                options={[
                                    { value: 'any', label: 'Any Type' },
                                    { value: 'basement', label: 'basement' },
                                    { value: 'apartment', label: 'Apartment' },
                                ]}
                            />
                        </div>
                    </div>
                    <div className='featured-property-wrapper'>
                        <Row>
                            {arr.map((val) => {
                                return <Col span={6} key={val}>
                                    <PropetyCard
                                        image={cardImg}
                                        price='3,75,000'
                                        date='15th Feb’2023'
                                        time='10:30 p.m.'
                                        address='603, Borinson street, Texas, USA'
                                        isSold={false}
                                    />
                                </Col>
                            })}

                        </Row>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home