import './assets/scss/home.scss'
import Header from './components/header';
import Features from './components/Features';
import ListProperty from './components/ListProperty';
import Listings from './components/Listings';

const Home = () => {

    return (
        <>
            <div className="home-page-container">
                <Header />
                <Listings />
                <Features />
                <ListProperty />
            </div>
        </>
    )
}

export default Home