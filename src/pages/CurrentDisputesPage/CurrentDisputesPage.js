import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { addNewId } from "./../../redux/action";
import AddNewDispute from './../../components/AddNewDispute/buttons';
import ArchiveDisputesButton from './../../components/ArchiveDisputesButton/buttons';
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
            <section className="all-disputes-page">
                <h2 className="all-disputes-page__title">Текущие споры</h2>
                <ul className="all-disputes-page__list">
                    {this.state.dispute.map((el) => {
                        if (el.timeDispute !== "0") {
                        return (
                            <li 
                            key={el.id}
                            className="all-disputes-page__item">
                                <Link to={`/dispute_page/${el.id}`}
                                className="all-disputes-page__link">
                                    {el.questionDispure}
                                </Link>
                            </li>
                        )}
                    })}
                    <li 
                        className="all-disputes-page__item">
                            <Link to={`/`}
                            className="all-disputes-page__link">
                                На главную
                            </Link>
                        </li>
                </ul>
                {/* <AddNewDispute />
                <ArchiveDisputesButton />     */}
            </section>
        )
    }
}

export default 
// connect(state => ({disputeId: state.disputeId}))
(CurrentDisputesPage);