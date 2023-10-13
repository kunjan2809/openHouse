import './assets/scss/home.scss'
import Header from './components/header';
import Features from './components/Features';
import ListProperty from './components/ListProperty';
import Listings from './components/Listings';
import { useState } from 'react';

const Home = () => {

    const [page, setPage] = useState(1)

    return (
        <>
            <div className="home-page-container">
                <Header setPage={setPage}/>
                <Listings setPage={setPage} page={page}/>
                <Features />
                <ListProperty />
            </div>
        </>
    )
}

export default Home