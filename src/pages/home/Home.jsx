// import { Input } from 'antd';
import './home.scss'

const Home = () => {
    // const { Search } = Input;

    return (
        <>
            <div className="home-page-container">
                <div className="header-container">
                    <div className='header-container-front'>
                        <h1>Let’s Find you a Place of dream. </h1>
                        <h4>A BASE FOR GOOD LIFE.</h4>
                        <div className='search-box'>
                            {/* <Search placeholder="Search by location" enterButton /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home