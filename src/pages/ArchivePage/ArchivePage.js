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
            <section className="archive-page">
                <h2 className="archive-page__question">{questionDispure}</h2>
                <p className="archive-page__username"><b>{nameUser1}</b> сказал:</p>
                <p className="archive-page__opinion">{answerUser1}</p>
                <p className="archive-page__votes">Набрал голосов: {voteForUser1}</p>
                <p className="archive-page__username"><b>{nameUser2}</b> сказал:</p>
                <p className="archive-page__opinion">{answerUser2}</p>
                <p className="archive-page__votes">Набрал голосов: {voteForUser1}</p>
                <Link to="/" className="archive-page__back">На главную</Link>
                {/* <AddNewDispute />          
                <ActualDisputesButton />       */}
            </section>
        )
    }
}

export default 
// connect(state => ({disputeId: state.disputeId})) 
(ArchivePage);