
import './assets/scss/createListing.scss'
import {  Popover, Steps } from 'antd';
import finishSVG from './assets/svgs/step-finish.svg'
import processSVG from './assets/svgs/step-process.svg'
import waitSVG from './assets/svgs/step-wait.svg'
import Location from './components/Location';
import Pricing from './components/Pricing';
import DateAndTime from './components/DateAndTime';
import UploadPictures from './components/UploadPictures';
import PropertyInfo from './components/PropertyInfo';
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
            Component: PropertyInfo
        },
        {
            title: 'LOCATION',
            Component: Location
        },
        {
            title: 'PRICING',
            Component: Pricing
        },
        {
            title: 'DATE & TIME',
            Component: DateAndTime
        },
        {
            title: 'UPLOAD PICTURES',
            Component: UploadPictures
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
                <h1 className='page-heading'>ADD YOUR PROPERTY</h1>

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
                            STEPS.map(({ Component }, index) => {
                                if (current === index) {
                                    return <Component
                                        key={index}
                                        handlePrev={handlePrev}
                                        handleNext={handleNext}
                                    />
                                }
                                return ''
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateListing