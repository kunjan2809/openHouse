import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { home } from '../constant/string'

const ListProperty = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className='list-your-property'>
                <div className='list-your-property-inner'>
                    <div className='list-your-property-header'>
                        <h1>{home.register.title}</h1>
                    </div>
                    <div className='list-property-btn-container'>
                        <Button type="primary" className="list-property-btn" onClick={() => navigate('/create-listing')}>
                            {home.register.btn_text}
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListProperty