import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './DisputePage.css';

class DisputePage extends Component{
    state = {
        dispute:[
            {id: 1,
            timeDispute: 32,
            nameUser1: "Vasya",
            nameUser2: "Petya",
            questionDispure:"Egg or Chiken",
            answerUser1: "Egg",
            answerUser2: "Chiken",
        }],
    }
    
    render(){
        return( 
            <section className="all-disputes">
                <ul>
                  {this.props.dispute.map((el) => {
                      return (                        
                        <li className="dispute-page_list" key={el.id}>
                            <div>
                                <h1>Time:{el.timeDispute}</h1>
                                <h3>{el.questionDispure}</h3>
                                <h5>{el.nameUser1}</h5>
                                <p>{el.answerUser1}</p>
                                <button>Я за {el.nameUser1}</button>
                                <h5>{el.nameUser2}</h5>
                                <p>{el.answerUser2}</p>
                                <button>Я за {el.nameUser2}</button>
                            </div>
                        </li>
                  )})}
                </ul>
                <Link 
                to={`/current_disputes/${this.state.id}`}className="all-button"
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

export default connect(state => ({dispute: state.dispute}))(DisputePage);