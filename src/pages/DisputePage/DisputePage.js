import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
            <section className="dispute-page">
                <h2 className="dispute-page__question">{questionDispure}</h2>
                <p className="dispute-page__username"><b>{nameUser1}</b> говорит:</p>
                <p className="dispute-page__opinion">{answerUser1}</p>
                <p className="dispute-page__username"><b>{nameUser2}</b> говорит:</p>
                <p className="dispute-page__opinion">{answerUser2}</p>
                {this.state.disabled ?
                    <div>
                        <p className="dispute-page__whosright">Вы проголосовали!</p>
                        <Link to="/" className="dispute-page__back">На главную</Link>
                    </div>
                :
                    <div>
                        <p className="dispute-page__whosright">Кто прав?</p>
                        <div className="dispute-page__buttons">
                            <button
                            className="dispute-page__button"
                            onClick={this.clickHandlerUser1}
                            disabled={this.state.disabled}
                            >
                                {nameUser1}
                            </button>
                            <button
                            className="dispute-page__button"
                            onClick ={this.clickHandlerUser2}
                            disabled={this.state.disabled}
                            >
                                {nameUser2}
                            </button>
                        </div>
                    </div>
                }
                
                        
                {/* <a href={`https://vk.com/share.php?url=http://localhost:3000/dispute_page/${this.state.oneDispute.id}`} target="_blank">
                    <button>Поделиться ВКонтакте</button>
                    </a> эта ссылка работает но при открытии с сайта вк не переходит на страницу сайта. */} 
                {/* <AddNewDispute />      
                <ActualDisputesButton />      
                <ArchiveDisputesButton />       */}
            </section>
        )
    }
}

export default 
// connect(state => ({dispute: state.dispute}))
(DisputePage);