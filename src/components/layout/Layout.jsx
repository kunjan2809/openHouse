import Navbar from "./Navbar"
import Footer from "./Footer"
import PropTypes from "prop-types";


const Layout = (props) => {
    const children = props.children

    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node
}

export default Layout