import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { addNewId } from "./../../redux/action";
import ActualDisputesButton from '../../components/ActualDisputesButton/buttons';
import ArchiveDisputesButton from '../../components/ArchiveDisputesButton/buttons';
import './OneCurrentDisputesPage.css';

let date = Date.now();

class OneCurrentDisputesPage extends Component{
    state = {
        oneDispute:{
            timeDispute: "",
            questionDispure:"",
            nameUser1: "",
            nameUser2: "",
            answerUser1: "",
            answerUser2: "",
            voteForUser1: 0,
            voteForUser2: 0,
            timestamp: 0,
            },
        disabled: false,
    }

    componentDidMount() {
        let date = Date.now();
        this.setState({
            oneDispute:{
                ...this.state.oneDispute, timestamp: date
            }
        })
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
                    <p>Введите время (кол-во дней)</p>
                    <input 
                        className='input'
                        type="number"
                        onChange={((event) => this.setState({oneDispute:{...this.state.oneDispute, timeDispute:event.target.value}}))}
                        disabled={this.state.disabled}/>
                    <p>Введите тему спора</p>
                    <input 
                        className='input'
                        type="text"
                        onChange={((event) => this.setState({oneDispute:{...this.state.oneDispute, questionDispure:event.target.value}}))}
                        disabled={this.state.disabled}/>
                        <p>Введите имя первой стороны</p>
                    <input 
                        className='input'
                        type="text"
                        onChange={((event) => this.setState({oneDispute:{...this.state.oneDispute, nameUser1:event.target.value}}))}
                        disabled={this.state.disabled}/>
                        <p>Введите точку зрения первой стороны</p>
                    <input 
                        className='input'
                        type="text"
                        onChange={((event) => this.setState({oneDispute:{...this.state.oneDispute, answerUser1:event.target.value}}))}
                        disabled={this.state.disabled}/>
                        <p>Введите имя второй стороны</p>                
                    <input 
                        className='input'
                        type="text"
                        onChange={((event) => this.setState({oneDispute:{...this.state.oneDispute, nameUser2:event.target.value}}))}
                        disabled={this.state.disabled}/>
                        <p>Введите точку зрения второй стороны</p>
                    <input
                        className='input'
                        type="text"
                        onChange={((event) => this.setState({oneDispute:{...this.state.oneDispute, answerUser2:event.target.value}}))}
                        disabled={this.state.disabled}/>
                    <button 
                        className="save-button"
                        onClick={this.clickHandler}
                        disabled={!this.state.oneDispute.timeDispute || 
                                !this.state.oneDispute.questionDispure || 
                                !this.state.oneDispute.nameUser1 || 
                                !this.state.oneDispute.nameUser2 || 
                                !this.state.oneDispute.answerUser1 || 
                                !this.state.oneDispute.answerUser2}
                                >Сохранить спор</button>
                </div>    
                    <ActualDisputesButton />           
                    <ArchiveDisputesButton />           
            </section>
        )
    }
}

export default 
// connect(state => ({disputeId: state.disputeId}))
 (OneCurrentDisputesPage);