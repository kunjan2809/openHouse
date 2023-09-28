import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const ListProperty = () => {
    const navigate = useNavigate()

    return (
        <>
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
        </>
    )
}

export default ListProperty