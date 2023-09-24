
import './createListing.scss'
import { Button, Popover, Steps } from 'antd';
import finishSVG from '../../assets/svgs/step-finish.svg'
import processSVG from '../../assets/svgs/step-process.svg'
import waitSVG from '../../assets/svgs/step-wait.svg'
import PropertyDetails from './conponents/PropertyDetails';
import Location from './conponents/Location';
import Pricing from './conponents/Pricing';
import DateAndTime from './conponents/DateAndTime';
import UploadPictures from './conponents/UploadPictures';
import { useState } from 'react';

const STATUS = {
    finish: 'finish',
    process: 'process',
    wait: 'wait'
}
const customDot = (dot, data) => {
    const { status, title } = data
    if (status === STATUS.finish) {
        return (
            <Popover
                content={
                    <span>
                        {title}
                    </span>
                }
            >
                <img className='step-finish' src={finishSVG} alt=' ' />
            </Popover>
        )
    } else if (status === STATUS.process) {
        return (
            <Popover
                content={
                    <span>
                        {title}
                    </span>
                }
            >
                <img className='step-process' src={processSVG} alt=' ' />
            </Popover>
        )
    } else {
        return (
            <Popover
                content={
                    <span>
                        {title}
                    </span>
                }
            >
                <img className='step-wait' src={waitSVG} alt=' ' />
            </Popover>
        )
    }
}

const CreateListing = () => {

    const [current, setCurrent] = useState(0);


    const STEPS = [
        {
            title: 'PROPERTY DETAILS',
            Conponent: PropertyDetails
        },
        {
            title: 'LOCATION',
            Conponent: Location
        },
        {
            title: 'PRICING',
            Conponent: Pricing
        },
        {
            title: 'DATE & TIME',
            Conponent: DateAndTime
        },
        {
            title: 'UPLOAD PICTURES',
            Conponent: UploadPictures
        },
    ]

    const handlePrev = () => {
        if (current !== 0)
            setCurrent(current - 1)
    }
    const handleNext = () => {
        if (current < STEPS.length)
            setCurrent(current + 1)
    }

    const handleChangeStep = (value) => {
        console.log('onChange:', value);
        setCurrent(value);
    }

    return (
        <>
            <div className="create-property-stepper">
                <h1 className='page-heading'>ADD YOUR LISTING</h1>

                <div className='stepper'>
                    <Steps
                        progressDot={customDot}
                        items={STEPS}
                        current={current}
                        onChange={handleChangeStep}
                    />
                </div>

                <div className='step-form-page'>
                    <div className='property-form'>
                        {
                            STEPS.map(({ Conponent }, index) => {
                                if (current === index) {
                                    return <Conponent key={index} />
                                }
                                return ''
                            })
                        }
                    </div>
                    <div className='page-ctrl'>
                        <Button type="primary" className="btn" onClick={() => handlePrev()}>Prev</Button>
                        <Button type="primary" className="btn" onClick={() => handleNext()}>Save & Next</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateListing