import { Input } from "antd";
import { home } from "../constant/string";
import { useDispatch } from "react-redux";
import { listingFilter } from "../store/actions/listings";
import PropTypes from "prop-types";

const { Search } = Input;

const Header = ({ setPage }) => {
    const dispatch = useDispatch();

    const handleSearch = (key, value) => {
        dispatch(listingFilter({ key, value }))
        setPage(1)
    }

    return (
        <>
            <div className="header-container">
                <div className='header-container-front'>
                    <h1>{home.header.title}</h1>
                    <h4>{home.header.sub_title}</h4>
                    <div className='search-box'>
                        <Search
                            placeholder="Search by city"
                            enterButton
                            onSearch={(value) => handleSearch('search', value)}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

Header.propTypes = {
    setPage: PropTypes.func,
}

export default Header