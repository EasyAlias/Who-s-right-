import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import ActualDisputesButton from '../../components/ActualDisputesButton/buttons';
import AddNewDispute from './../../components/AddNewDispute/buttons';
import ArchiveDisputesButton from './../../components/ArchiveDisputesButton/buttons';
import './DisputePage.css';


class DisputePage extends Component{
    
    state = {
        oneDispute: {},
        disabled: false,
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

    clickHandlerUser1 = () => {
        this.setState({
            disabled: true,
        })
        fetch(`http://localhost:5000/dispute/${this.state.oneDispute.id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                        voteForUser1: 1,
                        voteForUser2: 0,
                })
            }) 
    }

    clickHandlerUser2 = () => {
        this.setState({
            disabled: true,
        })
        fetch(`http://localhost:5000/dispute/${this.state.oneDispute.id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                        voteForUser1: 0,
                        voteForUser2: 1,
                })
            }) 
    }

    render(){
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
                            <button 
                            onClick={this.clickHandlerUser1}
                            disabled={this.state.disabled}
                            >Я за {nameUser1}</button>
                            <h5>{nameUser2}</h5>
                            <p>{answerUser2}</p>
                            <button
                            onClick ={this.clickHandlerUser2}
                            disabled={this.state.disabled}
                            >Я за {nameUser2}</button>
                        </div>
                        <div>
                        
                        {/* <a href={`https://vk.com/share.php?url=http://localhost:3000/dispute_page/${this.state.oneDispute.id}`} target="_blank">
                            <button>Поделиться ВКонтакте</button>
                            </a> */} // эта ссылка работает но при открытии с сайта вк не переходит на страницу сайта.
                        </div>
                    </li>
                </ul>
                <AddNewDispute />      
                <ActualDisputesButton />      
                <ArchiveDisputesButton />      
            </section>
        )
    }
}

export default 
// connect(state => ({dispute: state.dispute}))
(DisputePage);