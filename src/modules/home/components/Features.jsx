import { Col, Row } from 'antd'
import dealsSVG from '../assets/svgs/deals.svg'
import hostSVG from '../assets/svgs/host.svg'
import quickSVG from '../assets/svgs/quick.svg'
import Feature from './Feature'

const Features = () => {
    return (
        <>
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
        </>
    )
}

export default Features