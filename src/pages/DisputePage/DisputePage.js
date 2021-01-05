import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import './DisputePage.css';

class DisputePage extends Component{
    state = {
        oneDispute: null,
    }
    componentDidMount() {
        const {id} = this.props.match.params;
        fetch(`http://localhost:5000/dispute/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({ 
                oneDispute: data,
                })         
            })
    }    
    render(){
        console.log(this.state.oneDispute);
        const{id, timeDispute, nameUser1, nameUser2, questionDispure, answerUser1, answerUser2} = this.state.oneDispute;
        return( 
            <section className="all-disputes">
                <ul>
                    <li className="dispute-page_list" key={id}>
                        <div>
                            <h1>Time:{timeDispute}</h1>
                            <h3>{questionDispure}</h3>
                            <h5>{nameUser1}</h5>
                            <p>{answerUser1}</p>
                            <button>Я за {nameUser1}</button>
                            <h5>{nameUser2}</h5>
                            <p>{answerUser2}</p>
                            <button>Я за {nameUser2}</button>
                        </div>
                    </li>
                </ul>
                <Link 
                to={`/current_disputes/new_dispute`}className="all-button"
                >Добавить спор
                </Link>
                <Link 
                    to={`/archive`} 
                    className="first-page__archive-button all-button"
                    >Перейти в архив
                    </Link>         
            </section>
        )
    }
}

export default 
// connect(state => ({dispute: state.dispute}))
(DisputePage);