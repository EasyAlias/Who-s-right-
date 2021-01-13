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
            <section className="archive-disputes-page">
                <h2 className="archive-disputes-page__title">Завершенные споры</h2>
                <ul className="archive-disputes-page__list">
                    {this.state.dispute.map((el) => {
                        if (el.timeDispute === "0") {
                            return (
                                <li 
                                    key={el.id}
                                    className="archive-disputes-page__item"
                                >
                                    <Link 
                                        to={`/archive/${el.id}`}
                                        className="archive-disputes-page__link"
                                    >
                                        {el.questionDispure}
                                    </Link>
                                </li>)
                        }
                    })}
                    <li 
                        className="archive-disputes-page__item"
                    >
                        <Link 
                            to={`/`}
                            className="archive-disputes-page__link"
                        >
                            На главную
                        </Link>
                    </li>
                </ul>
                {/* <AddNewDispute />
                <ActualDisputesButton /> */}
            </section>
        )
    }
}

export default 
// connect(state => ({disputeId: state.disputeId}))
(CurrentArchiveDisputesPage);