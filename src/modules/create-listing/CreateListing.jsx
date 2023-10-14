
import './assets/scss/createListing.scss'
import { Popover, Steps } from 'antd';
import finishSVG from './assets/svgs/step-finish.svg'
import processSVG from './assets/svgs/step-process.svg'
import waitSVG from './assets/svgs/step-wait.svg'
import Location from './components/Location';
import Pricing from './components/Pricing';
import DateAndTime from './components/DateAndTime';
import UploadPictures from './components/UploadPictures';
import PropertyInfo from './components/PropertyInfo';
import { useState } from 'react';
import { add_listing } from './constant/string';

// Stepper configurations
const STATUS = {
    finish: 'finish',
    process: 'process',
    wait: 'wait'
}

const STEPS = [
    {
        title: add_listing.steps.step1.title,
        Component: PropertyInfo
    },
    {
        title: add_listing.steps.step2.title,
        Component: Location
    },
    {
        title: add_listing.steps.step3.title,
        Component: Pricing
    },
    {
        title: add_listing.steps.step4.title,
        Component: DateAndTime
    },
    {
        title: add_listing.steps.step5.title,
        Component: UploadPictures
    },
]

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

    const handlePrev = () => {
        if (current !== 0)
            setCurrent(current - 1)
    }
    const handleNext = () => {
        if (current < STEPS.length)
            setCurrent(current + 1)
    }

    const handleChangeStep = (value) => {
        setCurrent(value);
    }

    return (
        <>
            <div className="create-property-stepper">
                <h1 className='page-heading'>{add_listing.title}</h1>

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