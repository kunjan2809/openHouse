import { Col, Row } from 'antd'
import dealsSVG from '../assets/svgs/deals.svg'
import hostSVG from '../assets/svgs/host.svg'
import quickSVG from '../assets/svgs/quick.svg'
import Feature from './Feature'
import { home } from '../constant/string'

const Features = () => {
    return (
        <>
            <div className='featured-looking-container'>
                <div className='featured-label'>{home.features.head_msg}</div>
                <div className='underlined-heading'>
                    <h1 className='heading'>{home.features.title}</h1>
                    <div className='line'></div>
                </div>

                <div className='features-wrapper'>
                    <Row align="middle" justify="space-evenly" gutter={[0,30]}>
                        <Col xm={24} sm={24} md={12} lg={8} xl={8}>
                            <Feature
                                svgPath={dealsSVG}
                                title='EXCELLENT DEALS'
                            />
                        </Col>
                        <Col xm={24} sm={24} md={12} lg={8} xl={8}>
                            <Feature
                                svgPath={hostSVG}
                                title='FRIENDLY HOST'
                            />
                        </Col>
                        <Col xm={24} sm={24} md={12} lg={8} xl={8}>
                            <Feature
                                svgPath={quickSVG}
                                title='QUICK PROCESS'
                            />
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default Features