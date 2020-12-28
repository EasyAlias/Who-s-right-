import React, { Component } from 'react';
import './firstPage.css';
import Header from './../../components/Header/header';
// import ActualAndArchiveButton from './../../components/ActualAndArchiveButton';
// import Footer from './../../components/Footer';

class FirstPage extends Component {
    render(){
        return(
            <div className="first-page"> 
                <header className="first-page__header">
                    <Header />
                </header>
                <main className="first-page__main">
                    <section className="first-page__fisrt-section">
                        <div className="first-page__button-section">
                            {/* <ActualAndArchiveButton /> */}
                        </div>
                    </section>
                    <section className="first-page__second-section">
                        <div>
                            // здесь будет код
                        </div>
                    </section>
                </main>
                <footer className="first-page__footer">
                    {/* <Footer /> */}
                </footer>
            </div>
        )
    }
}

export default FirstPage;