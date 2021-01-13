import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { addNewId } from "./../../redux/action";
import './TitlePage.css';

class FirstPage extends Component{  
    render() {
        return ( 
            <section className="first-page">
                <Link 
                    to={`/current_disputes/new_dispute`}
                    className="first-page__button first-page__button_large"
                >
                    Добавить<br/>
                    новый<br/>
                    спор
                </Link>

                <Link 
                    to={`/current_disputes`} 
                    className="first-page__button"
                >
                    Текущие споры 
                </Link>
                
                <Link 
                    to={`/archive`} 
                    className="first-page__button"
                >
                    Завершенные споры
                </Link>
            </section>
        )
    }
}

export default 
// connect(state => ({disputeId: state.disputeId}))
(FirstPage);