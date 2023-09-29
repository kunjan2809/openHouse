import './assets/scss/blog.scss'
import { Row, Col } from 'antd'
import { Pagination } from 'antd';
import BlogCard from '../../common/components/card/BlogCard';
import cardImg2 from '../../common/assets/images/property-thumb-2.png'
import { blog } from './constant/string';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const Blog = () => {
    return (
        <>
            <div className="blog-page-container">
                <div className="blog-header-container">
                    <div className='blog-container-front'>
                        <h1>{blog.header.title}</h1>
                        <h4>{blog.header.sub_title}</h4>
                    </div>
                </div>
                <div className='blogs-wrapper'>
                    <div className='underlined-heading'>
                        <h1 className='heading'>{blog.title}</h1>
                        <div className='line'></div>
                    </div>
                    <div className='blogs-container'>
                        <Row gutter={[26, 26]}>
                            {arr.map((val, i) => {
                                return <Col span={8} key={val}>
                                    {
                                        (i % 2 === 1) ? (
                                            <BlogCard
                                                heading={'Who We Are & Why We’re Different'}
                                                description={'Guidance Real Estate, LLC helps property owners navigate the selling process by offering personalized & tailored solutions to get your home sold fast & for top dollar '}
                                                date={'22 Feb’ 2023'}
                                                image={cardImg2}
                                                isTranding={false}
                                            />) : (<BlogCard
                                                heading={'Who We Are & Why We’re Different'}
                                                description={'Guidance Real Estate, LLC helps property owners navigate the selling process by offering personalized & tailored solutions to get your home sold fast & for top dollar '}
                                                date={'22 Feb’ 2023'}
                                                image={cardImg2}
                                                isTranding={true}
                                            />)
                                    }

                                </Col>
                            })}

                        </Row>
                        <div className='home-pagination'><Pagination defaultCurrent={1} total={50} /></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog