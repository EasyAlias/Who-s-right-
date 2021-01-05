import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addNewId } from "./../../redux/action";
import './CurrentDisputesPage.css';

class CurrentDisputesPage extends Component{
    state = {
        dispute: [],
    }
componentDidMount() {
    fetch(`http://localhost:5000/dispute`)
        .then(res => res.json())
        .then(data => {
            this.setState({ 
                dispute: data,
            })
        })
    }    
    render(){
        return( 
            <section className="all-disputes">
                <ul>
                {this.state.dispute.map((el) => {
                    return (
                        <Link to={`/dispute_page/${el.id}`}>
                        <li key={el.id}>
                            <div>
                                <h3>{el.questionDispure}</h3>
                            </div>
                        </li>
                    </Link>)
                })}  
                </ul>
                <Link 
                onClick ={() => this.props.dispatch(addNewId())}
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

export default connect(state => ({disputeId: state.disputeId}))(CurrentDisputesPage);