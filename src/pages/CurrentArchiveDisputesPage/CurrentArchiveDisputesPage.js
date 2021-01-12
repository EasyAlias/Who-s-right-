import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { addNewId } from "./../../redux/action";
import AddNewDispute from '../../components/AddNewDispute/buttons';
import ActualDisputesButton from '../../components/ActualDisputesButton/buttons';
import './CurrentArchiveDisputesPage.css';

class CurrentArchiveDisputesPage extends Component{
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
                <h1 className="all-disputes__title">Завершенные споры</h1>
                <ul className="all-disputes">
                {this.state.dispute.map((el) => {
                    if (el.timeDispute === "0") {
                    return (
                        <Link 
                        to={`/archive/${el.id}`}
                        className="all-disputes__link">
                        <li 
                        key={el.id}
                        className="all-dispute__one-el">
                            <div className="all-dispute__text">
                                <h3>{el.questionDispure}</h3>
                            </div>
                        </li>
                    </Link>)}
                })}  
                </ul>
                <AddNewDispute />
                <ActualDisputesButton />    
            </section>
        )
    }
}

export default 
// connect(state => ({disputeId: state.disputeId}))
(CurrentArchiveDisputesPage);