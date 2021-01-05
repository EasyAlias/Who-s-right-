import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './MainPage.css';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import FirstPage from './../FirstPage/FirstPage';
import OneCurrentDisputesPage from './../OneCurrentDisputesPage/OneCurrentDisputesPage';
import CurrentDisputesPage from './../CurrentDisputesPage/CurrentDisputesPage';
import DisputePage from './../DisputePage/DisputePage';
import ArchivePage from './../ArchivePage/ArchivePage';
// import OneArchivePage from './';

class MainPage extends Component {
    render(){
        return(
            <div className="main-page">                
                    <Header />
                    <Route path='/' exact component={FirstPage} />
                    <Route path='/current_disputes/:id' exact component={OneCurrentDisputesPage} />
                    <Route path='/current_disputes' exact component={CurrentDisputesPage} />
                    <Route path='/dispute_page/new_dispute' exact component={DisputePage} />
                    <Route path='/archive' exact component={ArchivePage} />
                    {/* <Route path='/archive/:id' exact component={OneArchivePage} /> */}
                    <Footer />
            </div>
        )
    }
}

export default MainPage;