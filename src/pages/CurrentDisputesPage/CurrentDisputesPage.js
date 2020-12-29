import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './CurrentDisputesPage.css';

class CurrentDisputesPage extends Component{
    state = {
        
    }
    
    render(){
        return( 
            <section className="all-disputes">
                <ul>
                  {this.props.dispute.map((el) => {
                      return (
                        <Link to={`/dispute_page/${el.id}`}>
                        <li key={el.id}>
                            {/* <img className="list__movie-item__poster" src={item.Poster} alt={item.Title} /> */}
                            <div>
                                <h3>{el.questionDispure}</h3>
                            </div>
                        </li>
                    </Link>)
                  })}  
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

export default connect(state => ({dispute: state.dispute}))(CurrentDisputesPage);