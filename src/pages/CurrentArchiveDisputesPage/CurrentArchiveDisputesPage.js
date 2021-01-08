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
                <ul>
                {this.state.dispute.map((el) => {
                    if (el.timeDispute === "0") {
                    return (
                        <Link to={`/archive/${el.id}`}>
                        <li key={el.id}>
                            <div>
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