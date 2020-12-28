import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './FirstPage.css';

class FirstPage extends Component{
    state = {
        id: 1,
    }
    
    render(){
        return( 
            <main className="first-page__main">
                <section className="first-page__fisrt-section">
                    <Link 
                    to={`/current_disputes/${this.state.id}`}className="first-page__add-button all-button"
                    >Добавить спор
                    </Link>
                    <button 
                    className="first-page__disputes-button all-button"
                    >Текущие споры 
                    </button>
                    <button className="first-page__archive-button all-button">Перейти в архив</button>
                </section>
            </main>
        )
    }
}

export default FirstPage;