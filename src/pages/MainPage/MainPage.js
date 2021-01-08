import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './MainPage.css';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import FirstPage from './../FirstPage/FirstPage';
import OneCurrentDisputesPage from './../OneCurrentDisputesPage/OneCurrentDisputesPage';
import CurrentDisputesPage from './../CurrentDisputesPage/CurrentDisputesPage';
import DisputePage from './../DisputePage/DisputePage';
import CurrentArchiveDisputesPage from './../CurrentArchiveDisputesPage/CurrentArchiveDisputesPage';
import ArchivePage from './../ArchivePage/ArchivePage';

class MainPage extends Component {
    render(){
        return(
            <div className="main-page">                
                    <Header />
                    <Route path='/' exact component={FirstPage} />
                    <Route path='/current_disputes/new_dispute' exact component={OneCurrentDisputesPage} />
                    <Route path='/current_disputes' exact component={CurrentDisputesPage} />
                    <Route path='/dispute_page/:id' exact component={DisputePage} />
                    <Route path='/archive' exact component={CurrentArchiveDisputesPage} />
                    <Route path='/archive/:id' exact component={ArchivePage} />
                    <Footer />
            </div>
        )
    }
}

export default MainPage;