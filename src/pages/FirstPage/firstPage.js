import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { addNewId } from "./../../redux/action";
import './FirstPage.css';

class FirstPage extends Component{  
    render(){
        return( 
            <main className="first-page__main">
                <section className="first-page__fisrt-section">
                    <Link 
                    to={`/current_disputes/new_dispute`}
                    className="first-page__add-button all-button"
                    >Добавить спор
                    </Link>
                    <Link 
                    to={`/current_disputes`} className="first-page__add-button all-button"
                    >Текущие споры 
                    </Link>
                    <Link 
                    to={`/archive`} className="first-page__archive-button all-button">
                        Перейти в архив</Link>
                </section>
            </main>
        )
    }
}

export default 
// connect(state => ({disputeId: state.disputeId}))
(FirstPage);