import Navbar from "./Navbar"
import Footer from "./Footer"
import PropTypes from "prop-types"
import './layout.scss'


const Layout = (props) => {
    const children = props.children

    return (
        <>
            <Navbar />
            <div className="layout-child">
                {children}
            </div>
            <Footer />
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node
}

export default Layout