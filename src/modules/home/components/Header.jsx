import { Input } from "antd";

const { Search } = Input;

const Header = () => {
    return (
        <>
            <div className="header-container">
                <div className='header-container-front'>
                    <h1>Let’s Find you a Place of dream. </h1>
                    <h4>A BASE FOR GOOD LIFE.</h4>
                    <div className='search-box'>
                        <Search placeholder="Search by location" enterButton />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header