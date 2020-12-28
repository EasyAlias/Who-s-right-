import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './FirstPage.css';

class FirstPage extends Component{
    state = {
        dispute: [
            {id: 1,
            timeDispute: null,
            nameUser1: "",
            nameUser2: "",
            questionDispure:"",
            answerUser1: "",
            answerUser2: "",
        }]
    }
    
    render(){
        return( 
            <main className="first-page__main">
                <section className="first-page__fisrt-section">
                    <Link 
                    to={`/current_disputes/${this.state.dispute.id}`}className="first-page__add-button all-button"
                    >Добавить спор
                    </Link>
                    <Link 
                    to={`/current_disputes`} className="first-page__add-button all-button"
                    >Текущие споры 
                    </Link>
                    <Link 
                    to={`/archive`} className="first-page__archive-button all-button">Перейти в архив</Link>
                </section>
            </main>
        )
    }
}

export default FirstPage;