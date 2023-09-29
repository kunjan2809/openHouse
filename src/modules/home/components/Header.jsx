import { Input } from "antd";
import { home } from "../constant/string";

const { Search } = Input;

const Header = () => {
    return (
        <>
            <div className="header-container">
                <div className='header-container-front'>
                    <h1>{home.header.title}</h1>
                    <h4>{home.header.sub_title}</h4>
                    <div className='search-box'>
                        <Search placeholder="Search by location" enterButton />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header