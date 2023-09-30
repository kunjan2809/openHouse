import { Button, Result } from 'antd'
import './assets/notFound.scss'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="not-found-page">
                <div>
                    <Result
                        status="404"
                        title="404"
                        subTitle="Sorry, the page you visited does not exist."
                        extra={<Button type="primary" onClick={() => navigate('/')}>Back Home</Button>}
                    />
                </div>
            </div>
        </>
    )
}

export default NotFound