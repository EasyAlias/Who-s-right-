import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { addNewId } from "./../../redux/action";
import FirstImg from './../../img/Main_Imd_1.png'
import SecondImg from './../../img/Main_Imd_2.png'
import './FirstPage.css';

class FirstPage extends Component{  
    render(){
        return( 
            <section className="first-page__fisrt-section">
                <div className="first-page__first-el">
                    <img src={FirstImg} className="img1" alt="6-9" />
                    <Link 
                    to={`/current_disputes`} 
                    className="first-page__dispute-button all-first-page-button"
                    >Текущие споры 
                    </Link>
                </div>
                <Link 
                to={`/current_disputes/new_dispute`}
                className="first-page__add-button all-first-page-button"
                >Добавить спор
                </Link>
                <div className="first-page__third-el">
                    <Link 
                    to={`/archive`} 
                    className="first-page__archive-button all-first-page-button"
                    >Завершенные споры</Link>
                    <img src={SecondImg} className="img2" alt="see" />
                </div>
            </section>
        )
    }
}

export default 
// connect(state => ({disputeId: state.disputeId}))
(FirstPage);