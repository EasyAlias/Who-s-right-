import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { addNewId } from "./../../redux/action";
import AddNewDispute from './../../components/AddNewDispute/buttons';
import ActualDisputesButton from '../../components/ActualDisputesButton/buttons';
import './ArchivePage.css';

class ArchivePage extends Component{
    state = {
        oneDispute: {},
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        fetch(`http://localhost:5000/dispute/${id}`)
        .then(res => res.json())
        .then(data => {
            this.setState({ 
                oneDispute: data,
                })         
            })
    }    
    
    render(){
        const{id, nameUser1, nameUser2, questionDispure, answerUser1, answerUser2, voteForUser1, voteForUser2} = this.state.oneDispute;
        return( 
            <section className="all-archive">
                <ul>
                    <li className="dispute-page_list" key={id}>
                        <div>
                            <h3>{questionDispure}</h3>
                            <h5>{nameUser1}</h5>
                            <p>{answerUser1}</p>
                            <p>За {nameUser1} проголосовало: {voteForUser1}</p>
                            <h5>{nameUser2}</h5>
                            <p>{answerUser2}</p>
                            <p>За {nameUser2} проголосовало: {voteForUser2}</p>
                        </div>
                    </li>
                </ul>
                <AddNewDispute />          
                <ActualDisputesButton />      
            </section>
        )
    }
}

export default 
// connect(state => ({disputeId: state.disputeId})) 
(ArchivePage);