import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { addNewId } from "./../../redux/action";
import ActualDisputesButton from '../../components/ActualDisputesButton/buttons';
import ArchiveDisputesButton from '../../components/ArchiveDisputesButton/buttons';
import './OneCurrentDisputesPage.css';

class OneCurrentDisputesPage extends Component{
    state = {
        oneDispute:{
            timeDispute: null,
            questionDispure:"",
            nameUser1: "",
            nameUser2: "",
            answerUser1: "",
            answerUser2: "",
            voteForUser1: 0,
            voteForUser2: 0,
            },
        disabled: false,
    }

    clickHandler = () => {
        this.setState({
            disabled: true,
        })
        fetch('http://localhost:5000/dispute', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(this.state.oneDispute)
            }) 
        } 
        
    render(){
        return( 
            <section className="section-disputes">
                <div className="disputes">
                    <div>
                        <input 
                        placeholder="Введите время (кол-во дней)"
                        type="number"
                        onChange={((event) => this.setState({oneDispute:{...this.state.oneDispute, timeDispute:event.target.value}}))}
                        disabled={this.state.disabled}/>
                        <input placeholder="Введите тему спора"
                        type="text"
                        onChange={((event) => this.setState({oneDispute:{...this.state.oneDispute, questionDispure:event.target.value}}))}
                        disabled={this.state.disabled}/>
                    </div>
                    <hr/>
                    <div>
                        <div>
                            <input placeholder="Введите имя USER1"
                            type="text"
                            onChange={((event) => this.setState({oneDispute:{...this.state.oneDispute, nameUser1:event.target.value}}))}
                            disabled={this.state.disabled}/>
                            <input placeholder="Введите точку зрения USER1"
                            type="text"
                            onChange={((event) => this.setState({oneDispute:{...this.state.oneDispute, answerUser1:event.target.value}}))}
                            disabled={this.state.disabled}/>
                        </div>
                    <hr/>
                        <div>
                            <input placeholder="Введите имя USER2"
                            type="text"
                            onChange={((event) => this.setState({oneDispute:{...this.state.oneDispute, nameUser2:event.target.value}}))}
                            disabled={this.state.disabled}/>
                            <input placeholder="Введите точку зрения USER2"
                            type="text"
                            onChange={((event) => this.setState({oneDispute:{...this.state.oneDispute, answerUser2:event.target.value}}))}
                            disabled={this.state.disabled}/>
                        </div>
                    </div>
                    <hr/>
                    <button className="all-button"
                    onClick={this.clickHandler}
                    disabled={this.state.disabled}>Сохранить спор</button>
                </div>
                <hr/>     
                <ActualDisputesButton />           
                <ArchiveDisputesButton />           
            </section>
        )
    }
}

export default 
// connect(state => ({disputeId: state.disputeId}))
 (OneCurrentDisputesPage);