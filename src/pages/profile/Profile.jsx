import { Button, Col, Row } from "antd"
import PropetyCard from "../../components/card/propetyCard"
import cardImg from '../../assets/images/property.png'
// import cardImg2 from '../../assets/images/home-auth.png'
import './profile.scss'

const Profile = () => {
    return (
        <>
            <div className="profile-container">
                <Row gutter={30}>
                    <Col span={6}>
                        <div className="use-profile">

                        </div>
                    </Col>
                    <Col span={18}>
                        <div className="my-listing">
                            <div className="heading">
                                <h1 className="title">My Properties</h1>
                                <Button type="primary" className='add-listing-btn'> + Add Property</Button>
                            </div>
                            {/* <Row gutter={[16, 16]}>
                                <Col span={8}>
                                    <PropetyCard
                                        image={cardImg}
                                        price='3,75,000'
                                        date='15th Feb’2023'
                                        time='10:30 p.m.'
                                        address='603, Borinson street, Texas, USA'
                                        isSold={false}
                                    />
                                </Col>
                                <Col span={8}>
                                    <PropetyCard
                                        image={cardImg}
                                        price='3,75,000'
                                        date='15th Feb’2023'
                                        time='10:30 p.m.'
                                        address='603, Borinson street, Texas, USA'
                                        isSold={false}
                                    />
                                </Col>
                                <Col span={8}>
                                    <PropetyCard
                                        image={cardImg}
                                        price='3,75,000'
                                        date='15th Feb’2023'
                                        time='10:30 p.m.'
                                        address='603, Borinson street, Texas, USA'
                                        isSold={false}
                                    />
                                </Col>
                                <Col span={8}>
                                    <PropetyCard
                                        image={cardImg}
                                        price='3,75,000'
                                        date='15th Feb’2023'
                                        time='10:30 p.m.'
                                        address='603, Borinson street, Texas, USA'
                                        isSold={false}
                                    />
                                </Col>
                                <Col span={8}>
                                    <PropetyCard
                                        image={cardImg}
                                        price='3,75,000'
                                        date='15th Feb’2023'
                                        time='10:30 p.m.'
                                        address='603, Borinson street, Texas, USA'
                                        isSold={false}
                                    />
                                </Col>
                                <Col span={8}>
                                    <PropetyCard
                                        image={cardImg}
                                        price='3,75,000'
                                        date='15th Feb’2023'
                                        time='10:30 p.m.'
                                        address='603, Borinson street, Texas, USA'
                                        isSold={false}
                                    />
                                </Col>
                            </Row> */}

                            <Row>
                                <Col span={8} >
                                    <PropetyCard
                                        image={cardImg}
                                        price='3,75,000'
                                        date='15th Feb’2023'
                                        time='10:30 p.m.'
                                        address='603, Borinson street, Texas, USA'
                                        isSold={false}
                                    />
                                </Col>
                                <Col span={8}>
                                    <PropetyCard
                                        image={cardImg}
                                        price='3,75,000'
                                        date='15th Feb’2023'
                                        time='10:30 p.m.'
                                        address='603, Borinson street, Texas, USA'
                                        isSold={false}
                                    />
                                </Col>
                                <Col span={8}>
                                    <PropetyCard
                                        image={cardImg}
                                        price='3,75,000'
                                        date='15th Feb’2023'
                                        time='10:30 p.m.'
                                        address='603, Borinson street, Texas, USA'
                                        isSold={false}
                                    />
                                </Col>
                                <Col span={8}>
                                    <PropetyCard
                                        image={cardImg}
                                        price='3,75,000'
                                        date='15th Feb’2023'
                                        time='10:30 p.m.'
                                        address='603, Borinson street, Texas, USA'
                                        isSold={false}
                                    />
                                </Col>
                                <Col span={8}>
                                    <PropetyCard
                                        image={cardImg}
                                        price='3,75,000'
                                        date='15th Feb’2023'
                                        time='10:30 p.m.'
                                        address='603, Borinson street, Texas, USA'
                                        isSold={false}
                                    />
                                </Col>
                                <Col span={8}>
                                    <PropetyCard
                                        image={cardImg}
                                        price='3,75,000'
                                        date='15th Feb’2023'
                                        time='10:30 p.m.'
                                        address='603, Borinson street, Texas, USA'
                                        isSold={false}
                                    />
                                </Col>
                            </Row>
                            <div className="view">
                                <Button className="view-btn">View all</Button>
                            </div>
                        </div>

                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Profile